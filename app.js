/* Fisio90s - lógica principal. Vanilla JS + IndexedDB + PWA. */
(() => {
  "use strict";

  const DB_NAME = "Fisio90sDB";
  const DB_VERSION = 1;
  const STORE_USERS = "users";
  const STORE_PATIENTS = "patients";
  const STORE_SEARCHES = "searches";
  const CURRENT_USER_KEY = "fisio90s_current_user";

  const RISK_OPTIONS = [
    ["obesidade", "Obesidade"], ["hipertensao", "Hipertensão"], ["diabetes", "Diabetes"],
    ["osteoporose", "Osteoporose"], ["cardiovascular", "Doença Cardiovascular conhecida"],
    ["risco_queda", "Risco aumentado de queda"], ["artrose_previa", "Artrose prévia"],
    ["sedentarismo", "Sedentarismo"], ["tabagismo", "Tabagismo"], ["fibromialgia", "Fibromialgia"],
    ["obesidade_morbida", "Obesidade importante / alta demanda mecânica"], ["cirurgia_previa", "Cirurgia ortopédica prévia"],
    ["uso_anticoagulante", "Uso de anticoagulante"], ["doenca_respiratoria", "Doença respiratória conhecida"],
    ["historico_quedas", "Histórico de quedas"], ["fragilidade", "Fragilidade / baixa reserva funcional"]
  ];

  const SYMPTOM_OPTIONS = [
    ["dor_articular", "Dor articular"], ["dor_irradiada", "Dor irradiada"], ["fadiga_muscular", "Fadiga muscular"],
    ["edema", "Edema"], ["fraqueza_muscular", "Fraqueza muscular"], ["parestesia", "Alteração de sensibilidade (parestesia)"],
    ["rigidez_matinal", "Rigidez matinal"], ["perda_mobilidade", "Perda de mobilidade"],
    ["desequilibrio", "Desequilíbrio / insegurança ao andar"], ["dor_neuropatica", "Dor neuropática"],
    ["falta_ar", "Falta de ar aos esforços"], ["crepitacao", "Crepitação articular"],
    ["espasmo", "Espasmo muscular"], ["baixa_tolerancia", "Baixa tolerância ao esforço"],
    ["dor_noturna", "Dor noturna"], ["instabilidade", "Sensação de instabilidade"],
    ["alteracao_marcha", "Alteração da marcha"], ["medo_movimento", "Medo de movimentar / cinesiofobia"]
  ];

  let db = null;
  let currentUser = null;
  let deferredInstallPrompt = null;
  let currentPathology = null;
  let pathologyMatches = [];

  const $ = (id) => document.getElementById(id);
  const views = ["welcomeView", "userView", "menuView", "databaseView", "patientsView", "patientEditorView"];

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  }

  function openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(STORE_USERS)) {
          const users = database.createObjectStore(STORE_USERS, { keyPath: "username" });
          users.createIndex("createdAt", "createdAt");
        }
        if (!database.objectStoreNames.contains(STORE_PATIENTS)) {
          const patients = database.createObjectStore(STORE_PATIENTS, { keyPath: "id", autoIncrement: true });
          patients.createIndex("user", "user");
          patients.createIndex("userName", ["user", "name"]);
        }
        if (!database.objectStoreNames.contains(STORE_SEARCHES)) {
          const searches = database.createObjectStore(STORE_SEARCHES, { keyPath: "id", autoIncrement: true });
          searches.createIndex("user", "user");
          searches.createIndex("userCreated", ["user", "createdAt"]);
        }
      };
      request.onsuccess = () => { db = request.result; resolve(db); };
      request.onerror = () => reject(request.error);
    });
  }

  function tx(store, mode = "readonly") { return db.transaction(store, mode).objectStore(store); }

  function put(storeName, value) {
    return new Promise((resolve, reject) => {
      const request = tx(storeName, "readwrite").put(value);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function add(storeName, value) {
    return new Promise((resolve, reject) => {
      const request = tx(storeName, "readwrite").add(value);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function get(storeName, key) {
    return new Promise((resolve, reject) => {
      const request = tx(storeName).get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function getAll(storeName) {
    return new Promise((resolve, reject) => {
      const request = tx(storeName).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  function remove(storeName, key) {
    return new Promise((resolve, reject) => {
      const request = tx(storeName, "readwrite").delete(key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async function saveSearch(term) {
    const clean = term.trim();
    if (!clean || !currentUser) return;
    await add(STORE_SEARCHES, { user: currentUser, term: clean, normalized: normalize(clean), createdAt: Date.now() });
    const all = (await getAll(STORE_SEARCHES)).filter(x => x.user === currentUser).sort((a,b) => b.createdAt - a.createdAt);
    const unique = [];
    const seen = new Set();
    for (const item of all) {
      if (!seen.has(item.normalized)) { seen.add(item.normalized); unique.push(item); }
      if (unique.length >= 8) break;
    }
    for (const item of all.slice(0, 50)) {
      if (!unique.includes(item)) await remove(STORE_SEARCHES, item.id);
    }
    renderRecentSearches(unique);
  }

  async function loadRecentSearches() {
    if (!currentUser) return renderRecentSearches([]);
    const all = (await getAll(STORE_SEARCHES)).filter(x => x.user === currentUser).sort((a,b) => b.createdAt - a.createdAt);
    const unique = [];
    const seen = new Set();
    for (const item of all) {
      if (!seen.has(item.normalized)) { seen.add(item.normalized); unique.push(item); }
      if (unique.length >= 8) break;
    }
    renderRecentSearches(unique);
  }

  function renderRecentSearches(items) {
    const el = $("recentSearches");
    if (!el) return;
    if (!items.length) { el.innerHTML = "<strong>Pesquisas Recentes:</strong> nenhuma busca registrada."; return; }
    el.innerHTML = "<strong>Pesquisas Recentes:</strong> " + items.map(item => `<button class="recent-item" type="button" data-recent="${escapeHTML(item.term)}">${escapeHTML(item.term)}</button>`).join("");
    el.querySelectorAll("[data-recent]").forEach(btn => btn.addEventListener("click", () => { $("dbSearch").value = btn.dataset.recent; searchDatabase(btn.dataset.recent, false); }));
  }

  function showView(id) {
    views.forEach(view => $(view).classList.toggle("hidden", view !== id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderChecks() {
    $("riskChecks").innerHTML = RISK_OPTIONS.map(([value,label]) => `<label class="check"><input type="checkbox" name="risk" value="${value}"><span>${label}</span></label>`).join("");
    $("symptomChecks").innerHTML = SYMPTOM_OPTIONS.map(([value,label]) => `<label class="check"><input type="checkbox" name="symptom" value="${value}"><span>${label}</span></label>`).join("");
  }

  function checkedValues(name) { return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value); }
  function labelFor(options, value) { return options.find(item => item[0] === value)?.[1] || value; }

  function pathologySearch(term) {
    const q = normalize(term);
    if (!q) return [];
    return window.FISIO90S_DATABASE.filter(item => {
      const haystack = [item.nome_patologia, item.regiao_corpo, ...(item.palavras_chave || []), ...(item.sintomas || [])].map(normalize).join(" ");
      return haystack.includes(q);
    }).slice(0, 8);
  }

  function renderPathologySuggestions(items) {
    pathologyMatches = items;
    const el = $("pathologySuggestions");
    el.innerHTML = items.map((item, index) => `<div class="suggestion" data-path-index="${index}"><strong>${escapeHTML(item.nome_patologia)}</strong><br><small>${escapeHTML(item.regiao_corpo)} · ${(item.palavras_chave || []).slice(0,3).map(escapeHTML).join(", ")}</small></div>`).join("");
    el.querySelectorAll("[data-path-index]").forEach(row => row.addEventListener("click", () => selectPathology(Number(row.dataset.pathIndex))));
  }

  function selectPathology(index) {
    const item = pathologyMatches[index];
    if (!item) return;
    currentPathology = item;
    $("pathologyInput").value = item.nome_patologia;
    $("pathologyIndex").value = window.FISIO90S_DATABASE.indexOf(item);
    $("selectedPathology").textContent = `${item.nome_patologia} // ${item.regiao_corpo}`;
    $("pathologySuggestions").innerHTML = "";
  }

  function searchDatabase(term, record = true) {
    const q = normalize(term);
    const results = q ? window.FISIO90S_DATABASE.filter(item => {
      const haystack = [item.nome_patologia, item.regiao_corpo, ...(item.palavras_chave || []), ...(item.sintomas || [])].map(normalize).join(" ");
      return haystack.includes(q);
    }) : window.FISIO90S_DATABASE;
    renderDatabaseResults(results);
    if (record && q) saveSearch(term).catch(console.error);
  }

  function renderDatabaseResults(results) {
    const el = $("dbResults");
    if (!results.length) { el.innerHTML = `<div class="empty">NENHUM REGISTRO ENCONTRADO.</div>`; return; }
    el.innerHTML = results.map(item => `
      <article class="data-card">
        <div class="card-head"><h3>${escapeHTML(item.nome_patologia)}</h3><span>${escapeHTML(item.regiao_corpo)}</span></div>
        <div class="card-body">
          <strong>PALAVRAS-CHAVE:</strong> ${item.palavras_chave.map(escapeHTML).join(", ")}
          <h4>SINTOMAS</h4><ul>${item.sintomas.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
          <h4>TESTES / AVALIAÇÃO</h4><ul>${item.testes_ortopedicos_neurologicos.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
          <h4>CONDUTA TERAPÊUTICA</h4><p>${escapeHTML(item.conduta_terapeutica)}</p>
          <h4>EXERCÍCIOS ESPECÍFICOS</h4>
          ${item.exercicios_especificos.map(ex => `<div class="exercise"><strong>${escapeHTML(ex.nome)}</strong><span>${escapeHTML(ex.descricao)}</span></div>`).join("")}
          <h4>REFERÊNCIAS</h4><ul class="ref">${item.referencias_cientificas.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
        </div>
      </article>`).join("");
  }

  function adaptations(age, risks, symptoms, pathology) {
    const out = [];
    const has = (arr, key) => arr.includes(key);
    if (Number(age) >= 65 || has(risks, "fragilidade")) out.push("Priorizar baixo impacto, progressão gradual, pausas e estratégias de segurança; considerar treino funcional relacionado às atividades do paciente.");
    if (has(risks, "obesidade") || has(risks, "obesidade_morbida")) out.push("Preferir posições e equipamentos que reduzam demanda mecânica e facilitem transferências; progredir carga de forma gradual e funcional.");
    if (has(risks, "hipertensao")) out.push("Evitar manobra de Valsalva e monitorar resposta ao esforço conforme avaliação clínica; utilizar progressão de carga compatível com a condição cardiovascular.");
    if (has(risks, "diabetes")) out.push("Considerar controle glicêmico, integridade da pele e dos pés, calçados adequados e inspeção após atividades quando houver risco de neuropatia.");
    if (has(risks, "osteoporose")) out.push("Evitar impactos ou cargas excessivas não avaliadas e priorizar técnica, força progressiva e estratégias de segurança contra quedas.");
    if (has(risks, "cardiovascular") || has(symptoms, "falta_ar") || has(symptoms, "baixa_tolerancia")) out.push("Usar intensidade e pausas individualizadas; observar sintomas durante o esforço e interromper diante de sinais clínicos preocupantes.");
    if (has(risks, "risco_queda") || has(risks, "historico_quedas") || has(symptoms, "desequilibrio")) out.push("Priorizar ambiente seguro, apoio próximo e progressão de equilíbrio em etapas antes de tarefas sem suporte.");
    if (has(risks, "fibromialgia") || has(symptoms, "fadiga_muscular")) out.push("Dosar volume e intensidade, evitando aumentos abruptos; usar progressão graduada e pausas conforme tolerância.");
    if (has(risks, "sedentarismo")) out.push("Começar com volume tolerável e aumentar frequência/duração progressivamente, evitando salto brusco de carga.");
    if (has(risks, "tabagismo")) out.push("Considerar menor tolerância cardiorrespiratória e orientar progressão gradual do esforço conforme resposta clínica.");
    if (has(risks, "artrose_previa") || has(symptoms, "rigidez_matinal")) out.push("Dar atenção à mobilidade e ao aquecimento inicial, respeitando irritabilidade articular.");
    if (has(symptoms, "edema")) out.push("Considerar manejo de carga e monitoramento do edema; reavaliar resposta após atividade.");
    if (has(symptoms, "parestesia") || has(symptoms, "dor_neuropatica")) out.push("Evitar intensificação automática de estímulos que reproduzam ou mantenham sintomas neurológicos; acompanhar evolução sensitiva e motora.");
    if (has(symptoms, "dor_irradiada")) out.push("Monitorar distribuição e comportamento da dor irradiada; sinais neurológicos progressivos exigem reavaliação profissional.");
    if (has(symptoms, "medo_movimento")) out.push("Usar exposição gradual e educação sobre movimento, respeitando segurança e resposta individual.");
    if (!out.length) out.push("Nenhuma adaptação adicional foi identificada pelas opções marcadas. A seleção final deve ser individualizada após avaliação profissional.");
    return out;
  }

  function getSelectedPathology() {
    const index = Number($("pathologyIndex").value);
    if (Number.isInteger(index) && window.FISIO90S_DATABASE[index] && normalize($("pathologyInput").value) === normalize(window.FISIO90S_DATABASE[index].nome_patologia)) return window.FISIO90S_DATABASE[index];
    const typed = normalize($("pathologyInput").value);
    return window.FISIO90S_DATABASE.find(item => normalize(item.nome_patologia) === typed) || null;
  }

  async function savePatient(event) {
    event.preventDefault();
    if (!currentUser) return;
    const name = $("patientName").value.trim();
    const age = Number($("patientAge").value);
    const pathology = getSelectedPathology();
    const risks = checkedValues("risk");
    const symptoms = checkedValues("symptom");
    if (!name || !Number.isFinite(age) || age < 0 || age > 120) return showMessage("Preencha nome e idade corretamente.");
    if (!pathology) return showMessage("Selecione uma patologia diretamente da Base Científica.");

    const adaptationsList = adaptations(age, risks, symptoms, pathology);
    const now = Date.now();
    const patient = {
      id: $("patientId").value ? Number($("patientId").value) : undefined,
      user: currentUser,
      name,
      age,
      notes: $("patientNotes").value.trim(),
      pathologyName: pathology.nome_patologia,
      pathologyIndex: window.FISIO90S_DATABASE.indexOf(pathology),
      risks,
      symptoms,
      prescription: {
        generatedAt: now,
        pathology: pathology.nome_patologia,
        exercises: pathology.exercicios_especificos.map(x => ({ nome: x.nome, descricao: x.descricao })),
        adaptations: adaptationsList
      },
      updatedAt: now
    };
    if (!patient.id) patient.createdAt = now;

    try {
      const id = await put(STORE_PATIENTS, patient);
      patient.id = id;
      renderPrescription(patient);
      $("patientId").value = id;
      $("editorTitle").textContent = `PACIENTE: ${name}`;
      await renderPatients();
      updateStatus();
    } catch (error) {
      console.error(error);
      showMessage("ERRO AO SALVAR. Verifique o armazenamento do navegador e tente novamente.");
    }
  }

  function showMessage(text) { $("loginMsg").textContent = text; }

  function renderPrescription(patient) {
    const el = $("prescriptionResult");
    el.classList.remove("hidden");
    el.innerHTML = `
      <h3>RESULTADO.DAT // SUGESTÃO ADAPTADA</h3>
      <div class="result-section"><strong>PACIENTE:</strong> ${escapeHTML(patient.name)} · <strong>IDADE:</strong> ${patient.age}</div>
      <div class="result-section"><strong>DOENÇA / QUEIXA PRINCIPAL:</strong> ${escapeHTML(patient.prescription.pathology)}</div>
      <div class="result-section"><strong>EXERCÍCIOS ESPECÍFICOS — DATABASE.JS</strong>
        ${patient.prescription.exercises.map(x => `<div class="exercise"><strong>${escapeHTML(x.nome)}</strong><span>${escapeHTML(x.descricao)}</span></div>`).join("")}
      </div>
      <div class="result-section"><strong>ADAPTAÇÕES CLÍNICAS PELO PERFIL</strong>
        ${patient.prescription.adaptations.map(x => `<div class="adaptation">${escapeHTML(x)}</div>`).join("")}
      </div>
      <div class="result-section"><strong>FATORES MARCADOS:</strong> ${patient.risks.length ? patient.risks.map(x => escapeHTML(labelFor(RISK_OPTIONS,x))).join(", ") : "nenhum"}<br><strong>SINTOMAS MARCADOS:</strong> ${patient.symptoms.length ? patient.symptoms.map(x => escapeHTML(labelFor(SYMPTOM_OPTIONS,x))).join(", ") : "nenhum"}</div>
      <small>Resultado de apoio educacional. Não constitui diagnóstico, prescrição autônoma ou substituição de avaliação profissional.</small>`;
  }

  async function renderPatients(filter = "") {
    if (!currentUser) return;
    const patients = (await getAll(STORE_PATIENTS)).filter(p => p.user === currentUser).sort((a,b) => b.updatedAt - a.updatedAt);
    const q = normalize(filter);
    const filtered = q ? patients.filter(p => normalize(p.name).includes(q)) : patients;
    $("patientList").innerHTML = filtered.length ? filtered.map(p => `<article class="patient-card" data-patient-id="${p.id}"><strong>${escapeHTML(p.name)}</strong><span>${p.age} anos</span><br><small>${escapeHTML(p.pathologyName || "Sem patologia")}</small></article>`).join("") : `<div class="empty">NENHUM PACIENTE LOCALIZADO.</div>`;
    $("patientList").querySelectorAll("[data-patient-id]").forEach(card => card.addEventListener("click", () => loadPatient(Number(card.dataset.patientId))));
    updateStatus(patients.length);
  }

  async function loadPatient(id) {
    const patient = await get(STORE_PATIENTS, id);
    if (!patient || patient.user !== currentUser) return;
    $("patientId").value = patient.id;
    $("patientName").value = patient.name || "";
    $("patientAge").value = patient.age ?? "";
    $("patientNotes").value = patient.notes || "";
    currentPathology = window.FISIO90S_DATABASE[patient.pathologyIndex] || null;
    $("pathologyInput").value = currentPathology?.nome_patologia || patient.pathologyName || "";
    $("pathologyIndex").value = currentPathology ? patient.pathologyIndex : "";
    $("selectedPathology").textContent = currentPathology ? `${currentPathology.nome_patologia} // ${currentPathology.regiao_corpo}` : "Patologia não localizada na base atual.";
    document.querySelectorAll('input[name="risk"]').forEach(el => el.checked = (patient.risks || []).includes(el.value));
    document.querySelectorAll('input[name="symptom"]').forEach(el => el.checked = (patient.symptoms || []).includes(el.value));
    $("editorTitle").textContent = `PACIENTE: ${patient.name}`;
    renderPrescription(patient);
    showView("patientEditorView");
  }

  function resetPatientForm() {
    $("patientForm").reset();
    $("patientId").value = "";
    $("pathologyIndex").value = "";
    $("pathologySuggestions").innerHTML = "";
    $("selectedPathology").textContent = "Nenhuma patologia selecionada.";
    $("prescriptionResult").classList.add("hidden");
    currentPathology = null;
    $("editorTitle").textContent = "NOVO PACIENTE";
  }

  async function updateStatus(count) {
    if (!currentUser) return;
    $("userStatus").textContent = `USUÁRIO: ${currentUser}`;
    if (typeof count !== "number") count = (await getAll(STORE_PATIENTS)).filter(p => p.user === currentUser).length;
    $("patientCountStatus").textContent = `PACIENTES: ${count}`;
  }

  async function login() {
    let username = $("usernameInput").value.trim().replace(/\s+/g, "");
    if (!username) return showMessage("Digite um nome de usuário.");
    if (!username.startsWith("@")) username = "@" + username;
    username = "@" + username.slice(1).replace(/[^a-zA-Z0-9._-]/g, "");
    if (username.length < 2) return showMessage("Usuário inválido.");
    const existing = await get(STORE_USERS, username);
    if (!existing) await put(STORE_USERS, { username, createdAt: Date.now(), lastLogin: Date.now() });
    else { existing.lastLogin = Date.now(); await put(STORE_USERS, existing); }
    currentUser = username;
    localStorage.setItem(CURRENT_USER_KEY, username);
    $("loginMsg").textContent = "";
    $("usernameInput").value = username;
    await updateStatus();
    showView("menuView");
  }

  async function restoreUser() {
    const saved = localStorage.getItem(CURRENT_USER_KEY);
    if (!saved) return;
    const existing = await get(STORE_USERS, saved);
    if (existing) { currentUser = saved; await updateStatus(); showView("menuView"); }
  }

  function setupInstall() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
    });
    const install = async () => {
      if (!deferredInstallPrompt) {
        alert("Se o navegador não oferecer o prompt, use o menu do navegador e escolha 'Instalar aplicativo' ou 'Adicionar à tela inicial'.");
        return;
      }
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    };
    $("installBtn").addEventListener("click", install);
    $("installMenuBtn").addEventListener("click", install);
  }

  function setupEvents() {
    $("startBtn").addEventListener("click", () => showView("userView"));
    $("loginBtn").addEventListener("click", login);
    $("usernameInput").addEventListener("keydown", e => { if (e.key === "Enter") login(); });
    $("usernameInput").addEventListener("input", e => { e.target.value = e.target.value.replace(/\s+/g, ""); });
    $("goDatabase").addEventListener("click", async () => { showView("databaseView"); await loadRecentSearches(); searchDatabase($("dbSearch").value, false); });
    $("goPatients").addEventListener("click", async () => { showView("patientsView"); await renderPatients(); });
    $("backMenuFromDb").addEventListener("click", () => showView("menuView"));
    $("backMenuFromPatients").addEventListener("click", () => showView("menuView"));
    $("backPatients").addEventListener("click", async () => { showView("patientsView"); await renderPatients(); });
    $("logoutBtn").addEventListener("click", () => { currentUser = null; localStorage.removeItem(CURRENT_USER_KEY); showView("welcomeView"); });
    $("newPatientBtn").addEventListener("click", () => { resetPatientForm(); showView("patientEditorView"); });
    $("patientForm").addEventListener("submit", savePatient);
    $("patientSearch").addEventListener("input", e => renderPatients(e.target.value));
    $("dbSearch").addEventListener("input", e => searchDatabase(e.target.value));
    $("pathologyInput").addEventListener("input", e => { currentPathology = null; $("pathologyIndex").value = ""; const matches = pathologySearch(e.target.value); renderPathologySuggestions(matches); });
    $("themeBtn").addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("fisio90s_theme", document.body.classList.contains("dark") ? "dark" : "light"); });
  }

  async function init() {
    renderChecks();
    setupEvents();
    setupInstall();
    if (localStorage.getItem("fisio90s_theme") === "dark") document.body.classList.add("dark");
    try { await openDB(); await restoreUser(); } catch (error) { console.error(error); alert("Não foi possível abrir o armazenamento local IndexedDB neste navegador."); }
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(console.error);
    setTimeout(() => $("boot").classList.add("hidden"), 900);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
