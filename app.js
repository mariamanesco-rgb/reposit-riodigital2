(()=>{'use strict';
const DB_NAME='Fisio90s_V3_DB', DB_VERSION=1;
const RISKS=['Obesidade','Hipertensão','Diabetes','Osteoporose','Doença Cardiovascular conhecida','Risco aumentado de queda','Artrose prévia','Sedentarismo','Tabagismo','Fibromialgia'];
const SYMPTOMS=['Dor articular','Fraqueza muscular','Alteração de sensibilidade (parestesia)','Edema','Rigidez matinal','Perda de mobilidade','Desequilíbrio/insegurança ao andar','Dor neuropática','Falta de ar aos esforços','Crepitação articular','Espasmo muscular','Fadiga muscular','Baixa tolerância ao esforço'];
let db=null,currentUser=null,installPrompt=null;
const $=id=>document.getElementById(id); const all=window.FISIO90S_DATABASE||[];
function normalize(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim()}
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function openDB(){
  return new Promise((resolve,reject)=>{
    if(!window.isSecureContext && location.hostname!=='localhost' && location.hostname!=='127.0.0.1'){
      console.warn('Fisio90s: contexto não seguro; IndexedDB pode estar indisponível.');
    }
    if(!window.indexedDB){
      reject(new Error('IndexedDB não está disponível neste navegador/contexto.'));
      return;
    }
    let req;
    try{
      req=window.indexedDB.open(DB_NAME,DB_VERSION);
    }catch(err){
      console.error('Fisio90s: erro ao chamar indexedDB.open:',err);
      reject(err);
      return;
    }
    req.onupgradeneeded=event=>{
      const d=event.target.result;
      try{
        if(!d.objectStoreNames.contains('users')){
          d.createObjectStore('users',{keyPath:'username'});
        }
        if(!d.objectStoreNames.contains('patients')){
          const s=d.createObjectStore('patients',{keyPath:'id',autoIncrement:true});
          s.createIndex('username','username',{unique:false});
          s.createIndex('createdAt','createdAt',{unique:false});
        }
        if(!d.objectStoreNames.contains('searches')){
          const s=d.createObjectStore('searches',{keyPath:'id',autoIncrement:true});
          s.createIndex('username','username',{unique:false});
          s.createIndex('createdAt','createdAt',{unique:false});
        }
      }catch(err){
        console.error('Fisio90s: falha em onupgradeneeded:',err);
        try{event.target.transaction.abort()}catch(_){ }
        reject(err);
      }
    };
    req.onsuccess=()=>{
      db=req.result;
      db.onversionchange=()=>{
        db.close();
        toast('O banco foi atualizado em outra aba. Recarregue a página.');
      };
      db.onerror=event=>console.error('Fisio90s: erro interno do IndexedDB:',event.target.error);
      resolve(db);
    };
    req.onerror=()=>{
      const err=req.error||new Error('Não foi possível abrir o armazenamento local IndexedDB.');
      console.error('Fisio90s: IndexedDB open error:',err);
      reject(err);
    };
    req.onblocked=()=>{
      console.warn('Fisio90s: abertura do IndexedDB bloqueada por outra aba.');
      toast('Feche outras abas do Fisio90s e recarregue.');
    };
  });
}
function tx(store,mode='readonly'){if(!db)throw new Error('Banco ainda não inicializado');return db.transaction(store,mode).objectStore(store)}
function request(req){return new Promise((res,rej)=>{req.onsuccess=()=>res(req.result);req.onerror=()=>rej(req.error)})}
async function getUser(name){return request(tx('users').get(name))}
async function saveUser(name){const existing=await getUser(name);if(!existing)await request(tx('users','readwrite').put({username:name,createdAt:new Date().toISOString()}));currentUser=name;sessionStorage.setItem('fisio90s_user',name);showApp();}
function show(id){['welcome','login','app'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function showView(view){['home','guide','patients'].forEach(v=>$('view-'+v).classList.toggle('hidden',v!==view));document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('selected',b.dataset.view===view));if(view==='guide'){renderRecent();searchGuide()}if(view==='patients')renderPatients()}
function showApp(){ $('userBadge').textContent=currentUser;show('app');showView('home');}
function makeChecks(container,items,prefix){$(container).innerHTML=items.map((x,i)=>`<label class="checkitem"><input type="checkbox" name="${prefix}" value="${escapeHTML(x)}" id="${prefix}-${i}"><span>${escapeHTML(x)}</span></label>`).join('')}
function selected(name){return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value)}
function searchText(p){return [p.nome_patologia,p.regiao_corpo,...(p.palavras_chave||[]),...(p.sintomas||[])].join(' ')}
function findCondition(value){const q=normalize(value);return all.find(p=>normalize(p.nome_patologia)===q)||null}
function renderConditionOptions(){ $('conditionList').innerHTML=all.map(p=>`<option value="${escapeHTML(p.nome_patologia)}"></option>`).join('') }
function renderGuideCard(p){return `<article class="resultcard"><h3>${escapeHTML(p.nome_patologia)} <span class="tag">${escapeHTML(p.regiao_corpo)}</span></h3><p><b>CONDUTA:</b> ${escapeHTML(p.conduta_terapeutica)}</p><b>TESTES / AVALIAÇÃO</b><ul>${p.testes_ortopedicos_neurologicos.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><b>EXERCÍCIOS ESPECÍFICOS</b><ul>${p.exercicios_especificos.map(e=>`<li><b>${escapeHTML(e.nome)}:</b> ${escapeHTML(e.descricao)}</li>`).join('')}</ul><b>REFERÊNCIAS</b><ul>${p.referencias_cientificas.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></article>`}
let searchTimer;
$('guideSearch').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(searchGuide,180)});
async function searchGuide(){const q=$('guideSearch').value.trim();if(!q){$('guideResults').innerHTML='<p>Digite um termo para consultar a base.</p>';return}const nq=normalize(q);const results=all.filter(p=>normalize(searchText(p)).includes(nq));$('guideResults').innerHTML=results.length?results.map(renderGuideCard).join(''):'<p>Nenhum resultado. Tente outro termo.</p>';if(currentUser){try{await request(tx('searches','readwrite').add({username:currentUser,query:q,createdAt:new Date().toISOString()}));renderRecent()}catch(e){console.error(e)}}}
async function renderRecent(){if(!currentUser)return;try{const rows=await request(tx('searches').index('username').getAll(currentUser));rows.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));const unique=[...new Set(rows.map(r=>r.query))].slice(0,8);$('recentSearches').innerHTML='<div class="recent-title">PESQUISAS RECENTES</div>'+ (unique.length?unique.map(q=>`<button type="button" data-recent="${escapeHTML(q)}">${escapeHTML(q)}</button>`).join(''):'<span class="hint">Nenhuma pesquisa ainda.</span>');$('recentSearches').querySelectorAll('[data-recent]').forEach(b=>b.addEventListener('click',()=>{$('guideSearch').value=b.dataset.recent;searchGuide()}))}catch(e){console.error(e)}}
function adaptations(age,risks,symptoms){const out=[];if(Number(age)>=65)out.push('Idade ≥65 anos: avaliar fragilidade, comorbidades, cognição e risco de queda; ajustar dose, apoio e pausas individualmente.');if(risks.includes('Obesidade'))out.push('Obesidade: considerar posições e exercícios de baixo impacto, assentos/apoios estáveis e progressão gradual; evitar barreiras desnecessárias para transferências.');if(risks.includes('Hipertensão'))out.push('Hipertensão: orientar respiração contínua, evitar manobra de Valsalva e monitorar resposta ao esforço conforme avaliação.');if(risks.includes('Diabetes'))out.push('Diabetes: considerar controle glicêmico, sensibilidade e inspeção dos pés; adaptar carga e proteger áreas de pressão.');if(risks.includes('Osteoporose'))out.push('Osteoporose: evitar flexão/rotação vertebral carregada ou impactos não avaliados; priorizar técnica, equilíbrio e carga apropriada.');if(risks.includes('Doença Cardiovascular conhecida'))out.push('Doença cardiovascular: verificar liberação/limites clínicos quando pertinentes e monitorar sintomas e tolerância ao esforço.');if(risks.includes('Risco aumentado de queda')||symptoms.includes('Desequilíbrio/insegurança ao andar'))out.push('Risco de queda/desequilíbrio: realizar tarefas em ambiente desobstruído, com apoio próximo e supervisão adequada.');if(risks.includes('Fibromialgia')||symptoms.includes('Fadiga muscular')||symptoms.includes('Baixa tolerância ao esforço'))out.push('Fadiga/dor generalizada: iniciar com dose baixa, pausas e progressão autorregulada, observando resposta pós-sessão.');if(symptoms.includes('Falta de ar aos esforços'))out.push('Falta de ar: avaliar intensidade e sinais associados; interromper exercício e encaminhar para avaliação se nova, intensa ou desproporcional.');if(symptoms.includes('Edema'))out.push('Edema: acompanhar evolução e investigar sinais de alerta; edema súbito, importante ou acompanhado de dispneia exige avaliação urgente.');if(symptoms.includes('Alteração de sensibilidade (parestesia)')||symptoms.includes('Dor neuropática'))out.push('Sintomas sensitivos/neuropáticos: monitorar distribuição, evolução e sinais neurológicos; evitar pressão ou estímulo que agrave sintomas.');if(symptoms.includes('Dor articular'))out.push('Dor articular: ajustar amplitude e carga pela resposta durante e após a atividade; não insistir em dor crescente.');if(!out.length)out.push('Sem modificadores específicos selecionados: individualizar dose, amplitude e progressão a partir da avaliação clínica.');return out}
$('patientForm').addEventListener('submit',async e=>{e.preventDefault();if(!currentUser){toast('Entre com um usuário antes de salvar.');return}const name=$('patientName').value.trim(),age=Number($('patientAge').value),condition=findCondition($('conditionSearch').value);const risks=selected('risk'),symptoms=selected('symptom');if(!name||!Number.isFinite(age)||age<0||age>120){toast('Confira nome e idade.');return}if(!condition){toast('Selecione uma patologia válida da lista da base.');return}const record={username:currentUser,name,age,conditionName:condition.nome_patologia,conditionKey:condition.nome_patologia,risks,symptoms,notes:$('patientNotes').value.trim(),createdAt:new Date().toISOString(),exercises:condition.exercicios_especificos,adaptations:adaptations(age,risks,symptoms)};const btn=e.submitter; if(btn){btn.disabled=true;btn.textContent='SALVANDO...'}try{await request(tx('patients','readwrite').add(record));renderPatientResult(record);await renderPatients();$('statusText').textContent='REGISTRO SALVO';toast('Paciente salvo no IndexedDB.')}catch(err){console.error('Erro ao salvar paciente:',err);toast('Não foi possível salvar. Verifique o IndexedDB e tente novamente.')}finally{if(btn){btn.disabled=false;btn.textContent='SALVAR E GERAR SUGESTÃO'}}});
function renderPatientResult(r){$('patientResult').innerHTML=`<article class="resultcard"><h3>RESULTADO.DAT — ${escapeHTML(r.name)}</h3><p><b>IDADE:</b> ${r.age} · <b>USUÁRIO:</b> ${escapeHTML(r.username)}</p><p><b>QUEIXA PRINCIPAL:</b> ${escapeHTML(r.conditionName)}</p><p><b>FATORES DE RISCO:</b> ${r.risks.length?r.risks.map(escapeHTML).join(', '):'Nenhum marcado'}</p><p><b>SINTOMAS:</b> ${r.symptoms.length?r.symptoms.map(escapeHTML).join(', '):'Nenhum marcado'}</p><h4>EXERCÍCIOS ESPECÍFICOS — BASE CIENTÍFICA</h4><ul>${r.exercises.map(x=>`<li><b>${escapeHTML(x.nome)}:</b> ${escapeHTML(x.descricao)}</li>`).join('')}</ul><h4>ADAPTAÇÕES CLÍNICAS PELO PERFIL</h4><ul>${r.adaptations.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>${r.notes?`<p><b>OBSERVAÇÕES:</b> ${escapeHTML(r.notes)}</p>`:''}<p class="hint">Sugestões de apoio; confirmar indicação, contraindicações, dose e progressão por avaliação profissional.</p></article>`}
async function renderPatients(){if(!currentUser)return;try{const rows=await request(tx('patients').index('username').getAll(currentUser));rows.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));$('patientList').innerHTML=rows.length?rows.map(r=>`<div class="patient-row"><span><b>${escapeHTML(r.name)}</b><br><small>${escapeHTML(r.conditionName)} · ${new Date(r.createdAt).toLocaleDateString('pt-BR')}</small></span><button data-open-patient="${r.id}">ABRIR</button></div>`).join(''):'<p>Nenhum paciente salvo.</p>';document.querySelectorAll('[data-open-patient]').forEach(b=>b.addEventListener('click',async()=>{const r=await request(tx('patients').get(Number(b.dataset.openPatient)));if(r&&r.username===currentUser)renderPatientResult(r)}))}catch(e){console.error(e);$('patientList').textContent='Erro ao carregar pacientes.'}}
$('startBtn').addEventListener('click',()=>show('login'));
$('loginForm').addEventListener('submit',async e=>{e.preventDefault();const raw=$('username').value.trim().replace(/\s+/g,'');if(!raw){toast('Digite um nome de usuário.');return}const name='@'+raw.replace(/^@+/,'');try{await saveUser(name)}catch(err){console.error(err);toast('Não foi possível acessar o banco local. Recarregue a página; seus dados não foram apagados.')}});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$('logoutBtn').addEventListener('click',()=>{currentUser=null;sessionStorage.removeItem('fisio90s_user');show('welcome')});
$('themeBtn').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';$('themeBtn').textContent=dark?'MODO CLARO':'MODO ESCURO';localStorage.setItem('fisio90s_theme',dark?'dark':'light')});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('installBtn').textContent='⬇ Baixar / Instalar Aplicativo';$('installBtn').disabled=false});
$('installBtn').addEventListener('click',async()=>{if(installPrompt){installPrompt.prompt();const choice=await installPrompt.userChoice;toast(choice.outcome==='accepted'?'Instalação iniciada.':'Instalação cancelada.');installPrompt=null}else{toast('Se disponível, use o menu do navegador → Instalar aplicativo ou Adicionar à tela inicial.');}});
window.addEventListener('appinstalled',()=>{installPrompt=null;$('installBtn').textContent='APLICATIVO INSTALADO';$('installBtn').disabled=true});
async function init(){makeChecks('riskChecks',RISKS,'risk');makeChecks('symptomChecks',SYMPTOMS,'symptom');renderConditionOptions();const theme=localStorage.getItem('fisio90s_theme');if(theme)document.documentElement.dataset.theme=theme;else if(matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.dataset.theme='dark';$('themeBtn').textContent=document.documentElement.dataset.theme==='dark'?'MODO CLARO':'MODO ESCURO';try{await openDB();if('serviceWorker'in navigator){navigator.serviceWorker.register('./sw.js').catch(e=>console.warn('SW não registrado:',e))}const saved=sessionStorage.getItem('fisio90s_user');if(saved&&await getUser(saved)){currentUser=saved;showApp()}else show('welcome')}catch(err){console.error('Inicialização do IndexedDB falhou:',err);show('welcome');toast('Armazenamento local indisponível. Recarregue esta página após limpar o cache do site.')}}
init();
})();