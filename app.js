(() => {
  "use strict";

  const DB_NAME = "Fisio90sDB";
  const DB_VERSION = 3;
  const STORES = {
    users: "users",
    history: "history",
    patients: "patients"
  };

  const state = {
    db: null,
    currentUser: null,
    deferredInstallPrompt: null,
    activeScreen: "welcomeScreen",
    patientRecords: [],
    historyRecords: [],
    searchIndex: []
  };

  const $ = (id) => document.getElementById(id);
  const screens = ["welcomeScreen", "loginScreen", "homeScreen", "databaseScreen", "patientsScreen"];

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    restoreTheme();
    bindNavigation();
    renderOptions();
    buildSearchIndex();
    updateConnectionStatus();

    try {
      state.db = await openDatabase();
      await restoreSession();
    } catch (error) {
      console.error(error);
      showToast("Não foi possível abrir o banco local. Verifique o armazenamento do navegador.");
      showScreen("welcomeScreen");
    }

    registerServiceWorker();
    bindInstallPrompt();
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("IndexedDB não disponível."));
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains(STORES.users)) {
          const users = db.createObjectStore(STORES.users, { keyPath: "username" });
          users.createIndex("createdAt", "createdAt", { unique: false });
        }

        if (!db.objectStoreNames.contains(STORES.history)) {
          const history = db.createObjectStore(STORES.history, { keyPath: "id", autoIncrement: true });
          history.createIndex("username", "username", { unique: false });
          history.createIndex("username_createdAt", ["username", "createdAt"], { unique: false });
        }

        if (!db.objectStoreNames.contains(STORES.patients)) {
          const patients = db.createObjectStore(STORES.patients, { keyPath: "id", autoIncrement: true });
          patients.createIndex("username", "username", { unique: false });
          patients.createIndex("username_createdAt", ["username", "createdAt"], { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Falha no IndexedDB."));
    });
  }

  function store(storeName, mode = "readonly") {
    return state.db.transaction(storeName, mode).objectStore(storeName);
  }

  function requestToPromise(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function deleteRecordsByIndex(storeName, indexName, key) {
    return new Promise((resolve, reject) => {
      const transaction = state.db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const index = objectStore.index(indexName);
      const cursorRequest = index.openCursor(key);

      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result;
        if (!cursor) return;
        cursor.delete();
        cursor.continue();
      };

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error || new Error("Transação abortada."));
    });
  }

  async function getUser(username) {
    return requestToPromise(store(STORES.users).get(username));
  }

  async function saveUser(user) {
    return requestToPromise(store(STORES.users, "readwrite").put(user));
  }

  async function addHistory(record) {
    return requestToPromise(store(STORES.history, "readwrite").add(record));
  }

  async function getHistoryForUser(username) {
    const records = await requestToPromise(store(STORES.history).index("username").getAll(username));
    return records.sort((a, b) => b.createdAt - a.createdAt);
  }

  async function clearHistoryForUser(username) {
    await deleteRecordsByIndex(STORES.history, "username", username);
  }

  async function addPatient(patient) {
    return requestToPromise(store(STORES.patients, "readwrite").add(patient));
  }

  async function getPatientsForUser(username) {
    const records = await requestToPromise(store(STORES.patients).index("username").getAll(username));
    return records.sort((a, b) => b.createdAt - a.createdAt);
  }

  async function deletePatient(id) {
    return requestToPromise(store(STORES.patients, "readwrite").delete(id));
  }

  function bindNavigation() {
    $("startButton").addEventListener("click", () => {
      showScreen("loginScreen");
      $("usernameInput").focus();
    });

    $("backToWelcomeButton").addEventListener("click", () => {
      $("loginError").textContent = "";
      $("loginForm").reset();
      showScreen("welcomeScreen");
    });

    $("loginForm").addEventListener("submit", handleLogin);

    $("usernameInput").addEventListener("input", (event) => {
      event.target.value = sanitizeUsername(event.target.value);
      $("loginError").textContent = "";
    });

    $("openDatabaseButton").addEventListener("click", async () => {
      showScreen("databaseScreen");
      await refreshDatabaseArea();
      $("databaseSearch").focus();
    });

    $("openPatientsButton").addEventListener("click", async () => {
      showScreen("patientsScreen");
      await refreshPatientArea();
      $("patientName").focus();
    });

    document.querySelectorAll("[data-go-home]").forEach((button) => {
      button.addEventListener("click", () => showScreen("homeScreen"));
    });

    $("logoutButton").addEventListener("click", logout);
    $("themeToggle").addEventListener("click", toggleTheme);

    $("databaseSearch").addEventListener("input", debounce(async () => {
      await runDatabaseSearch($("databaseSearch").value, { saveHistory: false });
    }, 120));

    $("databaseSearch").addEventListener("keydown", async (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      await runDatabaseSearch($("databaseSearch").value, { saveHistory: true });
    });

    $("clearSearchButton").addEventListener("click", async () => {
      $("databaseSearch").value = "";
      await runDatabaseSearch("", { saveHistory: false });
      $("databaseSearch").focus();
    });

    $("clearHistoryButton").addEventListener("click", async () => {
      if (!state.currentUser) return;
      const confirmed = window.confirm("Apagar o histórico de pesquisas deste usuário?");
      if (!confirmed) return;
      await clearHistoryForUser(state.currentUser.username);
      await refreshHistory();
      showToast("Histórico apagado.");
    });

    $("patientForm").addEventListener("submit", handlePatientSave);
    $("patientList").addEventListener("click", handlePatientListClick);

    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);

    $("searchHistory").addEventListener("click", async (event) => {
      const button = event.target.closest("[data-history-query]");
      if (!button) return;
      $("databaseSearch").value = button.dataset.historyQuery;
      await runDatabaseSearch(button.dataset.historyQuery, { saveHistory: false });
    });
  }

  function sanitizeUsername(value) {
    return value
      .replace(/\s+/g, "")
      .replace(/^@+/, "")
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .slice(0, 30)
      .toLowerCase();
  }

  async function handleLogin(event) {
    event.preventDefault();
    const username = sanitizeUsername($("usernameInput").value);

    if (!/^[a-z0-9_-]{3,30}$/.test(username)) {
      $("loginError").textContent = "Use 3–30 caracteres: letras, números, _ ou -.";
      $("usernameInput").focus();
      return;
    }

    try {
      let user = await getUser(username);

      if (!user) {
        user = { username, createdAt: Date.now(), lastLoginAt: Date.now() };
        await saveUser(user);
        showToast(`Usuário @${username} criado neste dispositivo.`);
      } else {
        user.lastLoginAt = Date.now();
        await saveUser(user);
        showToast(`Bem-vindo(a) de volta, @${username}.`);
      }

      state.currentUser = user;
      localStorage.setItem("fisio90s.currentUser", user.username);
      await refreshDashboard();
      showScreen("homeScreen");
    } catch (error) {
      console.error(error);
      $("loginError").textContent = "Falha ao salvar o usuário. Tente novamente.";
    }
  }

  async function restoreSession() {
    const savedUsername = localStorage.getItem("fisio90s.currentUser");
    if (!savedUsername) {
      showScreen("welcomeScreen");
      return;
    }

    const user = await getUser(savedUsername);
    if (!user) {
      localStorage.removeItem("fisio90s.currentUser");
      showScreen("welcomeScreen");
      return;
    }

    state.currentUser = user;
    await refreshDashboard();
    showScreen("homeScreen");
  }

  async function logout() {
    state.currentUser = null;
    state.patientRecords = [];
    state.historyRecords = [];
    localStorage.removeItem("fisio90s.currentUser");
    $("loginForm").reset();
    $("patientForm").reset();
    $("selectedPatientSummary").innerHTML = placeholderSummary();
    $("databaseSearch").value = "";
    showScreen("welcomeScreen");
  }

  function showScreen(screenId) {
    screens.forEach((id) => {
      const el = $(id);
      if (el) el.classList.toggle("active", id === screenId);
    });

    $("topbarActions").classList.toggle("hidden", screenId === "welcomeScreen");
    state.activeScreen = screenId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function refreshDashboard() {
    if (!state.currentUser) return;

    const [patients, history] = await Promise.all([
      getPatientsForUser(state.currentUser.username),
      getHistoryForUser(state.currentUser.username)
    ]);

    state.patientRecords = patients;
    state.historyRecords = history;

    $("currentUserBadge").textContent = `@${state.currentUser.username}`;
    $("homeUserName").textContent = `@${state.currentUser.username}`;
    $("patientCount").textContent = String(patients.length);
    $("searchCount").textContent = String(history.length);
  }

  async function refreshDatabaseArea() {
    await refreshHistory();
    await runDatabaseSearch($("databaseSearch").value || "", { saveHistory: false });
  }

  async function refreshHistory() {
    if (!state.currentUser) return;
    state.historyRecords = await getHistoryForUser(state.currentUser.username);
    $("searchCount").textContent = String(state.historyRecords.length);
    renderHistory();
  }

  function renderHistory() {
    const container = $("searchHistory");

    if (!state.historyRecords.length) {
      container.innerHTML = '<span class="history-empty">Nenhuma pesquisa registrada ainda.</span>';
      return;
    }

    const unique = [];
    const seen = new Set();

    for (const record of state.historyRecords) {
      const normalized = normalizeText(record.query);
      if (!seen.has(normalized)) {
        unique.push(record);
        seen.add(normalized);
      }
      if (unique.length >= 12) break;
    }

    container.innerHTML = unique.map((record) => {
      const safe = escapeHtml(record.query);
      return `<button class="history-chip" data-history-query="${safe}" type="button">⌕ ${safe}</button>`;
    }).join("");
  }

  function buildSearchIndex() {
    state.searchIndex = CLINICAL_DATABASE.map((entry) => {
      const searchable = [
        entry.nome_patologia,
        entry.regiao_corpo,
        ...(entry.palavras_chave || []),
        ...(entry.sintomas || []),
        ...(entry.testes_ortopedicos_neurologicos || []),
        ...(entry.conduta_terapeutica || []),
        ...(entry.referencias_cientificas || [])
      ];

      const normalizedFields = {
        title: normalizeText(entry.nome_patologia),
        region: normalizeText(entry.regiao_corpo),
        keywords: normalizeText((entry.palavras_chave || []).join(" ")),
        symptoms: normalizeText((entry.sintomas || []).join(" ")),
        tests: normalizeText((entry.testes_ortopedicos_neurologicos || []).join(" ")),
        conduct: normalizeText((entry.conduta_terapeutica || []).join(" ")),
        references: normalizeText((entry.referencias_cientificas || []).join(" ")),
        all: normalizeText(searchable.join(" "))
      };

      return { entry, normalizedFields };
    });
  }

  function runSmartSearch(rawQuery) {
    const query = normalizeText(rawQuery).trim();

    if (!query) {
      return state.searchIndex.map(({ entry }) => ({ entry, score: 1 }));
    }

    const queryTokens = tokenize(query);
    const compactQuery = query.replace(/\s+/g, "");
    const expansionTokens = expandQueryTokens(queryTokens);

    const ranked = [];

    for (const item of state.searchIndex) {
      const { entry, normalizedFields } = item;
      let score = 0;

      const fieldWeights = [
        ["title", 90],
        ["region", 80],
        ["keywords", 75],
        ["symptoms", 70],
        ["tests", 22],
        ["conduct", 18],
        ["references", 10],
        ["all", 5]
      ];

      for (const [field, weight] of fieldWeights) {
        const haystack = normalizedFields[field];

        if (haystack.includes(query)) {
          score += weight;
        }

        for (const token of expansionTokens) {
          if (!token) continue;

          if (haystack.includes(token)) {
            score += Math.max(8, Math.round(weight * 0.34));
            continue;
          }

          const bestDistance = findClosestTokenDistance(token, haystack);
          if (bestDistance !== null) {
            const limit = fuzzyDistanceLimit(token);
            if (bestDistance <= limit) {
              score += Math.max(3, Math.round(weight * (0.22 - bestDistance * 0.04)));
            }
          }
        }
      }

      for (const token of queryTokens) {
        if (token.length <= 2) continue;
        if (normalizedFields.title.includes(token)) score += 15;
        if (normalizedFields.region.includes(token)) score += 18;
        if (normalizedFields.keywords.includes(token)) score += 16;
        if (normalizedFields.symptoms.includes(token)) score += 12;
      }

      if (queryTokens.length > 1 && queryTokens.every(token =>
        normalizedFields.all.includes(token)
      )) {
        score += 35;
      }

      if (score > 0) ranked.push({ entry, score });
    }

    return ranked.sort((a, b) => b.score - a.score);
  }

  function expandQueryTokens(tokens) {
    const aliases = {
      "mao": ["mão", "maos", "punho", "dedos", "polegar"],
      "maos": ["mao", "mão", "punho", "dedos"],
      "punho": ["punho", "mao", "mão"],
      "pe": ["pe", "pé", "calcanhar", "antepe", "tornozelo"],
      "pé": ["pe", "pé", "calcanhar", "antepe", "tornozelo"],
      "pés": ["pe", "pé", "calcanhar", "tornozelo"],
      "tornozelo": ["tornozelo", "pe", "pé"],
      "joelho": ["joelho", "patela", "menisco", "lca", "quadriceps"],
      "quadril": ["quadril", "coxa", "trocanter", "gluteo"],
      "ombro": ["ombro", "manguito", "rotador", "subacromial"],
      "cotovelo": ["cotovelo", "epicondilalgia", "epicondilite", "extensores", "flexores"],
      "coluna": ["coluna", "cervical", "toracica", "lombar", "costas"],
      "cervical": ["cervical", "pescoço", "radiculopatia"],
      "lombar": ["lombar", "lombalgia", "ciatica", "disco"],
      "neurologia": ["neurologia", "avc", "parkinson", "esclerose", "vestibular"],
      "tontura": ["tontura", "vertigem", "vestibular", "vppb"],
      "vertigem": ["vertigem", "vppb", "vestibular"],
      "dor": ["dor", "doloroso", "algia", "pain"],
      "formigamento": ["formigamento", "parestesia", "dormencia"],
      "dormencia": ["dormencia", "parestesia", "formigamento", "neuropatia"],
      "edema": ["edema", "inchaço"],
      "fraqueza": ["fraqueza", "perda de força"],
      "rigidez": ["rigidez", "mobilidade"]
    };

    const expanded = new Set(tokens);
    for (const token of tokens) {
      const adds = aliases[token] || [];
      for (const add of adds) expanded.add(normalizeText(add));
    }
    return [...expanded];
  }

  function runDatabaseSearch(rawQuery, { saveHistory = false } = {}) {
    const query = rawQuery.trim();
    const results = runSmartSearch(query);
    const displayLimit = query ? results.length : CLINICAL_DATABASE.length;

    $("resultsTitle").textContent = query ? `Resultados para “${query}”` : "Condições disponíveis";
    $("resultCount").textContent = String(displayLimit);

    const entries = results.map(item => item.entry);

    $("databaseResults").innerHTML = entries.length
      ? entries.map(renderClinicalCard).join("")
      : '<div class="empty-state">Nenhum resultado forte foi encontrado. Tente região (“punho”, “pé”, “coluna”), sintoma (“formigamento”, “edema”), condição ou teste.</div>';

    if (saveHistory && normalizeText(query) && state.currentUser) {
      saveSearchToHistory(query).catch(error => console.error(error));
    }
  }

  async function saveSearchToHistory(query) {
    const normalized = normalizeText(query);
    const latest = state.historyRecords[0];

    if (latest && normalizeText(latest.query) === normalized) return;

    await addHistory({
      username: state.currentUser.username,
      query,
      createdAt: Date.now()
    });

    await refreshHistory();
  }

  function renderClinicalCard(entry) {
    return `
      <article class="clinical-card">
        <div class="card-heading">
          <h3>${escapeHtml(entry.nome_patologia)}</h3>
          <div class="tag-row">
            <span class="tag">${escapeHtml(entry.regiao_corpo)}</span>
            ${(entry.palavras_chave || []).slice(0, 5).map(tag =>
              `<span class="tag">${escapeHtml(tag)}</span>`
            ).join("")}
          </div>
        </div>

        <div class="card-content">
          <section>
            <strong>Palavras-chave</strong>
            <p>${escapeHtml(entry.palavras_chave.join(", "))}</p>
          </section>

          <section>
            <strong>Sintomas / achados</strong>
            <ul>${entry.sintomas.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>

          <section>
            <strong>Testes ortopédicos / neurológicos</strong>
            <ul>${entry.testes_ortopedicos_neurologicos.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>

          <section>
            <strong>Conduta terapêutica</strong>
            <ul>${entry.conduta_terapeutica.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>

          <section>
            <strong>Referências científicas</strong>
            <ul class="reference-list">${entry.referencias_cientificas.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>
      </article>
    `;
  }

  function renderOptions() {
    $("comorbidityList").innerHTML = COMORBIDITY_OPTIONS.map(item => `
      <label class="check-item">
        <input type="checkbox" name="comorbidity" value="${escapeHtml(item.id)}" />
        <span>${escapeHtml(item.label)}</span>
      </label>
    `).join("");

    $("symptomList").innerHTML = SYMPTOM_OPTIONS.map(item => `
      <label class="check-item">
        <input type="checkbox" name="symptom" value="${escapeHtml(item.id)}" />
        <span>${escapeHtml(item.label)}</span>
      </label>
    `).join("");
  }

  async function refreshPatientArea() {
    if (!state.currentUser) return;

    state.patientRecords = await getPatientsForUser(state.currentUser.username);
    $("patientCount").textContent = String(state.patientRecords.length);
    $("patientListCount").textContent = String(state.patientRecords.length);
    renderPatientList();

    if (!state.patientRecords.length) {
      $("selectedPatientSummary").innerHTML = placeholderSummary();
    }
  }

  async function handlePatientSave(event) {
    event.preventDefault();

    if (!state.currentUser) {
      $("patientFormError").textContent = "Entre com um usuário antes de cadastrar pacientes.";
      return;
    }

    const name = $("patientName").value.trim();
    const age = Number($("patientAge").value);

    if (!name) {
      $("patientFormError").textContent = "Informe o nome do paciente.";
      return;
    }

    if (!Number.isInteger(age) || age < 0 || age > 120) {
      $("patientFormError").textContent = "Informe uma idade inteira entre 0 e 120.";
      return;
    }

    const comorbidities = [...document.querySelectorAll('input[name="comorbidity"]:checked')].map(input => input.value);
    const symptoms = [...document.querySelectorAll('input[name="symptom"]:checked')].map(input => input.value);

    if (!symptoms.length) {
      $("patientFormError").textContent = "Marque pelo menos um sintoma principal.";
      return;
    }

    const patient = {
      username: state.currentUser.username,
      name,
      age,
      comorbidities,
      symptoms,
      recommendation: generateAdaptedPrescription({ age, comorbidities, symptoms }),
      createdAt: Date.now()
    };

    try {
      const id = await addPatient(patient);
      patient.id = id;

      state.patientRecords = await getPatientsForUser(state.currentUser.username);
      $("patientForm").reset();
      $("patientFormError").textContent = "";

      $("selectedPatientSummary").innerHTML = renderPatientSummary(patient);
      renderPatientList();

      $("patientCount").textContent = String(state.patientRecords.length);
      $("patientListCount").textContent = String(state.patientRecords.length);

      showToast("Paciente salvo e conduta adaptada gerada.");
    } catch (error) {
      console.error(error);
      $("patientFormError").textContent = "Não foi possível salvar o paciente.";
    }
  }

  function generateAdaptedPrescription({ age, comorbidities, symptoms }) {
    const has = (key) => comorbidities.includes(key);
    const symptom = (key) => symptoms.includes(key);

    const exercises = [
      {
        name: "Aquecimento ativo de baixo impacto",
        detail: "5–10 min de atividade tolerada, escolhendo modalidade compatível com a capacidade funcional e o objetivo terapêutico."
      },
      {
        name: "Mobilidade ativa",
        detail: "Movimentos controlados em amplitude confortável, ajustados ao quadro e à resposta."
      },
      {
        name: "Fortalecimento funcional progressivo",
        detail: "Progressão gradual de resistência e volume conforme avaliação, técnica e resposta clínica."
      }
    ];

    const cautions = [
      "A dose real deve ser individualizada após avaliação fisioterapêutica.",
      "Interromper e reavaliar diante de piora importante, sintomas novos ou sinais de alarme."
    ];

    const adaptationNotes = [];

    if (age >= 65) {
      exercises.push({
        name: "Propriocepção e equilíbrio adaptados",
        detail: "Iniciar perto de apoio estável e evoluir base de suporte, dupla tarefa e deslocamento conforme segurança."
      });
      adaptationNotes.push("Idade ≥ 65: priorizar segurança, força funcional, capacidade de marcha e prevenção de quedas.");
    }

    if (has("obesidade")) {
      exercises.push({
        name: "Aeróbico de baixo impacto",
        detail: "Preferir modalidades com menor impacto articular quando isso aumentar conforto e aderência."
      });
      adaptationNotes.push("Obesidade: progredir volume/intensidade gradualmente, respeitando tolerância articular e cardiorrespiratória.");
    }

    if (has("hipertensao")) {
      cautions.push("Hipertensão: evitar manobra de Valsalva/forçar a apneia; estimular respiração contínua e usar monitorização quando indicada.");
      adaptationNotes.push("Hipertensão: usar aquecimento e retorno à calma graduais e esforço compatível com a avaliação.");
    }

    if (has("diabetes")) {
      exercises.push({
        name: "Atividade aeróbica + resistência",
        detail: "Combinação progressiva pode ser usada quando indicada; observar pés, calçados e contexto de controle glicêmico."
      });
      cautions.push("Diabetes: considerar integridade da pele, sensibilidade plantar e risco de alterações glicêmicas conforme tratamento e histórico.");
      adaptationNotes.push("Diabetes: atenção à inspeção dos pés, sensibilidade e tolerância ao exercício.");
    }

    if (has("osteoporose")) {
      exercises.push({
        name: "Fortalecimento com foco postural e funcional",
        detail: "Progredir resistência e tarefas de força; ajustar posições que aumentem risco de fratura em pessoas vulneráveis."
      });
      cautions.push("Osteoporose: considerar risco de fratura e técnica; evitar cargas/combinações de flexão e rotação vertebral de alta demanda quando não indicadas.");
      adaptationNotes.push("Osteoporose: foco em força, equilíbrio e estratégias de prevenção de quedas.");
    }

    if (has("cardiovascular") || symptom("falta-ar") || symptom("baixa-tolerancia")) {
      cautions.push("Condição cardiovascular/falta de ar: ajustar intensidade e critérios de monitorização de acordo com avaliação clínica.");
    }

    if (has("risco-queda") || symptom("desequilibrio") || symptom("alteracao-sensibilidade")) {
      exercises.push({
        name: "Equilíbrio com proteção",
        detail: "Transferências de peso, apoio seguro e tarefas de marcha em ambiente protegido, evoluindo conforme resposta."
      });
      cautions.push("Risco de queda/alteração sensitiva: manter ambiente seguro e evitar tarefas sem apoio até haver controle suficiente.");
    }

    if (symptom("dor-articular")) {
      exercises.push({
        name: "Exercício terapêutico para dor articular",
        detail: "Movimento e fortalecimento em amplitude tolerada, com progressão conforme resposta e função."
      });
    }

    if (symptom("fadiga-muscular")) {
      exercises.push({
        name: "Fortalecimento intervalado",
        detail: "Usar séries menores e pausas adequadas; progredir volume antes de grandes incrementos de intensidade quando necessário."
      });
    }

    if (symptom("edema")) {
      exercises.push({
        name: "Mobilidade distal e bomba muscular",
        detail: "Movimentos ativos e contrações musculares leves podem ser usados quando apropriados ao quadro."
      });
      cautions.push("Edema novo, unilateral e doloroso, especialmente com calor, falta de ar ou dor torácica, exige avaliação médica e não prescrição automática.");
    }

    if (symptom("rigidez")) {
      exercises.push({
        name: "Mobilidade progressiva",
        detail: "Sessões frequentes de movimentos ativos em amplitude adequada ao objetivo e irritabilidade."
      });
    }

    if (symptom("fraqueza")) {
      adaptationNotes.push("Fraqueza: priorizar tarefas funcionais mensuráveis e progressão de resistência.");
    }

    if (symptom("dor-neuropatica")) {
      exercises.push({
        name: "Mobilidade neural suave quando indicada",
        detail: "Usar somente após hipótese clínica compatível; baixa irritabilidade e reavaliação da resposta."
      });
      cautions.push("Déficit neurológico progressivo, perda de força importante ou alterações de controle esfincteriano requerem avaliação médica apropriada/urgente.");
    }

    return {
      exercises: dedupeExercises(exercises),
      cautions: [...new Set(cautions)],
      adaptationNotes: [...new Set(adaptationNotes)],
      generatedAt: Date.now()
    };
  }

  function dedupeExercises(items) {
    const seen = new Set();
    return items.filter(item => {
      const key = normalizeText(item.name);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function renderPatientSummary(patient) {
    const comorbidityLabels = mapIdsToLabels(patient.comorbidities, COMORBIDITY_OPTIONS);
    const symptomLabels = mapIdsToLabels(patient.symptoms, SYMPTOM_OPTIONS);
    const rec = patient.recommendation;

    return `
      <article class="summary-card">
        <p class="eyebrow">RESUMO GERADO</p>
        <h3>${escapeHtml(patient.name)}</h3>

        <div class="summary-meta">
          <div><strong>Idade</strong><span>${patient.age} anos</span></div>
          <div><strong>Comorbidades</strong><span>${comorbidityLabels.length ? escapeHtml(comorbidityLabels.join(", ")) : "Nenhuma marcada"}</span></div>
          <div><strong>Sintomas</strong><span>${escapeHtml(symptomLabels.join(", "))}</span></div>
        </div>

        <section>
          <strong>Exercícios recomendados</strong>
          <ul class="rec-list">
            ${rec.exercises.map(item => `<li><strong>${escapeHtml(item.name)}:</strong> ${escapeHtml(item.detail)}</li>`).join("")}
          </ul>
        </section>

        ${rec.adaptationNotes.length ? `
          <section>
            <strong>Adaptações pelo perfil</strong>
            <ul class="rec-list">${rec.adaptationNotes.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        ` : ""}

        <div class="summary-warning">
          <strong>Precauções:</strong>
          <ul class="caution-list">${rec.cautions.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </article>
    `;
  }

  function renderPatientList() {
    const container = $("patientList");

    if (!state.patientRecords.length) {
      container.innerHTML = '<div class="empty-state">Nenhum paciente cadastrado para este usuário.</div>';
      return;
    }

    container.innerHTML = state.patientRecords.map(patient => {
      const symptoms = mapIdsToLabels(patient.symptoms, SYMPTOM_OPTIONS);
      const tags = symptoms.slice(0, 5).map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("");

      return `
        <article class="patient-row">
          <div class="patient-row-main">
            <div>
              <div class="patient-name">${escapeHtml(patient.name)}</div>
              <div class="patient-sub">${patient.age} anos • salvo em ${formatDate(patient.createdAt)}</div>
            </div>

            <div>
              <div class="patient-sub">Sintomas principais</div>
              <div class="patient-tags">${tags || '<span class="tag">não informado</span>'}</div>
            </div>

            <div class="patient-actions">
              <button class="pixel-btn compact" data-patient-id="${patient.id}" data-action="view" type="button">Ver conduta</button>
              <button class="pixel-btn compact danger" data-patient-id="${patient.id}" data-action="delete" type="button">Excluir</button>
            </div>
          </div>
          <div id="patient-detail-${patient.id}" class="patient-detail hidden"></div>
        </article>
      `;
    }).join("");
  }

  async function handlePatientListClick(event) {
    const button = event.target.closest("[data-patient-id]");
    if (!button) return;

    const id = Number(button.dataset.patientId);
    const patient = state.patientRecords.find(item => Number(item.id) === id);
    if (!patient) return;

    if (button.dataset.action === "view") {
      const detail = $(`patient-detail-${id}`);
      detail.classList.toggle("hidden");
      detail.innerHTML = detail.classList.contains("hidden") ? "" : renderPatientSummary(patient);
      return;
    }

    if (button.dataset.action === "delete") {
      const confirmed = window.confirm(`Excluir o paciente "${patient.name}" deste usuário?`);
      if (!confirmed) return;

      await deletePatient(id);
      await refreshPatientArea();
      await refreshDashboard();
      showToast("Paciente excluído.");
    }
  }

  function mapIdsToLabels(ids, options) {
    const map = new Map(options.map(item => [item.id, item.label]));
    return ids.map(id => map.get(id) || id);
  }

  function placeholderSummary() {
    return `
      <div class="summary-placeholder">
        <div>
          <div class="placeholder-icon">🩺</div>
          <p>Salve um paciente para visualizar o resumo e a adaptação automática.</p>
        </div>
      </div>
    `;
  }

  function normalizeText(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    return [...new Set(
      normalizeText(text)
        .split(/\s+/)
        .map(token => token.replace(/^-+|-+$/g, ""))
        .filter(token => token.length >= 2)
    )];
  }

  function fuzzyDistanceLimit(token) {
    if (token.length <= 3) return 0;
    if (token.length <= 5) return 1;
    return 2;
  }

  function findClosestTokenDistance(queryToken, haystack) {
    const haystackTokens = tokenize(haystack);
    if (!haystackTokens.length) return null;

    let best = Infinity;

    for (const candidate of haystackTokens) {
      if (Math.abs(candidate.length - queryToken.length) > fuzzyDistanceLimit(queryToken)) continue;
      const distance = levenshtein(queryToken, candidate);

      if (distance < best) best = distance;
      if (best === 0) return 0;
    }

    return Number.isFinite(best) ? best : null;
  }

  function levenshtein(a, b) {
    const previous = Array.from({ length: b.length + 1 }, (_, i) => i);

    for (let i = 1; i <= a.length; i++) {
      const current = [i];

      for (let j = 1; j <= b.length; j++) {
        const insertion = current[j - 1] + 1;
        const deletion = previous[j] + 1;
        const substitution = previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1);
        current[j] = Math.min(insertion, deletion, substitution);
      }

      for (let j = 0; j < current.length; j++) {
        previous[j] = current[j];
      }
    }

    return previous[b.length];
  }

  function formatDate(timestamp) {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(timestamp));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function restoreTheme() {
    const stored = localStorage.getItem("fisio90s.theme");

    if (stored === "dark") {
      document.body.classList.add("dark");
      return;
    }

    if (stored === "light") {
      document.body.classList.remove("dark");
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", Boolean(prefersDark));
  }

  function toggleTheme() {
    const nextIsDark = !document.body.classList.contains("dark");
    document.body.classList.toggle("dark", nextIsDark);
    localStorage.setItem("fisio90s.theme", nextIsDark ? "dark" : "light");
  }

  function updateConnectionStatus() {
    const el = $("connectionStatus");
    if (!el) return;

    el.textContent = navigator.onLine
      ? "● online / cache local ativo"
      : "● offline / dados locais";
  }

  function bindInstallPrompt() {
    const installButton = $("installButton");

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      state.deferredInstallPrompt = event;
      installButton.classList.remove("hidden");
    });

    installButton.addEventListener("click", async () => {
      if (state.deferredInstallPrompt) {
        state.deferredInstallPrompt.prompt();
        await state.deferredInstallPrompt.userChoice;
        state.deferredInstallPrompt = null;
        installButton.classList.add("hidden");
        return;
      }

      showInstallHelp();
    });

    window.addEventListener("appinstalled", () => {
      state.deferredInstallPrompt = null;
      installButton.classList.add("hidden");
      showToast("Aplicativo instalado.");
    });
  }

  function showInstallHelp() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const text = isIOS
      ? "No iPhone/iPad: use Compartilhar → Adicionar à Tela de Início."
      : "No navegador compatível: abra o menu do navegador e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”.";

    $("modalRoot").innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="installModalTitle">
        <div class="modal">
          <div class="window-titlebar">
            <span>INSTALAR_APP.TXT</span>
            <button class="window-close-btn" data-close-modal type="button" aria-label="Fechar">×</button>
          </div>
          <div class="modal-body">
            <div class="vampire-icon" aria-hidden="true">${vampireSvg()}</div>
            <h3 id="installModalTitle">Instalação manual</h3>
            <p>${escapeHtml(text)}</p>
            <button class="pixel-btn primary full-width" data-close-modal type="button">OK</button>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", () => $("modalRoot").innerHTML = "");
    });
  }

  function vampireSvg() {
    return `
      <svg viewBox="0 0 64 48">
        <path d="M8 12c8 4 14 5 24 5s16-1 24-5v18c-7 5-15 8-24 8S15 35 8 30Z" fill="currentColor"/>
        <path d="M19 29l3 12 7-9 3 9 7-12" fill="var(--danger)" stroke="var(--border-dark)" stroke-width="2" />
      </svg>
    `;
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (error) {
      console.warn("Service Worker não registrado:", error);
    }
  }
})();
