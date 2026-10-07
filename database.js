/* Fisio90s - Base científica estática para consulta educacional.
   As condutas são referências de apoio e não substituem avaliação clínica. */
const DATABASE = [
  {
    nome_patologia: "Síndrome do Túnel do Carpo",
    regiao_corpo: "Punho e Mão",
    palavras_chave: ["túnel do carpo", "tunel do carpo", "parestesia", "formigamento", "mão dormente", "nervo mediano"],
    sintomas: ["parestesia", "dor neuropática", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["Phalen", "Tinel no túnel do carpo", "Durkan/compressão do carpo", "avaliação de sensibilidade do território mediano"],
    conduta_terapeutica: "Educação, modificação de atividades, manejo de carga, exercícios de mobilidade neural e tendínea e fortalecimento progressivo conforme irritabilidade e avaliação clínica.",
    exercicios_especificos: [
      { nome: "Deslizamento do nervo mediano", descricao: "Sequência suave de deslizamento neural do membro superior, sem provocar aumento sustentado dos sintomas." },
      { nome: "Deslizamento dos tendões flexores", descricao: "Sequência de posições de mão aberta, gancho, punho fechado e mesa para favorecer excursão tendínea." },
      { nome: "Abdução do polegar com resistência leve", descricao: "Fortalecimento progressivo da musculatura tenar com elástico ou resistência manual leve." }
    ],
    referencias_cientificas: ["AAOS. Management of Carpal Tunnel Syndrome. Clinical Practice Guideline.", "Page MJ et al. Exercise and mobilization interventions for carpal tunnel syndrome. Cochrane Database of Systematic Reviews."]
  },
  {
    nome_patologia: "Tenossinovite de De Quervain",
    regiao_corpo: "Punho e Mão",
    palavras_chave: ["de quervain", "tenossinovite", "polegar", "dor radial", "punho radial"],
    sintomas: ["dor articular", "perda de mobilidade", "fraqueza muscular"],
    testes_ortopedicos_neurologicos: ["Finkelstein", "Eichhoff", "WHAT test", "palpação do primeiro compartimento extensor"],
    conduta_terapeutica: "Educação, redução temporária de atividades provocativas, controle de carga, mobilidade graduada e fortalecimento progressivo do polegar e punho conforme tolerância.",
    exercicios_especificos: [
      { nome: "Abdução ativa do polegar", descricao: "Levar o polegar para fora da palma em amplitude confortável, com retorno controlado." },
      { nome: "Oposição do polegar", descricao: "Tocar sequencialmente a polpa do polegar nas pontas dos dedos, sem aumentar a dor." },
      { nome: "Extensão do polegar com elástico leve", descricao: "Resistência leve à extensão do polegar, priorizando movimento lento e controle." }
    ],
    referencias_cientificas: ["Ilyas AM et al. De Quervain tenosynovitis. Journal of Hand Surgery.", "AAOS. Tendinitis of the Wrist and Hand."]
  },
  {
    nome_patologia: "Osteoartrite da Mão",
    regiao_corpo: "Punho e Mão",
    palavras_chave: ["artrose da mão", "osteoartrite mão", "rigidez dedos", "rizartrose", "polegar"],
    sintomas: ["dor articular", "rigidez matinal", "crepitação articular", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["avaliação de amplitude", "teste de compressão da CMC do polegar", "força de preensão e pinça", "avaliação funcional da mão"],
    conduta_terapeutica: "Educação, conservação articular, exercícios de amplitude, fortalecimento de preensão/pinça e adaptação de atividades conforme dor e função.",
    exercicios_especificos: [
      { nome: "Deslizamento dos dedos", descricao: "Flexão e extensão progressiva dos dedos, percorrendo posições de mão aberta, gancho e punho." },
      { nome: "Pinça polegar-indicador", descricao: "Pinça suave entre polegar e indicador com objeto macio, progredindo a resistência conforme tolerância." },
      { nome: "Fortalecimento de preensão com massa terapêutica", descricao: "Compressão controlada de massa terapêutica, evitando excesso de dor após o exercício." }
    ],
    referencias_cientificas: ["Kloppenburg M et al. 2018 update of the EULAR recommendations for hand osteoarthritis.", "American College of Rheumatology/Arthritis Foundation. Osteoarthritis guideline."]
  },
  {
    nome_patologia: "Fascite Plantar",
    regiao_corpo: "Tornozelo e Pé",
    palavras_chave: ["fascite plantar", "dor no calcanhar", "dor plantar", "dor matinal", "fáscia plantar"],
    sintomas: ["dor articular", "rigidez matinal", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["palpação do tubérculo medial do calcâneo", "windlass test", "avaliação de dorsiflexão", "avaliação funcional da marcha"],
    conduta_terapeutica: "Educação, manejo de carga, alongamento específico, fortalecimento progressivo da panturrilha e musculatura intrínseca do pé e estratégias para retorno gradual à atividade.",
    exercicios_especificos: [
      { nome: "Alongamento da fáscia plantar", descricao: "Alongamento manual dos dedos e arco plantar em posição confortável, especialmente antes dos primeiros passos." },
      { nome: "Alongamento de gastrocnêmio e sóleo", descricao: "Alongamentos em apoio, com joelho estendido e flexionado, respeitando tolerância." },
      { nome: "Elevação de panturrilha", descricao: "Elevação bilateral e posteriormente unilateral do calcanhar, com progressão de carga." },
      { nome: "Short foot", descricao: "Aproximar suavemente a cabeça do primeiro metatarso do calcâneo sem enrolar os dedos, treinando controle do arco." }
    ],
    referencias_cientificas: ["Martin RL et al. Heel Pain—Plantar Fasciitis: Revision 2023. JOSPT.", "American Physical Therapy Association. Clinical Practice Guideline: Heel Pain—Plantar Fasciitis."]
  },
  {
    nome_patologia: "Entorse Lateral de Tornozelo",
    regiao_corpo: "Tornozelo e Pé",
    palavras_chave: ["entorse tornozelo", "entorse lateral", "ligamento talofibular", "inversão", "tornozelo inchado"],
    sintomas: ["dor articular", "edema", "perda de mobilidade", "fraqueza muscular", "desequilíbrio/insegurança ao andar"],
    testes_ortopedicos_neurologicos: ["gaveta anterior", "talar tilt", "Ottawa Ankle Rules", "teste de equilíbrio unipodal"],
    conduta_terapeutica: "Controle de sintomas e carga na fase inicial, recuperação de amplitude, fortalecimento de eversores e panturrilha, treino proprioceptivo e retorno progressivo às atividades.",
    exercicios_especificos: [
      { nome: "Mobilidade de dorsiflexão na parede", descricao: "Avançar o joelho em direção à parede mantendo o calcanhar apoiado, sem compensação excessiva." },
      { nome: "Eversão com faixa elástica", descricao: "Fortalecimento dos eversores com resistência leve a moderada e retorno lento." },
      { nome: "Elevação de panturrilha", descricao: "Subir e descer o calcanhar com apoio, progredindo para apoio unipodal." },
      { nome: "Equilíbrio unipodal", descricao: "Manter apoio em uma perna e progredir superfície, alcance e tarefas conforme segurança." }
    ],
    referencias_cientificas: ["Martin RL et al. Ankle Stability and Movement Coordination Impairments: CPG. JOSPT.", "Dubois B, Esculier JF. Soft-tissue injuries simply explained. BJSM."]
  },
  {
    nome_patologia: "Tendinopatia de Aquiles",
    regiao_corpo: "Tornozelo e Pé",
    palavras_chave: ["aquiles", "tendão de aquiles", "tendinopatia aquiles", "dor posterior tornozelo", "panturrilha"],
    sintomas: ["dor articular", "rigidez matinal", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["Royal London Hospital test", "painful arc", "Thompson para suspeita de ruptura", "elevação de panturrilha"],
    conduta_terapeutica: "Educação e gerenciamento de carga, fortalecimento progressivo do complexo tríceps sural e retorno gradual à atividade específica.",
    exercicios_especificos: [
      { nome: "Elevação de panturrilha bilateral", descricao: "Elevação do calcanhar com carga progressiva e controle do movimento." },
      { nome: "Elevação de panturrilha unilateral", descricao: "Progressão para apoio unipodal conforme capacidade e sintomas." },
      { nome: "Panturrilha com joelho flexionado", descricao: "Fortalecimento com joelho levemente flexionado para aumentar participação do sóleo." }
    ],
    referencias_cientificas: ["Martin RL et al. Achilles Pain, Stiffness, and Muscle Power Deficits: CPG. JOSPT.", "Silbernagel KG et al. Rehabilitation for Achilles tendinopathy."]
  },
  {
    nome_patologia: "Síndrome Dolorosa Subacromial",
    regiao_corpo: "Ombro e Cotovelo",
    palavras_chave: ["síndrome do impacto", "impacto subacromial", "dor no ombro", "arco doloroso", "manguito rotador"],
    sintomas: ["dor articular", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["painful arc", "Hawkins-Kennedy", "Neer", "teste de força do manguito"],
    conduta_terapeutica: "Educação, modificação temporária de carga, exercícios progressivos para manguito rotador e cintura escapular e recuperação funcional específica.",
    exercicios_especificos: [
      { nome: "Rotação externa com faixa", descricao: "Rotação externa do ombro com cotovelo junto ao tronco, progredindo resistência." },
      { nome: "Remada baixa com elástico", descricao: "Retração e depressão escapular coordenadas com flexão do cotovelo." },
      { nome: "Elevação no plano da escápula", descricao: "Elevação dos braços no plano escapular com carga leve e amplitude tolerada." }
    ],
    referencias_cientificas: ["Cools AM et al. Rehabilitation of scapular dyskinesis. BJSM.", "American Academy of Orthopaedic Surgeons. Rotator Cuff and Shoulder Conditioning."]
  },
  {
    nome_patologia: "Epicondilalgia Lateral",
    regiao_corpo: "Ombro e Cotovelo",
    palavras_chave: ["epicondilite", "epicondilalgia", "cotovelo de tenista", "dor lateral cotovelo", "extensores punho"],
    sintomas: ["dor articular", "fraqueza muscular"],
    testes_ortopedicos_neurologicos: ["Cozen", "Mill", "Maudsley", "força de preensão"],
    conduta_terapeutica: "Educação e ajuste de carga, fortalecimento progressivo dos extensores do punho e recuperação gradual de tarefas funcionais.",
    exercicios_especificos: [
      { nome: "Extensão de punho excêntrica", descricao: "Ajudar a subir o punho e controlar lentamente a descida contra resistência." },
      { nome: "Pronação e supinação com martelo leve", descricao: "Rotação do antebraço com alavanca leve, ajustando amplitude e carga." },
      { nome: "Preensão isométrica", descricao: "Compressão de objeto macio por tempo curto, progredindo conforme tolerância." }
    ],
    referencias_cientificas: ["Bisset L et al. Mobilisation with movement and exercise for lateral epicondylalgia.", "JOSPT. Lateral Elbow Pain and Muscle Function CPG."]
  },
  {
    nome_patologia: "Síndrome do Túnel Cubital",
    regiao_corpo: "Ombro e Cotovelo",
    palavras_chave: ["túnel cubital", "tunel cubital", "nervo ulnar", "formigamento quinto dedo", "parestesia ulnar"],
    sintomas: ["parestesia", "dor neuropática", "fraqueza muscular"],
    testes_ortopedicos_neurologicos: ["Tinel no túnel cubital", "flexão sustentada do cotovelo", "avaliação sensitiva ulnar", "teste de força intrínseca da mão"],
    conduta_terapeutica: "Educação para evitar compressão e flexão prolongada do cotovelo, mobilidade neural suave e fortalecimento quando indicado após avaliação.",
    exercicios_especificos: [
      { nome: "Deslizamento do nervo ulnar", descricao: "Deslizamento neural suave sem manter a posição provocativa ou aumentar sintomas residuais." },
      { nome: "Abertura e fechamento dos dedos", descricao: "Movimentos ativos dos dedos para manutenção da mobilidade e controle da mão." }
    ],
    referencias_cientificas: ["AAOS. Cubital Tunnel Syndrome.", "Cutts S. Cubital tunnel syndrome. Postgraduate Medical Journal."]
  },
  {
    nome_patologia: "Cervicalgia Mecânica",
    regiao_corpo: "Coluna",
    palavras_chave: ["cervicalgia", "dor cervical", "pescoço", "cervical", "tensão cervical"],
    sintomas: ["dor articular", "rigidez matinal", "espasmo muscular", "perda de mobilidade", "dor irradiada"],
    testes_ortopedicos_neurologicos: ["Spurling quando indicado", "distração cervical", "avaliação neurológica de membros superiores", "amplitude cervical"],
    conduta_terapeutica: "Educação, manutenção de atividade, exercícios cervicais e torácicos, fortalecimento dos flexores cervicais profundos e cintura escapular conforme apresentação.",
    exercicios_especificos: [
      { nome: "Chin tuck", descricao: "Retração suave do queixo sem flexionar excessivamente a cabeça, treinando controle cervical." },
      { nome: "Rotação cervical ativa", descricao: "Giros lentos da cabeça em amplitude confortável, sem forçar a dor." },
      { nome: "Remada com elástico", descricao: "Fortalecimento da musculatura escapular com foco em controle postural." }
    ],
    referencias_cientificas: ["Blanpied PR et al. Neck Pain: Revision 2017 CPG. JOSPT.", "Côté P et al. Management of neck pain and associated disorders."]
  },
  {
    nome_patologia: "Lombalgia Mecânica",
    regiao_corpo: "Coluna",
    palavras_chave: ["lombalgia", "dor lombar", "dor nas costas", "lombar", "dor mecânica"],
    sintomas: ["dor articular", "rigidez matinal", "espasmo muscular", "perda de mobilidade", "dor irradiada"],
    testes_ortopedicos_neurologicos: ["Lasègue quando indicado", "Slump quando indicado", "avaliação neurológica de membros inferiores", "movimentos repetidos e resposta dos sintomas"],
    conduta_terapeutica: "Educação, manutenção de atividade, exercício terapêutico individualizado, fortalecimento de tronco e quadril e progressão funcional conforme resposta.",
    exercicios_especificos: [
      { nome: "Ponte pélvica", descricao: "Elevar a pelve a partir da posição deitada, priorizando controle do tronco e quadril." },
      { nome: "Bird-dog", descricao: "Extensão alternada de braço e perna em quatro apoios, mantendo estabilidade do tronco." },
      { nome: "Dead bug", descricao: "Movimento alternado de membros superiores e inferiores em decúbito dorsal, mantendo controle abdominal." },
      { nome: "Mobilidade gato-camelo", descricao: "Alternância controlada entre flexão e extensão da coluna em quatro apoios." }
    ],
    referencias_cientificas: ["George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain. JOSPT.", "WHO. WHO guideline for non-surgical management of chronic primary low back pain."]
  },
  {
    nome_patologia: "Hérnia de Disco Lombar com Radiculopatia",
    regiao_corpo: "Coluna",
    palavras_chave: ["hérnia de disco", "hernia de disco", "radiculopatia", "ciatalgia", "dor ciática", "irradiação"],
    sintomas: ["dor irradiada", "parestesia", "dor neuropática", "fraqueza muscular"],
    testes_ortopedicos_neurologicos: ["Lasègue/SLR", "Slump", "força segmentar", "reflexos", "sensibilidade dermatomérica"],
    conduta_terapeutica: "Triagem neurológica e de sinais de alerta, educação, manejo de carga e exercício direcionado à apresentação clínica, com encaminhamento quando houver sinais de déficit progressivo ou urgência.",
    exercicios_especificos: [
      { nome: "Extensão lombar em prono", descricao: "Movimento de extensão progressiva somente quando compatível com a resposta individual dos sintomas." },
      { nome: "Caminhada graduada", descricao: "Caminhada em períodos toleráveis com progressão gradual de duração." },
      { nome: "Bird-dog", descricao: "Controle de tronco e quadril em quatro apoios, progredindo conforme irritabilidade e força." }
    ],
    referencias_cientificas: ["JOSPT. Low Back Pain CPG.", "NASS. Evidence-Based Clinical Guidelines for Multidisciplinary Spine Care: Lumbar Disc Herniation with Radiculopathy."]
  },
  {
    nome_patologia: "Osteoartrite de Joelho",
    regiao_corpo: "Joelho e Quadril",
    palavras_chave: ["artrose joelho", "osteoartrite joelho", "gonartrose", "dor joelho", "rigidez joelho"],
    sintomas: ["dor articular", "rigidez matinal", "crepitação articular", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["amplitude de movimento", "teste de força de quadríceps", "sit-to-stand", "avaliação funcional da marcha"],
    conduta_terapeutica: "Educação, exercício terapêutico, fortalecimento de quadríceps e quadril, atividade aeróbica e manejo de peso quando aplicável.",
    exercicios_especificos: [
      { nome: "Sentar e levantar", descricao: "Transferência de sentado para em pé com altura de assento ajustada à capacidade." },
      { nome: "Extensão de joelho", descricao: "Extensão ativa ou resistida do joelho dentro de amplitude tolerada." },
      { nome: "Ponte pélvica", descricao: "Fortalecimento de extensores do quadril e controle do tronco." },
      { nome: "Step-up baixo", descricao: "Subida em degrau baixo com controle do alinhamento do membro inferior." }
    ],
    referencias_cientificas: ["Kolasinski SL et al. 2019 ACR/AF Guideline for Osteoarthritis.", "Bannuru RR et al. OARSI guidelines for knee osteoarthritis."]
  },
  {
    nome_patologia: "Dor Patelofemoral",
    regiao_corpo: "Joelho e Quadril",
    palavras_chave: ["condromalácia", "condromalacia", "dor patelofemoral", "dor anterior joelho", "patela"],
    sintomas: ["dor articular", "fraqueza muscular", "crepitação articular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["agachamento", "step-down", "avaliação de força de quadril", "teste funcional de corrida/salto quando indicado"],
    conduta_terapeutica: "Educação, ajuste de carga, fortalecimento combinado de quadril e joelho e progressão funcional individualizada.",
    exercicios_especificos: [
      { nome: "Agachamento parcial", descricao: "Agachamento em amplitude tolerada, priorizando controle do joelho e quadril." },
      { nome: "Abdução de quadril", descricao: "Fortalecimento dos abdutores em decúbito lateral ou em pé com resistência." },
      { nome: "Step-down controlado", descricao: "Descida de degrau baixo com controle do alinhamento do membro inferior." }
    ],
    referencias_cientificas: ["Willy RW et al. Patellofemoral Pain Clinical Practice Guideline. JOSPT.", "Crossley KM et al. 2016 Patellofemoral pain consensus statement. BJSM."]
  },
  {
    nome_patologia: "Osteoartrite de Quadril",
    regiao_corpo: "Joelho e Quadril",
    palavras_chave: ["artrose quadril", "osteoartrite quadril", "coxartrose", "dor inguinal", "quadril rígido"],
    sintomas: ["dor articular", "rigidez matinal", "fraqueza muscular", "perda de mobilidade", "fadiga muscular"],
    testes_ortopedicos_neurologicos: ["FABER", "FADIR", "amplitude de quadril", "teste de força de abdutores e extensores"],
    conduta_terapeutica: "Educação, exercício aeróbico e resistido, mobilidade conforme necessidade e adaptação de tarefas funcionais.",
    exercicios_especificos: [
      { nome: "Ponte pélvica", descricao: "Elevação da pelve com controle do quadril e tronco." },
      { nome: "Abdução de quadril", descricao: "Movimento de afastamento da perna contra gravidade ou resistência progressiva." },
      { nome: "Sit-to-stand", descricao: "Treino repetido de levantar e sentar com altura e apoio adaptados." }
    ],
    referencias_cientificas: ["Hochberg MC et al. 2012 ACR recommendations for hip and knee osteoarthritis.", "NICE. Osteoarthritis in over 16s: diagnosis and management."]
  },
  {
    nome_patologia: "AVC - Reabilitação Motora",
    regiao_corpo: "Neurologia",
    palavras_chave: ["avc", "acidente vascular cerebral", "derrame", "hemiparesia", "hemiplegia", "reabilitação neurológica"],
    sintomas: ["fraqueza muscular", "perda de mobilidade", "desequilíbrio/insegurança ao andar", "fadiga muscular", "alteração de sensibilidade"],
    testes_ortopedicos_neurologicos: ["Fugl-Meyer", "Berg Balance Scale", "Timed Up and Go", "10 Meter Walk Test", "avaliação de força e controle motor"],
    conduta_terapeutica: "Treino orientado à tarefa, prática repetitiva e significativa, treino de marcha e equilíbrio, fortalecimento e condicionamento conforme fase e tolerância.",
    exercicios_especificos: [
      { nome: "Sentar e levantar", descricao: "Treino repetitivo de transferência com foco em simetria, controle de tronco e segurança." },
      { nome: "Alcance funcional sentado", descricao: "Alcançar objetos em diferentes direções para trabalhar controle de tronco e membro superior." },
      { nome: "Transferência de peso em pé", descricao: "Deslocamentos controlados do peso para os lados e frente/trás com apoio adequado." },
      { nome: "Marcha com pistas externas", descricao: "Prática de passos utilizando marcações visuais ou auditivas conforme necessidade funcional." }
    ],
    referencias_cientificas: ["Winstein CJ et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke.", "Intercollegiate Stroke Working Party. National Clinical Guideline for Stroke."]
  },
  {
    nome_patologia: "Doença de Parkinson",
    regiao_corpo: "Neurologia",
    palavras_chave: ["parkinson", "doença de parkinson", "bradicinesia", "rigidez", "marcha parkinsoniana", "freezing"],
    sintomas: ["rigidez matinal", "fraqueza muscular", "desequilíbrio/insegurança ao andar", "fadiga muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["Timed Up and Go", "Mini-BESTest", "10 Meter Walk Test", "teste de dupla tarefa", "avaliação de freezing"],
    conduta_terapeutica: "Treino de amplitude, estratégias de cueing, treino de marcha e equilíbrio, fortalecimento e condicionamento aeróbico adaptados ao estágio da doença.",
    exercicios_especificos: [
      { nome: "Movimentos amplos tipo LSVT BIG", descricao: "Movimentos amplos e deliberados de membros e tronco, preferencialmente estruturados por profissional treinado." },
      { nome: "Marcha com pistas visuais", descricao: "Caminhada utilizando linhas ou alvos visuais para facilitar comprimento e ritmo dos passos." },
      { nome: "Transferências sentado-em-pé", descricao: "Repetição de transferência com preparação postural e pistas externas." }
    ],
    referencias_cientificas: ["Keus SHJ et al. European Physiotherapy Guideline for Parkinson's Disease.", "Tomlinson CL et al. Physiotherapy intervention in Parkinson's disease. Cochrane."]
  },
  {
    nome_patologia: "Esclerose Múltipla",
    regiao_corpo: "Neurologia",
    palavras_chave: ["esclerose múltipla", "esclerose multipla", "fadiga", "espasticidade", "neurologia"],
    sintomas: ["fadiga muscular", "fraqueza muscular", "alteração de sensibilidade", "desequilíbrio/insegurança ao andar", "perda de mobilidade", "baixa tolerância ao esforço"],
    testes_ortopedicos_neurologicos: ["Timed 25-Foot Walk", "6-Minute Walk Test", "Berg", "teste de fadiga", "avaliação de equilíbrio"],
    conduta_terapeutica: "Exercício aeróbico e resistido individualizado, manejo de fadiga, conservação de energia, equilíbrio e funcionalidade.",
    exercicios_especificos: [
      { nome: "Caminhada intervalada", descricao: "Blocos curtos de caminhada intercalados com pausas, ajustados à fadiga e tolerância." },
      { nome: "Fortalecimento de membros inferiores", descricao: "Exercícios resistidos para quadríceps, glúteos e panturrilha com controle de volume." },
      { nome: "Treino de equilíbrio com apoio", descricao: "Transferência de peso e desafios graduais de equilíbrio com suporte de segurança." }
    ],
    referencias_cientificas: ["Latimer-Cheung AE et al. Exercise guidelines for multiple sclerosis.", "National Multiple Sclerosis Society. Rehabilitation and exercise resources."]
  },
  {
    nome_patologia: "Lesão Medular - Reabilitação Funcional",
    regiao_corpo: "Neurologia",
    palavras_chave: ["lesão medular", "lesao medular", "paraplegia", "tetraplegia", "reabilitação medular"],
    sintomas: ["fraqueza muscular", "alteração de sensibilidade", "perda de mobilidade", "desequilíbrio/insegurança ao andar", "fadiga muscular"],
    testes_ortopedicos_neurologicos: ["ISNCSCI/ASIA", "teste de força segmentar", "avaliação de sensibilidade", "Wheelchair Skills Test quando indicado"],
    conduta_terapeutica: "Treino funcional e de transferências, fortalecimento da musculatura preservada, condicionamento e treino de mobilidade conforme nível neurológico e objetivos.",
    exercicios_especificos: [
      { nome: "Treino de transferência", descricao: "Prática de transferência cama-cadeira ou cadeira-superfície com técnica e equipamentos adequados." },
      { nome: "Fortalecimento de membros superiores", descricao: "Exercícios resistidos para musculatura necessária à propulsão e transferências." },
      { nome: "Treino de equilíbrio sentado", descricao: "Deslocamentos controlados do tronco e alcance funcional em sedestação." }
    ],
    referencias_cientificas: ["SCIRE Professional. Spinal Cord Injury Rehabilitation Evidence.", "Kirshblum SC et al. International Standards for Neurological Classification of Spinal Cord Injury."]
  },
  {
    nome_patologia: "Neuropatia Periférica Associada ao Diabetes",
    regiao_corpo: "Neurologia",
    palavras_chave: ["neuropatia diabética", "diabetes", "pé diabético", "parestesia", "sensibilidade plantar"],
    sintomas: ["parestesia", "dor neuropática", "fraqueza muscular", "alteração de sensibilidade", "desequilíbrio/insegurança ao andar"],
    testes_ortopedicos_neurologicos: ["monofilamento de 10 g", "sensibilidade vibratória", "reflexo aquileu", "avaliação da pele e pés", "teste de equilíbrio"],
    conduta_terapeutica: "Educação para autocuidado dos pés, exercício individualizado, treino de equilíbrio e força e monitoramento de tolerância ao esforço e integridade cutânea.",
    exercicios_especificos: [
      { nome: "Mobilidade ativa de tornozelo", descricao: "Flexão dorsal e plantar e círculos de tornozelo em amplitude confortável." },
      { nome: "Elevação de panturrilha com apoio", descricao: "Fortalecimento progressivo da panturrilha utilizando apoio para segurança." },
      { nome: "Equilíbrio com base ampla", descricao: "Treino de estabilidade em posição segura, progredindo somente quando necessário e tolerado." }
    ],
    referencias_cientificas: ["American Diabetes Association. Standards of Care in Diabetes.", "IWGDF. Guidelines on prevention and management of diabetic foot disease."]
  },
  {
    nome_patologia: "Síndrome Dolorosa do Manguito Rotador",
    regiao_corpo: "Ombro e Cotovelo",
    palavras_chave: ["manguito rotador", "tendinopatia ombro", "supraespinal", "dor ao elevar braço", "ombro"],
    sintomas: ["dor articular", "fraqueza muscular", "perda de mobilidade"],
    testes_ortopedicos_neurologicos: ["Jobe/empty can", "full can", "external rotation resistance", "drop arm quando indicado"],
    conduta_terapeutica: "Exercício progressivo do manguito e musculatura escapular, manejo de carga e recuperação gradual da função.",
    exercicios_especificos: [
      { nome: "Rotação externa com elástico", descricao: "Rotação externa contra resistência leve, mantendo controle do úmero." },
      { nome: "Elevação assistida", descricao: "Elevação do braço com auxílio da outra mão ou bastão, respeitando irritabilidade." },
      { nome: "Remada com elástico", descricao: "Fortalecimento dos músculos escapulares com movimento controlado." }
    ],
    referencias_cientificas: ["Littlewood C et al. Rotator cuff related shoulder pain and exercise therapy.", "AAOS. Management of Rotator Cuff Injuries."]
  },
  {
    nome_patologia: "Osteoartrite de Joelho com Limitação Funcional",
    regiao_corpo: "Joelho e Quadril",
    palavras_chave: ["gonartrose", "artrose joelho", "dor subir escada", "rigidez joelho", "fraqueza quadriceps"],
    sintomas: ["dor articular", "rigidez matinal", "fraqueza muscular", "crepitação articular", "baixa tolerância ao esforço"],
    testes_ortopedicos_neurologicos: ["30-second chair stand", "Timed Up and Go", "força de quadríceps", "amplitude de flexão/extensão"],
    conduta_terapeutica: "Programa progressivo de força e capacidade aeróbica, treinamento funcional e educação para autogerenciamento.",
    exercicios_especificos: [
      { nome: "Extensão de joelho sentado", descricao: "Extensão do joelho contra gravidade ou resistência leve, com controle." },
      { nome: "Miniagachamento apoiado", descricao: "Flexão parcial dos joelhos usando apoio, priorizando controle e segurança." },
      { nome: "Caminhada intervalada", descricao: "Períodos curtos de caminhada com pausas e progressão de volume." }
    ],
    referencias_cientificas: ["NICE. Osteoarthritis in over 16s: diagnosis and management.", "Bannuru RR et al. OARSI guidelines for non-surgical management of knee osteoarthritis."]
  }
];

window.FISIO90S_DATABASE = DATABASE;
