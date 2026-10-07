/* Fisio+ — Base científica estática e educacional.
   Estrutura: nome_patologia, regiao_corpo, palavras_chave, sintomas,
   testes_ortopedicos_neurologicos, conduta_terapeutica,
   exercicios_especificos, referencias_cientificas.
*/
const SCIENTIFIC_DATABASE = [
  {
    nome_patologia:'Síndrome do Túnel do Carpo', regiao_corpo:'Punho e Mão',
    palavras_chave:['túnel do carpo','carpal tunnel','compressão mediana','formigamento mão','parestesia','mão dormente'],
    sintomas:['parestesia','dor','fraqueza muscular','alteração de sensibilidade'],
    testes_ortopedicos_neurologicos:['Phalen','Tinel no túnel do carpo','Durkan/compressão do carpo','avaliação de sensibilidade e força de preensão'],
    conduta_terapeutica:['Educação sobre carga e posições sustentadas do punho.','Exercícios de deslizamento neural/tendíneo quando indicados.','Fortalecimento progressivo da mão e antebraço conforme irritabilidade.','Órtese noturna em posição neutra pode ser considerada em casos apropriados.'],
    exercicios_especificos:[
      {nome:'Deslizamento dos tendões da mão',descricao:'Sequência controlada entre mão aberta, gancho, punho fechado e posição de mesa, sem provocar piora persistente dos sintomas.'},
      {nome:'Deslizamento neural do nervo mediano',descricao:'Movimentos graduais de ombro, cotovelo, antebraço e punho para mobilidade neural, com amplitude tolerada.'},
      {nome:'Fortalecimento de preensão com massa terapêutica',descricao:'Compressão progressiva de material elástico macio, respeitando dor e fadiga.'}
    ],
    referencias_cientificas:['American Academy of Orthopaedic Surgeons. Management of Carpal Tunnel Syndrome CPG.','Page MJ et al. Exercise and mobilisation interventions for carpal tunnel syndrome. Cochrane Database Syst Rev.']
  },
  {
    nome_patologia:'Tenossinovite de De Quervain', regiao_corpo:'Punho e Mão',
    palavras_chave:['de quervain','tenossinovite','primeiro compartimento dorsal','dor polegar','dor radial punho'],
    sintomas:['dor','edema','perda de mobilidade','fraqueza muscular'],
    testes_ortopedicos_neurologicos:['Finkelstein','Eichhoff','WHAT test','palpação do primeiro compartimento dorsal'],
    conduta_terapeutica:['Educação e modificação temporária de atividades provocativas.','Controle de dor e edema quando necessários.','Órtese polegar-punho pode ser utilizada conforme avaliação.','Progressão para mobilidade e fortalecimento dos músculos do polegar e punho.'],
    exercicios_especificos:[
      {nome:'Abdução ativa do polegar',descricao:'Elevar o polegar no plano da palma com movimento lento e amplitude confortável.'},
      {nome:'Oposição do polegar',descricao:'Levar o polegar em direção às polpas digitais, controlando o retorno sem compensações.'},
      {nome:'Isometria de extensão do polegar',descricao:'Resistir suavemente ao movimento de extensão do polegar sem provocar aumento relevante da dor.'}
    ],
    referencias_cientificas:['Ilyas AM et al. De Quervain tenosynovitis: a review of the rehabilitative options. J Hand Surg.','American Society for Surgery of the Hand. De Quervain tenosynovitis.']
  },
  {
    nome_patologia:'Osteoartrite da Mão', regiao_corpo:'Punho e Mão',
    palavras_chave:['artrose mão','osteoartrite mão','rizartrose','artrose polegar','rigidez dedos'],
    sintomas:['dor articular','rigidez matinal','perda de mobilidade','fraqueza muscular','crepitação articular'],
    testes_ortopedicos_neurologicos:['grind test da CMC do polegar','avaliação de amplitude digital','força de preensão e pinça','inspeção de deformidades'],
    conduta_terapeutica:['Educação e conservação articular.','Exercícios de mobilidade e fortalecimento individualizados.','Treino funcional da mão e estratégias para tarefas domésticas/profissionais.','Órtese pode ser considerada em articulações sintomáticas específicas.'],
    exercicios_especificos:[
      {nome:'Oposição polegar-dedo',descricao:'Percorrer sequencialmente as polpas dos dedos mantendo movimento confortável do polegar.'},
      {nome:'Extensão dos dedos sobre mesa',descricao:'Apoiar a mão e elevar cada dedo ou o conjunto dos dedos com controle.'},
      {nome:'Preensão com massa terapêutica',descricao:'Apertar e modelar massa macia para fortalecer preensão sem sobrecarga articular.'}
    ],
    referencias_cientificas:['Kloppenburg M et al. 2019 update of the EULAR recommendations for hand osteoarthritis. Ann Rheum Dis.','EULAR recommendations for hand osteoarthritis management.']
  },
  {
    nome_patologia:'Fascite Plantar', regiao_corpo:'Tornozelo e Pé',
    palavras_chave:['fasciíte plantar','dor plantar','dor no calcanhar','heel pain','fáscia plantar'],
    sintomas:['dor','rigidez matinal','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['palpação do tubérculo medial do calcâneo','Windlass test','avaliação de dorsiflexão','avaliação de força da panturrilha'],
    conduta_terapeutica:['Educação sobre carga e manejo da dor.','Alongamento específico da fáscia plantar e panturrilha.','Fortalecimento progressivo do tríceps sural e musculatura intrínseca do pé.','Avaliação de calçados e fatores de carga quando pertinente.'],
    exercicios_especificos:[
      {nome:'Alongamento específico da fáscia plantar',descricao:'Em sedestação, tracionar suavemente os dedos do pé em direção à extensão, associando mobilidade do tornozelo conforme tolerância.'},
      {nome:'Elevação de panturrilha em pé',descricao:'Elevar os calcanhares e retornar lentamente, progredindo de bilateral para unilateral conforme capacidade.'},
      {nome:'Short foot',descricao:'Ativar a musculatura intrínseca aproximando suavemente a cabeça do primeiro metatarso do calcâneo sem enrolar os dedos.'}
    ],
    referencias_cientificas:['Martin RL et al. Heel Pain—Plantar Fasciitis: Revision 2023. J Orthop Sports Phys Ther.','American Physical Therapy Association. Clinical Practice Guideline: Heel Pain—Plantar Fasciitis.']
  },
  {
    nome_patologia:'Entorse Lateral de Tornozelo', regiao_corpo:'Tornozelo e Pé',
    palavras_chave:['entorse tornozelo','torção tornozelo','ligamento talofibular anterior','instabilidade tornozelo','inversão'],
    sintomas:['dor','edema','fraqueza muscular','desequilíbrio','instabilidade','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['teste da gaveta anterior','talar tilt','squeeze test quando indicado','teste de equilíbrio unipodal'],
    conduta_terapeutica:['Educação e proteção relativa conforme gravidade.','Recuperação progressiva de amplitude e carga.','Fortalecimento de fibulares e tríceps sural.','Treino proprioceptivo, equilíbrio e tarefas específicas.','Retorno gradual às atividades.'],
    exercicios_especificos:[
      {nome:'Dorsiflexão na parede',descricao:'Levar o joelho à frente mantendo o calcanhar apoiado para recuperar mobilidade do tornozelo.'},
      {nome:'Eversão com faixa elástica',descricao:'Resistir à eversão do pé em amplitude controlada para fortalecer os fibulares.'},
      {nome:'Equilíbrio unipodal',descricao:'Manter apoio em uma perna, inicialmente com superfície estável e apoio próximo para segurança.'},
      {nome:'Elevação de panturrilha',descricao:'Subir e descer o calcanhar controladamente para recuperar força e capacidade de carga.'}
    ],
    referencias_cientificas:['Martin RL et al. Ankle Stability and Movement Coordination Impairments: Revision 2021. J Orthop Sports Phys Ther.','PAASS framework for return to sport after acute lateral ankle sprain. Br J Sports Med.']
  },
  {
    nome_patologia:'Esporão do Calcâneo / Dor do Calcâneo', regiao_corpo:'Tornozelo e Pé',
    palavras_chave:['esporão calcâneo','esporão do calcanhar','dor calcâneo','heel spur','dor calcanhar'],
    sintomas:['dor','rigidez matinal','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['palpação do calcâneo','Windlass','avaliação de dorsiflexão','avaliação da cadeia posterior e carga do pé'],
    conduta_terapeutica:['Tratar o quadro doloroso e funcional, não apenas o achado radiográfico.','Progressão de carga da panturrilha e pé.','Mobilidade de tornozelo quando limitada.','Educação sobre carga, calçado e fatores mecânicos individuais.'],
    exercicios_especificos:[
      {nome:'Alongamento de gastrocnêmio na parede',descricao:'Manter joelho estendido e calcanhar apoiado, progredindo a amplitude conforme tolerância.'},
      {nome:'Alongamento de sóleo',descricao:'Realizar avanço com joelho flexionado mantendo o calcanhar apoiado.'},
      {nome:'Elevação de panturrilha',descricao:'Fortalecer progressivamente o tríceps sural com controle da descida.'}
    ],
    referencias_cientificas:['Martin RL et al. Heel Pain—Plantar Fasciitis: Revision 2023. J Orthop Sports Phys Ther.','Buchbinder R. Plantar fasciitis. N Engl J Med.']
  },
  {
    nome_patologia:'Síndrome Dolorosa Subacromial / Dor Relacionada ao Manguito Rotador', regiao_corpo:'Ombro e Cotovelo',
    palavras_chave:['síndrome do impacto','dor subacromial','manguito rotador','dor ombro','impingement'],
    sintomas:['dor','fraqueza muscular','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['arco doloroso','Hawkins-Kennedy','Neer','teste de força do manguito e escápula'],
    conduta_terapeutica:['Educação e modificação de carga.','Exercícios progressivos para manguito rotador e musculatura escapular.','Recuperação de mobilidade quando necessária.','Progressão para tarefas funcionais acima da cabeça conforme tolerância.'],
    exercicios_especificos:[
      {nome:'Rotação externa com faixa elástica',descricao:'Manter cotovelo junto ao tronco e realizar rotação externa contra resistência leve.'},
      {nome:'Remada com faixa',descricao:'Puxar a faixa aproximando as escápulas sem elevar excessivamente os ombros.'},
      {nome:'Elevação no plano da escápula',descricao:'Elevar o braço em plano escapular com carga leve e movimento controlado.'}
    ],
    referencias_cientificas:['Littlewood C et al. Exercise treatment for rotator cuff tendinopathy. Cochrane Database Syst Rev.','JOSPT. Rotator Cuff Tendinopathy Clinical Practice Guideline.']
  },
  {
    nome_patologia:'Epicondilalgia Lateral', regiao_corpo:'Ombro e Cotovelo',
    palavras_chave:['epicondilite lateral','cotovelo de tenista','tennis elbow','dor lateral cotovelo','extensores punho'],
    sintomas:['dor','fraqueza muscular'],
    testes_ortopedicos_neurologicos:['Cozen','Mill','Maudsley','teste de força de extensão do punho e preensão'],
    conduta_terapeutica:['Educação sobre gerenciamento de carga.','Fortalecimento progressivo dos extensores do punho.','Treino de preensão e função.','Reintrodução gradual das atividades provocativas.'],
    exercicios_especificos:[
      {nome:'Extensão de punho excêntrica',descricao:'Ajudar a subida com a outra mão e controlar lentamente a descida com o punho afetado.'},
      {nome:'Extensão de punho com faixa',descricao:'Realizar extensão contra resistência leve, progredindo conforme tolerância.'},
      {nome:'Preensão com bola macia',descricao:'Apertar uma bola macia com controle, ajustando volume à irritabilidade.'}
    ],
    referencias_cientificas:['Lucado AM et al. Lateral Elbow Pain and Muscle Function: CPG. J Orthop Sports Phys Ther.','Coombes BK et al. Management of lateral elbow tendinopathy. Lancet.']
  },
  {
    nome_patologia:'Síndrome do Túnel Cubital', regiao_corpo:'Ombro e Cotovelo',
    palavras_chave:['túnel cubital','neuropatia ulnar','nervo ulnar','parestesia quarto quinto dedos','cotovelo ulnar'],
    sintomas:['parestesia','dor','fraqueza muscular','alteração de sensibilidade'],
    testes_ortopedicos_neurologicos:['Tinel no túnel cubital','flexão sustentada do cotovelo','avaliação sensitiva ulnar','força intrínseca da mão'],
    conduta_terapeutica:['Educação para reduzir compressão e flexão prolongada do cotovelo.','Mobilidade neural quando indicada.','Fortalecimento funcional progressivo após redução da irritabilidade.','Encaminhamento para avaliação médica quando houver déficit motor progressivo.'],
    exercicios_especificos:[
      {nome:'Deslizamento neural do nervo ulnar',descricao:'Sequência suave de posicionamentos do membro superior visando mobilidade neural sem reproduzir sintomas persistentes.'},
      {nome:'Abdução dos dedos contra elástico leve',descricao:'Abrir os dedos contra pequena resistência para trabalhar musculatura intrínseca da mão.'},
      {nome:'Oposição e pinça funcional',descricao:'Treinar movimentos de pinça com baixa resistência e controle.'}
    ],
    referencias_cientificas:['American Academy of Orthopaedic Surgeons. Management of Cubital Tunnel Syndrome.','Camp CL et al. Ulnar neuropathy at the elbow: diagnosis and treatment review.']
  },
  {
    nome_patologia:'Cervicalgia Mecânica', regiao_corpo:'Coluna',
    palavras_chave:['dor cervical','cervicalgia','pescoço','rigidez cervical','dor nuca'],
    sintomas:['dor','rigidez matinal','perda de mobilidade','espasmo muscular'],
    testes_ortopedicos_neurologicos:['avaliação de amplitude cervical','Spurling quando indicado','teste de distração','exame neurológico de membros superiores'],
    conduta_terapeutica:['Educação e manutenção de atividade conforme tolerância.','Exercícios de mobilidade cervical e torácica.','Fortalecimento de flexores cervicais profundos e cintura escapular.','Terapia manual pode ser recurso complementar quando indicada.'],
    exercicios_especificos:[
      {nome:'Chin tuck / flexão cervical profunda',descricao:'Realizar retração suave do queixo sem inclinar a cabeça, mantendo contração leve.'},
      {nome:'Rotação cervical ativa',descricao:'Girar a cabeça lentamente para os lados dentro da amplitude confortável.'},
      {nome:'Remada com faixa',descricao:'Fortalecer musculatura escapular para melhorar capacidade funcional do complexo cervicotorácico.'}
    ],
    referencias_cientificas:['Blanpied PR et al. Neck Pain: Revision 2017 Clinical Practice Guidelines. J Orthop Sports Phys Ther.','Côté P et al. The Global Burden of Neck Pain.']
  },
  {
    nome_patologia:'Lombalgia Mecânica / Inespecífica', regiao_corpo:'Coluna',
    palavras_chave:['lombalgia','dor lombar','dor nas costas','lombalgia mecânica','low back pain'],
    sintomas:['dor','rigidez matinal','espasmo muscular','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['avaliação funcional e de movimento','teste de elevação da perna estendida quando indicado','exame neurológico','avaliação de força e mobilidade de quadril'],
    conduta_terapeutica:['Educação e manutenção de atividades na medida do possível.','Exercício terapêutico individualizado.','Fortalecimento de tronco e membros inferiores.','Treino de controle motor e retorno gradual às tarefas.'],
    exercicios_especificos:[
      {nome:'Ponte pélvica',descricao:'Elevar a pelve em decúbito dorsal ativando extensores de quadril e tronco sem compensação excessiva.'},
      {nome:'Bird dog',descricao:'Em quatro apoios, estender braço e perna opostos mantendo tronco estável.'},
      {nome:'Agachamento para cadeira',descricao:'Sentar e levantar de uma cadeira com controle do tronco e dos joelhos.'},
      {nome:'Mobilidade gato-camelo',descricao:'Alternar flexão e extensão suaves da coluna em quatro apoios conforme tolerância.'}
    ],
    referencias_cientificas:['George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain. J Orthop Sports Phys Ther.','World Health Organization. WHO guideline for non-surgical management of chronic primary low back pain in adults. 2023.']
  },
  {
    nome_patologia:'Hérnia de Disco Lombar com Radiculopatia', regiao_corpo:'Coluna',
    palavras_chave:['hérnia de disco','hérnia lombar','ciatalgia','radiculopatia lombar','dor irradiada','ciática'],
    sintomas:['dor irradiada','parestesia','fraqueza muscular','dor neuropática'],
    testes_ortopedicos_neurologicos:['Lasègue/SLR','Slump test','exame de força, reflexos e sensibilidade','avaliação de sinais de alerta'],
    conduta_terapeutica:['Triagem neurológica e de sinais de alerta.','Educação e manejo de carga.','Movimentos/exercícios direcionais podem ser utilizados conforme resposta individual.','Fortalecimento e retorno funcional progressivos.','Déficit neurológico progressivo exige avaliação médica.'],
    exercicios_especificos:[
      {nome:'Extensão lombar em prono',descricao:'Apoiar-se nos antebraços ou realizar extensão progressiva conforme resposta sintomática individual.'},
      {nome:'Ponte pélvica',descricao:'Fortalecer extensores de quadril e tronco com carga progressiva.'},
      {nome:'Marcha controlada',descricao:'Caminhada em dose tolerada para manter capacidade funcional e condicionamento.'}
    ],
    referencias_cientificas:['Delitto A et al. Interventions for the Management of Acute and Chronic Low Back Pain. J Orthop Sports Phys Ther.','NASS. Diagnosis and Treatment of Lumbar Disc Herniation with Radiculopathy.']
  },
  {
    nome_patologia:'Osteoartrite de Joelho', regiao_corpo:'Joelho e Quadril',
    palavras_chave:['artrose joelho','osteoartrite joelho','gonartrose','dor joelho','rigidez joelho'],
    sintomas:['dor articular','rigidez matinal','crepitação articular','fraqueza muscular','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['avaliação de amplitude','teste de força de quadríceps e quadril','teste funcional sentar-levantar','avaliação de marcha'],
    conduta_terapeutica:['Educação e exercício terapêutico como pilares do manejo.','Fortalecimento de quadríceps, glúteos e panturrilha.','Exercício aeróbico de baixo impacto conforme tolerância.','Treino funcional e controle de peso quando aplicável.'],
    exercicios_especificos:[
      {nome:'Extensão de joelho em cadeia aberta',descricao:'Estender o joelho contra resistência leve, com amplitude e carga individualizadas.'},
      {nome:'Sentar e levantar da cadeira',descricao:'Treinar força funcional de quadríceps e quadril usando cadeira estável.'},
      {nome:'Elevação de perna estendida',descricao:'Elevar a perna com joelho estendido mantendo contração do quadríceps.'},
      {nome:'Caminhada ou bicicleta ergométrica',descricao:'Atividade aeróbica de baixo impacto ajustada à capacidade e aos sintomas.'}
    ],
    referencias_cientificas:['Bannuru RR et al. OARSI guidelines for non-surgical management of knee osteoarthritis. Osteoarthritis Cartilage.','Kolasinski SL et al. 2019 ACR/Arthritis Foundation Guideline for OA. Arthritis Care Res.']
  },
  {
    nome_patologia:'Síndrome da Dor Femoropatelar', regiao_corpo:'Joelho e Quadril',
    palavras_chave:['condromalácia','dor femoropatelar','dor anterior joelho','patelofemoral','escada agachamento'],
    sintomas:['dor articular','fraqueza muscular','perda de mobilidade','crepitação articular'],
    testes_ortopedicos_neurologicos:['agachamento','step-down','avaliação de força de quadril e quadríceps','avaliação de movimento patelofemoral'],
    conduta_terapeutica:['Educação sobre gerenciamento de carga.','Exercícios combinados de joelho e quadril.','Progressão de força e controle do membro inferior.','Retorno gradual a corrida, saltos ou tarefas específicas.'],
    exercicios_especificos:[
      {nome:'Agachamento para cadeira',descricao:'Executar agachamento com amplitude inicialmente confortável e alinhamento controlado do membro inferior.'},
      {nome:'Abdução de quadril em decúbito lateral',descricao:'Elevar a perna mantendo quadril estável para fortalecer abdutores.'},
      {nome:'Step-down baixo',descricao:'Descer de um degrau pequeno controlando alinhamento do joelho e quadril.'}
    ],
    referencias_cientificas:['Willy RW et al. Patellofemoral Pain Clinical Practice Guidelines. J Orthop Sports Phys Ther.','Crossley KM et al. 2016 Patellofemoral Pain Consensus Statement. Br J Sports Med.']
  },
  {
    nome_patologia:'Osteoartrite de Quadril', regiao_corpo:'Joelho e Quadril',
    palavras_chave:['artrose quadril','osteoartrite quadril','coxartrose','dor quadril','rigidez quadril'],
    sintomas:['dor articular','rigidez matinal','perda de mobilidade','fraqueza muscular'],
    testes_ortopedicos_neurologicos:['FABER','FADIR','amplitude de quadril','teste de força de abdutores e extensores'],
    conduta_terapeutica:['Educação e exercício terapêutico.','Fortalecimento de glúteos, quadríceps e musculatura do tronco.','Mobilidade de quadril conforme necessidade.','Treino funcional e aeróbico de baixo impacto.'],
    exercicios_especificos:[
      {nome:'Ponte pélvica',descricao:'Fortalecer extensores de quadril com movimento controlado e progressão gradual.'},
      {nome:'Abdução de quadril',descricao:'Elevar lateralmente a perna mantendo pelve estável.'},
      {nome:'Sentar e levantar',descricao:'Treinar força funcional dos membros inferiores com cadeira estável.'}
    ],
    referencias_cientificas:['Kolasinski SL et al. 2019 ACR/Arthritis Foundation Guideline for OA. Arthritis Care Res.','NICE. Osteoarthritis in over 16s: diagnosis and management.']
  },
  {
    nome_patologia:'Acidente Vascular Cerebral — Reabilitação Crônica', regiao_corpo:'Neurologia',
    palavras_chave:['AVC','acidente vascular cerebral','hemiparesia','hemiplegia','derrame','reabilitação neurológica'],
    sintomas:['fraqueza muscular','alteração de sensibilidade','desequilíbrio','perda de mobilidade','fadiga muscular'],
    testes_ortopedicos_neurologicos:['Fugl-Meyer Assessment','Timed Up and Go','Berg Balance Scale','avaliação de marcha, força, tônus e função do membro superior'],
    conduta_terapeutica:['Treino orientado à tarefa e repetição de atividades funcionais.','Treino de marcha e equilíbrio.','Fortalecimento progressivo quando indicado.','Treino de membro superior e uso funcional.','Educação e manejo de fadiga.'],
    exercicios_especificos:[
      {nome:'Sentar e levantar',descricao:'Praticar transferência sentado-em-pé com controle do tronco e apoio conforme necessidade.'},
      {nome:'Marcha orientada à tarefa',descricao:'Praticar deslocamento em ambiente seguro, progredindo distância, velocidade e complexidade conforme capacidade.'},
      {nome:'Alcance funcional do membro superior',descricao:'Alcançar objetos em diferentes direções para estimular uso do membro afetado em tarefa significativa.'},
      {nome:'Transferência de peso em pé',descricao:'Deslocar o peso lateral e anteriormente/posteriormente com apoio e supervisão conforme necessidade.'}
    ],
    referencias_cientificas:['Winstein CJ et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke.','Intercollegiate Stroke Working Party. National Clinical Guideline for Stroke.']
  },
  {
    nome_patologia:'Doença de Parkinson', regiao_corpo:'Neurologia',
    palavras_chave:['Parkinson','bradicinesia','rigidez','freezing','marcha Parkinson','doença neurodegenerativa'],
    sintomas:['rigidez matinal','fraqueza muscular','desequilíbrio','fadiga muscular','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['Timed Up and Go','Mini-BESTest','10 Meter Walk Test','Five Times Sit-to-Stand','avaliação de freezing e marcha'],
    conduta_terapeutica:['Exercício aeróbico e de força conforme capacidade.','Treino de equilíbrio e mobilidade.','Estratégias externas para marcha e freezing.','Treino orientado à tarefa e dupla tarefa conforme segurança.'],
    exercicios_especificos:[
      {nome:'Amplitude de movimento ampla',descricao:'Movimentos amplos de membros e tronco em tarefas funcionais, com pistas verbais/visuais quando úteis.'},
      {nome:'Sentar e levantar',descricao:'Repetir transferência com foco em amplitude, velocidade adequada e segurança.'},
      {nome:'Marcha com pistas externas',descricao:'Usar marcações visuais ou ritmo sonoro para facilitar comprimento e regularidade dos passos quando indicado.'},
      {nome:'Treino de equilíbrio multidirecional',descricao:'Deslocar o centro de massa em diferentes direções com apoio próximo e progressão individualizada.'}
    ],
    referencias_cientificas:['Keus SHJ et al. European Physiotherapy Guideline for Parkinson’s Disease.','Radder DLM et al. Physiotherapy in Parkinson disease: a meta-analysis.']
  },
  {
    nome_patologia:'Esclerose Múltipla', regiao_corpo:'Neurologia',
    palavras_chave:['esclerose múltipla','EM','fadiga neurológica','desmielinização','equilíbrio EM'],
    sintomas:['fadiga muscular','fraqueza muscular','desequilíbrio','alteração de sensibilidade','perda de mobilidade'],
    testes_ortopedicos_neurologicos:['Timed 25-Foot Walk','6 Minute Walk Test','Berg Balance Scale','Multiple Sclerosis Walking Scale quando disponível'],
    conduta_terapeutica:['Exercício aeróbico e resistido individualizado.','Manejo de fadiga e conservação de energia.','Treino de equilíbrio e marcha.','Atenção à termossensibilidade e recuperação entre esforços.'],
    exercicios_especificos:[
      {nome:'Caminhada intervalada',descricao:'Alternar períodos curtos de caminhada e recuperação conforme tolerância à fadiga.'},
      {nome:'Fortalecimento de membros inferiores',descricao:'Exercícios resistidos para quadríceps, glúteos e panturrilha com volume individualizado.'},
      {nome:'Equilíbrio com apoio próximo',descricao:'Treinar mudanças de base e transferência de peso com ambiente seguro.'}
    ],
    referencias_cientificas:['Motl RW et al. Exercise in multiple sclerosis. Lancet Neurol.','National Multiple Sclerosis Society. Rehabilitation and exercise resources.']
  },
  {
    nome_patologia:'Lesão Medular — Reabilitação Funcional', regiao_corpo:'Neurologia',
    palavras_chave:['lesão medular','paraplegia','tetraplegia','lesão espinhal','reabilitação medular'],
    sintomas:['fraqueza muscular','alteração de sensibilidade','perda de mobilidade','desequilíbrio'],
    testes_ortopedicos_neurologicos:['ISNCSCI/ASIA','Wheelchair Skills Test quando indicado','avaliação funcional de transferências','teste de força e amplitude'],
    conduta_terapeutica:['Treino de transferências e mobilidade funcional.','Fortalecimento de músculos preservados.','Treino de equilíbrio sentado/em pé conforme nível de lesão.','Condicionamento e prevenção de complicações secundárias.'],
    exercicios_especificos:[
      {nome:'Treino de transferência leito-cadeira',descricao:'Praticar sequência de transferência com técnica adequada e equipamento compatível.'},
      {nome:'Fortalecimento de membros superiores',descricao:'Exercícios resistidos para músculos necessários às transferências e propulsão da cadeira.'},
      {nome:'Equilíbrio sentado',descricao:'Deslocar o tronco e retornar ao centro mantendo estabilidade em superfície segura.'}
    ],
    referencias_cientificas:['SCIRE Project. Spinal Cord Injury Rehabilitation Evidence.','Consortium for Spinal Medicine. Clinical practice guidelines for SCI rehabilitation.']
  },
  {
    nome_patologia:'Neuropatia Periférica Associada ao Diabetes', regiao_corpo:'Neurologia',
    palavras_chave:['neuropatia diabética','pé diabético neuropático','polineuropatia','parestesia pés','diabetes neuropatia'],
    sintomas:['parestesia','alteração de sensibilidade','fraqueza muscular','desequilíbrio','dor neuropática'],
    testes_ortopedicos_neurologicos:['monofilamento de 10 g','vibração com diapasão quando disponível','reflexo aquileu','avaliação de força e equilíbrio'],
    conduta_terapeutica:['Educação e inspeção dos pés.','Exercício de força e equilíbrio conforme risco.','Treino de marcha e prevenção de quedas.','Atenção a integridade cutânea e calçados.'],
    exercicios_especificos:[
      {nome:'Elevação de panturrilha com apoio',descricao:'Fortalecer tríceps sural mantendo apoio estável e monitorando segurança do pé.'},
      {nome:'Equilíbrio em base ampla',descricao:'Treinar controle postural inicialmente com apoio e progressão conforme segurança.'},
      {nome:'Marcha funcional supervisionada',descricao:'Praticar deslocamentos e obstáculos simples com atenção à integridade dos pés.'}
    ],
    referencias_cientificas:['American Diabetes Association. Standards of Care in Diabetes — foot care and physical activity sections.','Tesfaye S et al. Diabetic neuropathies: update on definition, diagnostic criteria and estimation of severity. Diabetes Care.']
  },
  {
    nome_patologia:'Acidente Vascular Cerebral — Fase Aguda/Subaguda', regiao_corpo:'Neurologia',
    palavras_chave:['AVC agudo','AVC subagudo','hemiparesia','mobilização precoce','reabilitação AVC'],
    sintomas:['fraqueza muscular','alteração de sensibilidade','desequilíbrio','fadiga muscular'],
    testes_ortopedicos_neurologicos:['NIHSS em contexto multiprofissional','Fugl-Meyer','avaliação de mobilidade e controle de tronco','triagem de deglutição/consciência pela equipe quando pertinente'],
    conduta_terapeutica:['Mobilização e atividade devem respeitar estabilidade clínica e protocolos institucionais.','Treino orientado à tarefa conforme capacidade.','Posicionamento e prevenção de complicações.','Progressão de mobilidade, transferências e marcha conforme segurança.'],
    exercicios_especificos:[
      {nome:'Controle de tronco sentado',descricao:'Treinar alinhamento e deslocamentos de tronco em sedestação com suporte conforme necessidade.'},
      {nome:'Transferência sentado-em-pé',descricao:'Praticar a transição com assistência adequada e monitorização clínica.'},
      {nome:'Alcance em sedestação',descricao:'Alcançar objetos em diferentes direções para estimular controle postural e função.'}
    ],
    referencias_cientificas:['Powers WJ et al. Guidelines for the Early Management of Acute Ischemic Stroke. Stroke.','Winstein CJ et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke.']
  }
];

window.SCIENTIFIC_DATABASE = SCIENTIFIC_DATABASE;
