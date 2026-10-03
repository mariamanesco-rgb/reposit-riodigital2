/*
 * FISIO90S — BANCO CLÍNICO ABRANGENTE
 * Material de apoio profissional/educacional. Não substitui avaliação clínica,
 * diagnóstico, protocolos locais ou julgamento profissional.
 *
 * Estrutura obrigatória por condição:
 * nome_patologia, regiao_corpo, palavras_chave, sintomas,
 * testes_ortopedicos_neurologicos, conduta_terapeutica, referencias_cientificas
 */
const CLINICAL_DATABASE = [
  {
    "nome_patologia": "Síndrome do Túnel do Carpo",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "tunel do carpo",
      "carpal tunnel",
      "compressao do nervo mediano",
      "mao dormente",
      "punho",
      "formigamento",
      "parestesia",
      "dedos indicador medio polegar",
      "sindrome do canal carpal"
    ],
    "sintomas": [
      "parestesia",
      "dormencia",
      "formigamento",
      "dor noturna",
      "fraqueza de preensao",
      "dificuldade para pinça",
      "alteracao sensitiva"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de Phalen e Phalen reverso como parte do conjunto de exame.",
      "Teste de Tinel no túnel do carpo como achado complementar.",
      "Testes de força e sensibilidade do território do nervo mediano.",
      "Questionários funcionais e avaliação de destreza/preensão quando pertinentes."
    ],
    "conduta_terapeutica": [
      "Educação sobre posições e atividades que agravam sintomas.",
      "Órtese noturna em posição neutra do punho pode ser considerada em apresentações apropriadas.",
      "Exercícios de mobilidade e deslizamento neural/tendíneo quando indicados e bem tolerados.",
      "Fortalecimento progressivo e reeducação funcional conforme déficit identificado.",
      "Encaminhar para avaliação médica quando houver déficit motor importante, atrofia tenar progressiva ou evolução desfavorável."
    ],
    "referencias_cientificas": [
      "APTA Orthopedics/Hand & Upper Extremity. Hand Pain and Sensory Deficits: Carpal Tunnel Syndrome Clinical Practice Guidelines (2026).",
      "American Academy of Orthopaedic Surgeons. Management of Carpal Tunnel Syndrome Evidence-Based Clinical Practice Guideline (2024)."
    ]
  },
  {
    "nome_patologia": "Tenossinovite de De Quervain",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "de quervain",
      "tenossinovite",
      "primeiro compartimento extensor",
      "abdutor longo do polegar",
      "extensor curto do polegar",
      "dor radial do punho",
      "polegar",
      "gestante",
      "puerperio"
    ],
    "sintomas": [
      "dor radial do punho",
      "dor ao mover o polegar",
      "sensibilidade na estiloide radial",
      "dor ao pegar objetos",
      "redução de força de pinça"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de Finkelstein/variação de Eichhoff, interpretado no contexto clínico.",
      "Teste de resistência à abdução e extensão do polegar.",
      "Palpação e avaliação de movimento do primeiro compartimento extensor."
    ],
    "conduta_terapeutica": [
      "Redução temporária de atividades provocativas e educação sobre carga.",
      "Órtese que estabilize polegar e punho pode ser usada em fase irritável.",
      "Exercícios progressivos de mobilidade e força após redução da irritabilidade.",
      "Retorno gradual às atividades de pinça e preensão, monitorando resposta."
    ],
    "referencias_cientificas": [
      "Literatura contemporânea de cirurgia da mão e terapia da mão sobre de Quervain; decisão compartilhada com equipe médica quando necessário.",
      "APTA Clinical Practice Guidelines Library como fonte de princípios de exame e intervenção musculoesquelética."
    ]
  },
  {
    "nome_patologia": "Dedo em Gatilho",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "dedo em gatilho",
      "trigger finger",
      "tenossinovite estenosante",
      "polia A1",
      "travamento do dedo",
      "estalo",
      "rigidez do dedo",
      "flexor dos dedos"
    ],
    "sintomas": [
      "travamento",
      "estalo",
      "dor palmar",
      "rigidez",
      "sensibilidade na polia A1",
      "dificuldade para abrir o dedo"
    ],
    "testes_ortopedicos_neurologicos": [
      "Inspeção e palpação da polia A1.",
      "Movimentos ativos de flexão e extensão para reproduzir o travamento.",
      "Avaliação de amplitude, força e impacto funcional."
    ],
    "conduta_terapeutica": [
      "Educação e modificação de tarefas repetitivas quando relevantes.",
      "Órtese funcional em posições selecionadas pode ser considerada.",
      "Mobilidade ativa sem provocar bloqueio doloroso e fortalecimento gradual após redução dos sintomas.",
      "Encaminhamento para avaliação médica quando houver travamento persistente, déficit funcional importante ou falha do tratamento conservador."
    ],
    "referencias_cientificas": [
      "Literatura de cirurgia da mão/terapia da mão sobre trigger finger e tratamento conservador.",
      "APTA Hand & Upper Extremity resources."
    ]
  },
  {
    "nome_patologia": "Osteoartrite da Base do Polegar",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "rizartrose",
      "artrose trapézio metacarpiana",
      "CMC do polegar",
      "base do polegar",
      "dor na base do polegar",
      "pinça",
      "preensao"
    ],
    "sintomas": [
      "dor na base do polegar",
      "rigidez",
      "fraqueza de pinça",
      "dor ao abrir potes",
      "dor ao escrever",
      "deformidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de compressão/axial da CMC do polegar com cautela.",
      "Avaliação de amplitude, alinhamento e estabilidade.",
      "Medição de força de pinça e preensão quando possível.",
      "Avaliação funcional de tarefas de vida diária."
    ],
    "conduta_terapeutica": [
      "Educação sobre conservação articular e distribuição de carga.",
      "Órtese para estabilização da CMC em atividades pode ser considerada.",
      "Fortalecimento progressivo de musculatura do polegar e mão conforme tolerância.",
      "Treino funcional e adaptações de tarefas."
    ],
    "referencias_cientificas": [
      "Literatura da American Society for Surgery of the Hand e terapia da mão sobre osteoartrite da CMC.",
      "NICE. Osteoarthritis in over 16s: diagnosis and management (NG226, 2022)."
    ]
  },
  {
    "nome_patologia": "Fratura Distal do Rádio — Reabilitação",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "fratura de radio distal",
      "fratura de colles",
      "punho quebrado",
      "pos fratura",
      "rigidez do punho",
      "edema de mao",
      "reabilitacao do punho"
    ],
    "sintomas": [
      "dor",
      "edema",
      "rigidez",
      "perda de força",
      "redução de amplitude",
      "dificuldade funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Avaliação de edema, sensibilidade e função da mão.",
      "Amplitude de movimento de punho, dedos e antebraço conforme liberação.",
      "Força de preensão quando seguro e clinicamente apropriado.",
      "Triagem de sinais compatíveis com complicações, incluindo alterações neurovasculares e síndrome dolorosa regional complexa."
    ],
    "conduta_terapeutica": [
      "Respeitar fase de consolidação e restrições da equipe responsável.",
      "Mobilidade progressiva de dedos, punho e antebraço conforme autorização.",
      "Controle de edema, treino de preensão e fortalecimento progressivo.",
      "Treino funcional e retorno gradual às atividades."
    ],
    "referencias_cientificas": [
      "American Academy of Orthopaedic Surgeons. Appropriate Use Criteria/clinical guidance for distal radius fractures.",
      "Literatura de reabilitação de fraturas do punho e terapia da mão."
    ]
  },
  {
    "nome_patologia": "Fascite Plantar / Dor Plantar do Calcanhar",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "fascite plantar",
      "fasciite plantar",
      "dor plantar do calcanhar",
      "heel pain",
      "calcanhar",
      "dor ao primeiro passo",
      "fascia plantar",
      "pe"
    ],
    "sintomas": [
      "dor no calcanhar",
      "dor no primeiro passo",
      "dor após repouso",
      "sensibilidade plantar",
      "dor ao caminhar",
      "rigidez do pe"
    ],
    "testes_ortopedicos_neurologicos": [
      "Palpação da inserção proximal da fáscia plantar.",
      "Teste de Windlass/elevação do hálux, em conjunto com história e exame.",
      "Avaliação de amplitude de dorsiflexão e mobilidade do tornozelo.",
      "Avaliação de força e função de pé e tornozelo."
    ],
    "conduta_terapeutica": [
      "Exercícios específicos para musculatura do pé e panturrilha podem ser utilizados.",
      "Alongamento de flexores plantares quando indicado.",
      "Fortalecimento progressivo e recondicionamento de carga.",
      "Educação sobre manejo de carga; terapias auxiliares podem ser utilizadas conforme resposta clínica."
    ],
    "referencias_cientificas": [
      "Koc TA Jr et al. Heel Pain – Plantar Fasciitis: Revision 2023. J Orthop Sports Phys Ther. 2023;53(12):CPG1-CPG39. doi:10.2519/jospt.2023.0303.",
      "APTA Orthopedics. Heel Pain – Plantar Fasciitis: Revision 2023."
    ]
  },
  {
    "nome_patologia": "Entorse Lateral do Tornozelo",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "entorse de tornozelo",
      "torcao do tornozelo",
      "ligamento talofibular anterior",
      "ltfa",
      "ligamento calcaneofibular",
      "instabilidade cronica",
      "tornozelo"
    ],
    "sintomas": [
      "dor",
      "edema",
      "equimose",
      "instabilidade",
      "dificuldade para caminhar",
      "perda de dorsiflexao"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de gaveta anterior do tornozelo.",
      "Talar tilt/inclinação talar quando indicado.",
      "Regras de Ottawa para triagem de necessidade de radiografia quando aplicáveis.",
      "Testes funcionais de apoio unipodal, equilíbrio e salto conforme fase."
    ],
    "conduta_terapeutica": [
      "Carga progressiva precoce de acordo com gravidade e segurança.",
      "Exercícios de amplitude de movimento e fortalecimento de panturrilha e fibulares.",
      "Treino de equilíbrio/propriocepção e tarefas específicas.",
      "Educação e progressão para retorno às atividades/esporte."
    ],
    "referencias_cientificas": [
      "Martin RL et al. Ankle Stability and Movement Coordination Impairments: Clinical Practice Guidelines. J Orthop Sports Phys Ther.",
      "APTA Orthopedics. Clinical Practice Guidelines and ankle sprain resources."
    ]
  },
  {
    "nome_patologia": "Tendinopatia de Aquiles",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "tendinopatia aquiles",
      "tendinite de aquiles",
      "dor no tendao de aquiles",
      "calcanhar posterior",
      "tendao calcaneo",
      "corredor"
    ],
    "sintomas": [
      "dor no tendão",
      "rigidez matinal",
      "dor com corrida",
      "dor em saltos",
      "fraqueza de panturrilha",
      "espessamento do tendão"
    ],
    "testes_ortopedicos_neurologicos": [
      "Palpação e localização de dor no tendão.",
      "Elevação de calcanhar bilateral e unilateral conforme capacidade.",
      "Avaliação de dorsiflexão e capacidade de carga da panturrilha.",
      "Teste de Thompson apenas quando houver suspeita de ruptura aguda, com encaminhamento adequado."
    ],
    "conduta_terapeutica": [
      "Gerenciamento de carga e redução temporária de picos de treino.",
      "Fortalecimento progressivo da unidade panturrilha-tríceps sural.",
      "Progressão de exercícios de resistência para tarefas rápidas/pliométricas quando apropriado.",
      "Retorno graduado à corrida, saltos ou esporte."
    ],
    "referencias_cientificas": [
      "Silbernagel KG et al. Rehabilitation literature for Achilles tendinopathy.",
      "JOSPT/APTA Orthopedics resources on tendinopathy and lower-extremity loading."
    ]
  },
  {
    "nome_patologia": "Tendinopatia do Tibial Posterior",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "tibial posterior",
      "tendinopatia do tibial posterior",
      "disfuncao do tibial posterior",
      "pe plano adquirido",
      "arco medial",
      "dor medial do tornozelo"
    ],
    "sintomas": [
      "dor medial",
      "fadiga da panturrilha",
      "queda do arco",
      "instabilidade",
      "dificuldade para subir na ponta do pe"
    ],
    "testes_ortopedicos_neurologicos": [
      "Single-leg heel raise quando possível.",
      "Avaliação do arco medial e alinhamento do retropé.",
      "Força de inversão e flexão plantar.",
      "Avaliação da marcha e da capacidade funcional."
    ],
    "conduta_terapeutica": [
      "Educação e manejo de carga.",
      "Fortalecimento progressivo do tibial posterior e musculatura do pé.",
      "Treino de equilíbrio e função de membro inferior.",
      "Órteses/suportes podem ser considerados em conjunto com avaliação individual."
    ],
    "referencias_cientificas": [
      "Literatura de pé e tornozelo sobre progressive loading na disfunção do tibial posterior.",
      "APTA Orthopedics clinical practice resources for foot/ankle disorders."
    ]
  },
  {
    "nome_patologia": "Tendinopatia dos Fibulares",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "fibular",
      "peroneal",
      "tendinopatia peroneal",
      "tendao fibular",
      "dor lateral do tornozelo",
      "instabilidade lateral"
    ],
    "sintomas": [
      "dor lateral",
      "sensibilidade atrás do maléolo lateral",
      "fraqueza de eversão",
      "dor com caminhada",
      "instabilidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Resistência à eversão e flexão plantar.",
      "Palpação do trajeto dos tendões fibulares.",
      "Avaliação de estabilidade lateral e controle unipodal.",
      "Observação de marcha e tarefas esportivas."
    ],
    "conduta_terapeutica": [
      "Reduzir picos de carga e movimentos que reproduzem sintomas.",
      "Fortalecimento progressivo dos fibulares e cadeia lateral.",
      "Treino de equilíbrio/propriocepção.",
      "Progressão para corrida, mudanças de direção e esporte quando seguro."
    ],
    "referencias_cientificas": [
      "Literatura de reabilitação de tendinopatias peroneais e tornozelo.",
      "JOSPT/APTA ankle and foot clinical resources."
    ]
  },
  {
    "nome_patologia": "Esporão do Calcâneo",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "esporao de calcaneo",
      "esporão calcâneo",
      "osteofito do calcanhar",
      "dor no calcanhar",
      "calcaneo",
      "heel spur"
    ],
    "sintomas": [
      "dor no calcanhar",
      "dor plantar",
      "dor ao primeiro passo",
      "sensibilidade local"
    ],
    "testes_ortopedicos_neurologicos": [
      "História e exame para diferenciar dor plantar do calcanhar de outras causas.",
      "Palpação e avaliação da fáscia plantar.",
      "Avaliação de mobilidade do tornozelo e carga do pé.",
      "Imagem apenas quando indicada para investigação complementar, não como único critério de diagnóstico funcional."
    ],
    "conduta_terapeutica": [
      "Tratar o quadro clínico associado à dor e à tolerância de carga.",
      "Exercício para panturrilha e musculatura intrínseca do pé quando apropriado.",
      "Educação e progressão de atividade.",
      "Evitar basear a reabilitação exclusivamente na presença radiográfica do esporão."
    ],
    "referencias_cientificas": [
      "Koc TA Jr et al. Heel Pain – Plantar Fasciitis: Revision 2023. JOSPT.",
      "NICE resources on musculoskeletal pain and differential diagnosis."
    ]
  },
  {
    "nome_patologia": "Hálux Valgo",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "halux valgo",
      "joanete",
      "bunion",
      "desvio do halux",
      "dedao do pe",
      "antepe"
    ],
    "sintomas": [
      "dor na primeira articulacao metatarsofalangica",
      "deformidade",
      "calosidade",
      "dor com calçado",
      "limitação de marcha"
    ],
    "testes_ortopedicos_neurologicos": [
      "Avaliação do alinhamento e mobilidade da primeira metatarsofalângica.",
      "Avaliação de força e controle do pé.",
      "Inspeção de pele, calosidades e adaptação ao calçado.",
      "Avaliação funcional durante marcha."
    ],
    "conduta_terapeutica": [
      "Educação sobre calçados e manejo de pressão.",
      "Exercícios de controle do hálux e musculatura intrínseca quando indicados.",
      "Mobilidade e fortalecimento do pé e tornozelo.",
      "Encaminhar para avaliação especializada quando dor/deformidade comprometer função apesar do cuidado conservador."
    ],
    "referencias_cientificas": [
      "Literatura contemporânea de pé e tornozelo sobre manejo conservador do hálux valgo.",
      "APTA Orthopedics foot and ankle resources."
    ]
  },
  {
    "nome_patologia": "Hálux Rígido",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "halux rigido",
      "artrose metatarsofalangica",
      "dedao rigido",
      "limitacao de dorsiflexao do halux",
      "primeira mtp"
    ],
    "sintomas": [
      "dor no dedao",
      "rigidez",
      "limitação de dorsiflexão",
      "dor na propulsão",
      "calosidade dorsal"
    ],
    "testes_ortopedicos_neurologicos": [
      "Medição de dorsiflexão da primeira MTF.",
      "Avaliação de dor e mobilidade acessória quando pertinente.",
      "Análise da marcha e da fase de propulsão.",
      "Avaliação do calçado e das limitações funcionais."
    ],
    "conduta_terapeutica": [
      "Educação e adaptação de carga/calçado.",
      "Mobilidade e fortalecimento conforme irritabilidade.",
      "Treino de marcha e função.",
      "Encaminhar quando houver dor persistente e limitação estrutural significativa."
    ],
    "referencias_cientificas": [
      "Literatura de osteoartrite e pé/tornozelo para hallux rigidus.",
      "NICE. Osteoarthritis NG226."
    ]
  },
  {
    "nome_patologia": "Metatarsalgia",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "metatarsalgia",
      "dor no antepe",
      "cabeca dos metatarsos",
      "queimacao no antepe",
      "dor plantar do antepe"
    ],
    "sintomas": [
      "dor plantar",
      "queimação",
      "dor ao caminhar",
      "dor com corrida",
      "sensibilidade no antepé"
    ],
    "testes_ortopedicos_neurologicos": [
      "Palpação das cabeças metatarsais.",
      "Avaliação de mobilidade e alinhamento do antepé.",
      "Testes de carga durante marcha e apoio.",
      "Triagem de irritação neural e outras causas de dor plantar quando indicado."
    ],
    "conduta_terapeutica": [
      "Manejo de carga e modificação de atividade.",
      "Fortalecimento do pé e panturrilha.",
      "Educação sobre calçados e distribuição de pressão.",
      "Progressão para atividades funcionais conforme tolerância."
    ],
    "referencias_cientificas": [
      "Literatura de pé e tornozelo sobre metatarsalgia e dor do antepé.",
      "Recursos clínicos APTA Orthopedics."
    ]
  },
  {
    "nome_patologia": "Tendinopatia do Manguito Rotador",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "manguito rotador",
      "tendinopatia do manguito",
      "rotator cuff",
      "supraespinal",
      "infraespinal",
      "ombro doloroso",
      "dor ao elevar o braco"
    ],
    "sintomas": [
      "dor no ombro",
      "dor ao elevar o braço",
      "fraqueza",
      "dor noturna",
      "limitação funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de força resistida para rotação externa e interna.",
      "Testes de elevação e abdução conforme hipótese clínica.",
      "Avaliação cervical quando sintomas referidos ou parestesias estiverem presentes.",
      "Medidas funcionais de dor, amplitude e desempenho."
    ],
    "conduta_terapeutica": [
      "Educação e manejo de carga.",
      "Exercício progressivo para manguito e musculatura escapular.",
      "Isométricos ou isotônicos de acordo com irritabilidade e capacidade.",
      "Progressão para tarefas acima da cabeça e esporte/trabalho conforme demanda."
    ],
    "referencias_cientificas": [
      "Desmeules F et al. Clinical Practice Guideline: Rotator Cuff Tendinopathy Diagnosis, Non-surgical Medical Care and Rehabilitation (2025).",
      "APTA Orthopedics. Rotator Cuff Tendinopathy CPG (2025)."
    ]
  },
  {
    "nome_patologia": "Lesão do Manguito Rotador",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "ruptura do manguito",
      "rotator cuff tear",
      "lesao de supraespinal",
      "ruptura parcial",
      "ruptura completa",
      "fraqueza do ombro"
    ],
    "sintomas": [
      "dor",
      "fraqueza",
      "perda de movimento",
      "dor noturna",
      "dificuldade para elevar braço"
    ],
    "testes_ortopedicos_neurologicos": [
      "Avaliação de força e amplitude ativa/passiva.",
      "Testes clínicos combinados conforme suspeita de ruptura.",
      "Teste de lag sign quando indicado.",
      "Avaliação funcional e, quando necessário, correlação com imagem."
    ],
    "conduta_terapeutica": [
      "Em rupturas selecionadas, tratamento não cirúrgico pode incluir educação, controle de sintomas e fortalecimento progressivo.",
      "Após reparo cirúrgico, respeitar protocolo e progressão tecidual.",
      "Treino funcional e retorno gradual às atividades.",
      "Reavaliar perda importante de força ou piora funcional."
    ],
    "referencias_cientificas": [
      "American Academy of Orthopaedic Surgeons. Management of Rotator Cuff Injuries Clinical Practice Guideline (2025).",
      "APTA/AAOS resources for rotator cuff tears."
    ]
  },
  {
    "nome_patologia": "Dor Relacionada ao Manguito / Dor Subacromial",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "dor subacromial",
      "síndrome do impacto",
      "impingement",
      "subacromial pain syndrome",
      "ombro",
      "arco doloroso"
    ],
    "sintomas": [
      "dor ao elevar braço",
      "dor lateral do ombro",
      "dor em atividades acima da cabeça",
      "sensibilidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Arco doloroso como parte do exame.",
      "Hawkins-Kennedy e Neer como testes provocativos dentro de um conjunto clínico, não isoladamente.",
      "Avaliação de força e movimento escapuloumeral.",
      "Triagem cervical e neurológica quando indicada."
    ],
    "conduta_terapeutica": [
      "Educação e manejo de tarefas acima da cabeça.",
      "Fortalecimento progressivo do manguito e cintura escapular.",
      "Exercícios de amplitude e controle motor.",
      "Progressão de carga conforme tolerância e objetivo funcional."
    ],
    "referencias_cientificas": [
      "APTA Orthopedics/Desmeules F et al. Rotator Cuff Tendinopathy CPG (2025).",
      "JOSPT clinical practice literature on shoulder pain and mobility impairments."
    ]
  },
  {
    "nome_patologia": "Capsulite Adesiva",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "capsulite adesiva",
      "ombro congelado",
      "frozen shoulder",
      "rigidez glenoumeral",
      "perda de rotacao externa"
    ],
    "sintomas": [
      "rigidez",
      "dor",
      "perda de rotação externa",
      "dificuldade para vestir",
      "dificuldade para alcançar"
    ],
    "testes_ortopedicos_neurologicos": [
      "Comparação de amplitude ativa e passiva.",
      "Padrão de perda capsular, com destaque para rotação externa.",
      "Avaliação funcional e impacto em atividades de vida diária.",
      "Triagem de diabetes e outras condições associadas no contexto médico."
    ],
    "conduta_terapeutica": [
      "Educação sobre evolução e manejo de sintomas.",
      "Mobilidade ativa e exercícios graduados pela irritabilidade.",
      "Fortalecimento progressivo conforme movimento e tolerância melhorarem.",
      "Intervenções médicas podem ser consideradas conforme fase e resposta."
    ],
    "referencias_cientificas": [
      "Literatura de APTA/JOSPT sobre shoulder pain with mobility deficits.",
      "NICE/AAOS resources on adhesive capsulitis and shoulder conditions."
    ]
  },
  {
    "nome_patologia": "Osteoartrite Glenoumeral",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "artrose do ombro",
      "osteoartrite glenoumeral",
      "glenohumeral oa",
      "desgaste do ombro",
      "dor do ombro",
      "rigidez"
    ],
    "sintomas": [
      "dor articular",
      "rigidez",
      "crepitação",
      "perda de amplitude",
      "fraqueza funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Amplitude ativa e passiva.",
      "Avaliação de força e função.",
      "Testes de desempenho em tarefas relevantes.",
      "Imagem quando houver indicação clínica de confirmação ou diferenciação."
    ],
    "conduta_terapeutica": [
      "Exercício para mobilidade e força conforme tolerância.",
      "Treino funcional e estratégias de conservação de energia/carga.",
      "Educação sobre autogerenciamento.",
      "Encaminhamento médico quando sintomas persistirem com grande perda funcional ou quando houver indicação de tratamento adicional."
    ],
    "referencias_cientificas": [
      "NICE. Osteoarthritis in over 16s: diagnosis and management (NG226, 2022).",
      "APTA clinical practice guideline library for shoulder and osteoarthritis."
    ]
  },
  {
    "nome_patologia": "Epicondilalgia Lateral",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "epicondilite lateral",
      "tennis elbow",
      "epicondilalgia",
      "dor lateral do cotovelo",
      "extensores do punho",
      "cotovelo"
    ],
    "sintomas": [
      "dor lateral",
      "dor à preensão",
      "dor ao levantar objetos",
      "fraqueza de punho",
      "sensibilidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Resistência à extensão do punho/dedos.",
      "Alongamento dos extensores como teste provocativo complementar.",
      "Teste de força de preensão.",
      "Avaliação cervical e neural quando sintomas forem atípicos ou persistentes."
    ],
    "conduta_terapeutica": [
      "Educação sobre manejo de carga de preensão e extensão do punho.",
      "Exercício progressivo isométrico, concêntrico e excêntrico/consolidado conforme tolerância.",
      "Fortalecimento de mão, punho, antebraço e ombro quando necessário.",
      "Progressão para demandas ocupacionais/esportivas."
    ],
    "referencias_cientificas": [
      "Lucado AM et al. Lateral Elbow Pain and Muscle Function Impairments Clinical Practice Guideline (2022).",
      "APTA Hand & Upper Extremity / Orthopedics CPG (2022)."
    ]
  },
  {
    "nome_patologia": "Epicondilalgia Medial",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "epicondilite medial",
      "golfer's elbow",
      "dor medial do cotovelo",
      "flexores do punho",
      "tendinopatia medial"
    ],
    "sintomas": [
      "dor medial",
      "dor à preensão",
      "dor na flexão do punho",
      "fraqueza",
      "sensibilidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Resistência à flexão do punho e pronação.",
      "Palpação da origem dos flexores.",
      "Avaliação de força de preensão.",
      "Triagem do nervo ulnar quando parestesias no 4º/5º dedos estiverem presentes."
    ],
    "conduta_terapeutica": [
      "Manejo de carga e modificação de atividades.",
      "Fortalecimento progressivo dos flexores/pronadores.",
      "Treino de preensão e cadeia cinética.",
      "Retorno gradual à demanda ocupacional/esportiva."
    ],
    "referencias_cientificas": [
      "Literatura de terapia da mão e tendinopatia do cotovelo.",
      "APTA Orthopedics/Hand & Upper Extremity clinical resources."
    ]
  },
  {
    "nome_patologia": "Instabilidade do Ombro",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "instabilidade glenoumeral",
      "luxacao anterior",
      "subluxacao",
      "instabilidade de ombro",
      "apreensao",
      "labrum"
    ],
    "sintomas": [
      "sensação de deslocamento",
      "apreensão",
      "dor",
      "instabilidade",
      "fraqueza"
    ],
    "testes_ortopedicos_neurologicos": [
      "Teste de apreensão anterior e relocation quando indicado.",
      "Teste de sulco para laxidade inferior.",
      "Avaliação de controle escapular e força do manguito.",
      "Triagem neurovascular após eventos traumáticos."
    ],
    "conduta_terapeutica": [
      "Educação e manejo de posições desencadeadoras.",
      "Fortalecimento progressivo do manguito e estabilizadores da escápula.",
      "Treino proprioceptivo e controle em amplitudes graduadas.",
      "Retorno gradual a esporte/atividade; encaminhamento após luxações recorrentes ou lesões estruturais suspeitas."
    ],
    "referencias_cientificas": [
      "Literatura APTA/JOSPT sobre instabilidade do ombro e reabilitação.",
      "AAOS clinical resources on shoulder instability."
    ]
  },
  {
    "nome_patologia": "Cervicalgia Mecânica / Dor Cervical",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "cervicalgia",
      "dor cervical",
      "dor no pescoco",
      "neck pain",
      "rigidez cervical",
      "coluna cervical"
    ],
    "sintomas": [
      "dor cervical",
      "rigidez",
      "dor ao movimento",
      "cefaleia associada",
      "limitação funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Amplitude de movimento cervical ativa.",
      "Exame neurológico quando houver irradiação, parestesia ou fraqueza.",
      "Testes de flexão-rotação e cefaleia cervicogênica quando indicados.",
      "Avaliação de função e deficiência."
    ],
    "conduta_terapeutica": [
      "Educação, atividade e autogerenciamento.",
      "Exercícios cervicais e escapulares progressivos.",
      "Terapia manual pode ser utilizada como adjuvante quando indicada, combinada a exercício.",
      "Retorno gradual a trabalho e atividade física."
    ],
    "referencias_cientificas": [
      "Blanpied PR et al. Neck Pain: Revision 2017 Clinical Practice Guidelines. J Orthop Sports Phys Ther.",
      "APTA Orthopedics clinical summaries on neck pain."
    ]
  },
  {
    "nome_patologia": "Radiculopatia Cervical",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "radiculopatia cervical",
      "cervicobraquialgia",
      "dor irradiada para braço",
      "formigamento no braço",
      "nervo cervical",
      "ciatica do braco"
    ],
    "sintomas": [
      "dor irradiada",
      "parestesia",
      "fraqueza",
      "alteração de reflexos",
      "dor cervical"
    ],
    "testes_ortopedicos_neurologicos": [
      "Spurling como parte de conjunto de testes.",
      "Teste de distração cervical.",
      "Upper Limb Tension Test (ULTT) quando indicado.",
      "Exame neurológico de força, sensibilidade e reflexos."
    ],
    "conduta_terapeutica": [
      "Educação e manejo de atividade.",
      "Exercício direcionado conforme resposta e déficit.",
      "Mobilidade e fortalecimento cervicoescapular quando indicados.",
      "Monitorar sinais neurológicos progressivos e encaminhar quando presentes."
    ],
    "referencias_cientificas": [
      "NICE. Suspected neurological conditions: cervical or lumbar radiculopathy guidance.",
      "Blanpied PR et al. Neck Pain CPG."
    ]
  },
  {
    "nome_patologia": "Dor Torácica / Síndrome da Coluna Torácica",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "dor toracica musculoesqueletica",
      "dor dorsal",
      "coluna toracica",
      "rigidez toracica",
      "costas altas",
      "thoracic spine"
    ],
    "sintomas": [
      "dor dorsal",
      "rigidez",
      "dor com movimento",
      "restrição torácica"
    ],
    "testes_ortopedicos_neurologicos": [
      "Movimentos ativos torácicos e cervicais.",
      "Avaliação respiratória quando sintomas tiverem relação com movimento respiratório.",
      "Palpação e testes de mobilidade como complemento.",
      "Triagem de dor não musculoesquelética."
    ],
    "conduta_terapeutica": [
      "Exercícios de mobilidade torácica.",
      "Fortalecimento escapular e tronco.",
      "Treino postural funcional sem buscar uma postura rígida.",
      "Educação e retorno gradual às atividades."
    ],
    "referencias_cientificas": [
      "Literatura APTA/JOSPT sobre avaliação musculoesquelética da coluna.",
      "Guidelines gerais de triagem de dor musculoesquelética."
    ]
  },
  {
    "nome_patologia": "Lombalgia Mecânica",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "lombalgia",
      "dor lombar",
      "dor nas costas",
      "low back pain",
      "coluna lombar",
      "lombalgia inespecifica"
    ],
    "sintomas": [
      "dor lombar",
      "rigidez",
      "limitação funcional",
      "dor ao levantar",
      "intolerância à carga"
    ],
    "testes_ortopedicos_neurologicos": [
      "Anamnese e triagem de red flags.",
      "Avaliação de movimento e capacidade funcional.",
      "Exame neurológico quando houver sintomas irradiados.",
      "Ferramentas de estratificação de risco, como STarT Back, podem apoiar a tomada de decisão."
    ],
    "conduta_terapeutica": [
      "Educação e manutenção/retomada de atividades conforme tolerância.",
      "Exercício terapêutico individualizado.",
      "Fortalecimento, resistência, mobilidade e condicionamento de acordo com necessidades.",
      "Abordagem biopsicossocial quando fatores psicossociais estiverem contribuindo."
    ],
    "referencias_cientificas": [
      "WHO. Package of Interventions for Rehabilitation: Module 2 – Musculoskeletal Conditions (2023).",
      "NICE NG59. Low back pain and sciatica in over 16s: assessment and management (atualização 2020)."
    ]
  },
  {
    "nome_patologia": "Ciatalgia / Radiculopatia Lombar",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "ciatica",
      "ciatalgia",
      "dor irradiada para perna",
      "radiculopatia lombar",
      "dor no nervo ciatico",
      "formigamento na perna",
      "choque na perna"
    ],
    "sintomas": [
      "dor irradiada",
      "parestesia",
      "dormencia",
      "fraqueza",
      "dor lombar",
      "limitação funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Straight Leg Raise/Lasègue.",
      "Slump test quando apropriado.",
      "Exame de força, sensibilidade e reflexos.",
      "Triagem de alterações esfincterianas, anestesia em sela e déficits progressivos."
    ],
    "conduta_terapeutica": [
      "Educação e manutenção de atividade na medida tolerável.",
      "Exercício direcionado pela resposta clínica.",
      "Treino de força e capacidade funcional.",
      "Encaminhamento quando houver déficit neurológico progressivo ou sinais de emergência."
    ],
    "referencias_cientificas": [
      "NICE NG59. Low back pain and sciatica in over 16s.",
      "NICE NG127. Suspected neurological conditions: cervical or lumbar radiculopathy."
    ]
  },
  {
    "nome_patologia": "Hérnia de Disco Lombar",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "hernia de disco",
      "protusao discal",
      "protrusao discal",
      "discopatia lombar",
      "disco intervertebral",
      "hérnia lombar"
    ],
    "sintomas": [
      "dor lombar",
      "dor irradiada",
      "parestesia",
      "fraqueza",
      "limitação funcional"
    ],
    "testes_ortopedicos_neurologicos": [
      "Exame neurológico segmentar.",
      "SLR e Slump quando indicados.",
      "Avaliação de movimento e resposta mecânica.",
      "Triagem de red flags e síndrome da cauda equina."
    ],
    "conduta_terapeutica": [
      "Manejo conservador individualizado em casos sem sinais de emergência.",
      "Exercícios e progressão funcional conforme resposta.",
      "Educação para atividade e retorno gradual.",
      "Encaminhamento médico diante de déficit progressivo, cauda equina ou dor refratária com indicação."
    ],
    "referencias_cientificas": [
      "NICE NG59. Low back pain and sciatica.",
      "NICE NG127. Suspected neurological conditions."
    ]
  },
  {
    "nome_patologia": "Estenose Lombar",
    "regiao_corpo": "Coluna",
    "palavras_chave": [
      "estenose espinhal lombar",
      "estenose de canal",
      "claudicacao neurogenica",
      "dor ao caminhar",
      "alivio ao sentar",
      "spinal stenosis"
    ],
    "sintomas": [
      "dor na perna ao caminhar",
      "parestesias",
      "claudicação",
      "fraqueza",
      "alívio em flexão",
      "redução de tolerância à caminhada"
    ],
    "testes_ortopedicos_neurologicos": [
      "História do padrão de sintomas com caminhada e postura.",
      "Teste de tolerância à marcha.",
      "Exame neurológico.",
      "Avaliação funcional de velocidade e distância de caminhada."
    ],
    "conduta_terapeutica": [
      "Educação e autogerenciamento.",
      "Exercício de condicionamento e força adaptado ao padrão de sintomas.",
      "Treino funcional com progressão de distância e autonomia.",
      "Avaliação médica quando sintomas neurológicos importantes ou evolução desfavorável."
    ],
    "referencias_cientificas": [
      "NICE NG59. Low back pain and sciatica.",
      "Literatura APTA/JOSPT sobre condições lombares e estenose."
    ]
  },
  {
    "nome_patologia": "Osteoartrite de Joelho",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "artrose do joelho",
      "osteoartrite de joelho",
      "gonartrose",
      "desgaste do joelho",
      "dor no joelho",
      "rigidez no joelho"
    ],
    "sintomas": [
      "dor articular",
      "rigidez",
      "crepitação",
      "fraqueza",
      "limitação funcional",
      "dor em escadas"
    ],
    "testes_ortopedicos_neurologicos": [
      "Avaliação de amplitude e força.",
      "Testes funcionais como sentar-levantar e caminhada.",
      "Avaliação de dor, função e tolerância de carga.",
      "Imagem quando apresentação for atípica ou houver indicação de diferenciação."
    ],
    "conduta_terapeutica": [
      "Exercício terapêutico individualizado com foco em força e função.",
      "Exercício aeróbico de baixo impacto conforme capacidade.",
      "Educação e manejo de carga.",
      "Manejo de peso corporal quando pertinente, integrado à preferência e contexto do paciente."
    ],
    "referencias_cientificas": [
      "NICE NG226. Osteoarthritis in over 16s: diagnosis and management (2022).",
      "WHO PIR Module 2 – Musculoskeletal Conditions (2023)."
    ]
  },
  {
    "nome_patologia": "Dor Patelofemoral",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "dor patelofemoral",
      "patellofemoral pain",
      "condromalacia",
      "condromalácia patelar",
      "dor anterior do joelho",
      "patela",
      "joelho"
    ],
    "sintomas": [
      "dor anterior",
      "dor em escadas",
      "dor ao agachar",
      "dor sentado",
      "fraqueza",
      "fadiga"
    ],
    "testes_ortopedicos_neurologicos": [
      "Agachamento e step-down para avaliação funcional.",
      "Avaliação de força de quadríceps e quadril.",
      "Reprodução da dor com tarefas de carga.",
      "Avaliação de controle do movimento."
    ],
    "conduta_terapeutica": [
      "Exercícios combinados para quadríceps e musculatura do quadril.",
      "Manejo de carga e retorno gradual.",
      "Educação sobre tolerância a atividade.",
      "Intervenções adjuvantes podem ser consideradas conforme apresentação individual."
    ],
    "referencias_cientificas": [
      "JOSPT/APTA. Patellofemoral Pain clinical practice guidance and clinical summary.",
      "Collins NJ et al. 2018 consensus statement on exercise therapy and physical interventions for patellofemoral pain."
    ]
  },
  {
    "nome_patologia": "Tendinopatia Patelar",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "tendinopatia patelar",
      "joelho do saltador",
      "jumper's knee",
      "tendao patelar",
      "dor abaixo da patela"
    ],
    "sintomas": [
      "dor no polo inferior da patela",
      "dor com salto",
      "dor no agachamento",
      "rigidez",
      "redução de capacidade esportiva"
    ],
    "testes_ortopedicos_neurologicos": [
      "Palpação do tendão patelar.",
      "Agachamento e step-down.",
      "Single-leg decline squat quando apropriado.",
      "Avaliação de força e capacidade de salto conforme fase."
    ],
    "conduta_terapeutica": [
      "Redução temporária de picos de carga.",
      "Isométricos ou isotônicos para modulação e fortalecimento conforme irritabilidade.",
      "Progressão de resistência para armazenamento/retorno de energia.",
      "Retorno graduado a corrida e saltos."
    ],
    "referencias_cientificas": [
      "Literatura de tendinopatia patelar e JOSPT/APTA sports physical therapy.",
      "Protocolos contemporâneos de loading progressivo para tendinopatias."
    ]
  },
  {
    "nome_patologia": "Lesão Meniscal",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "lesao de menisco",
      "menisco",
      "menisco medial",
      "menisco lateral",
      "dor no joelho",
      "travamento",
      "click"
    ],
    "sintomas": [
      "dor articular",
      "edema",
      "estalido",
      "bloqueio",
      "sensibilidade na linha articular",
      "dificuldade de agachar"
    ],
    "testes_ortopedicos_neurologicos": [
      "McMurray como parte de exame combinado.",
      "Thessaly quando indicado e seguro.",
      "Palpação da linha articular.",
      "Avaliação de derrame, amplitude e função."
    ],
    "conduta_terapeutica": [
      "Em lesões degenerativas/estáveis, exercício e manejo de carga podem compor tratamento conservador.",
      "Fortalecimento de quadríceps e quadril.",
      "Treino funcional e progressão de carga.",
      "Encaminhamento quando houver bloqueio verdadeiro, trauma relevante ou instabilidade importante."
    ],
    "referencias_cientificas": [
      "NICE NG226. Osteoarthritis and non-surgical management where degenerative meniscal symptoms coexist.",
      "Literatura APTA/JOSPT sobre knee pain and meniscal conditions."
    ]
  },
  {
    "nome_patologia": "Reabilitação após Lesão de LCA",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "lca",
      "ligamento cruzado anterior",
      "acl",
      "ruptura do lca",
      "reconstrucao do lca",
      "pos operatorio lca",
      "joelho"
    ],
    "sintomas": [
      "instabilidade",
      "dor",
      "edema",
      "fraqueza",
      "perda de extensao",
      "déficit de força"
    ],
    "testes_ortopedicos_neurologicos": [
      "Lachman, pivot shift e gaveta anterior no contexto adequado.",
      "Amplitude de movimento e derrame.",
      "Força de quadríceps/isquiotibiais.",
      "Testes de salto, aterrissagem e desempenho na fase apropriada."
    ],
    "conduta_terapeutica": [
      "Controle de edema e restauração da extensão conforme protocolo.",
      "Fortalecimento progressivo e recuperação de simetria de força.",
      "Treino neuromuscular, equilíbrio, corrida e saltos em fases apropriadas.",
      "Critérios funcionais, não apenas tempo, devem orientar retorno ao esporte."
    ],
    "referencias_cientificas": [
      "Arundale AJH et al. Exercise-Based Knee and ACL Injury Prevention: Revision 2023. APTA Orthopedics.",
      "JOSPT/APTA sports rehabilitation clinical practice literature."
    ]
  },
  {
    "nome_patologia": "Osteoartrite de Quadril",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "artrose de quadril",
      "osteoartrite de quadril",
      "coxartrose",
      "dor inguinal",
      "quadril rigido",
      "hip oa"
    ],
    "sintomas": [
      "dor no quadril",
      "dor inguinal",
      "rigidez",
      "redução de rotação",
      "dificuldade para caminhar",
      "fraqueza"
    ],
    "testes_ortopedicos_neurologicos": [
      "Amplitude de movimento, especialmente rotação.",
      "Teste funcional de caminhada e sentar-levantar.",
      "Força de glúteos e quadríceps.",
      "Avaliação de dor e função."
    ],
    "conduta_terapeutica": [
      "Exercício para força, mobilidade e capacidade aeróbica.",
      "Educação e autogerenciamento.",
      "Manejo de peso corporal quando relevante.",
      "Progressão de função e atividades preferidas."
    ],
    "referencias_cientificas": [
      "APTA Orthopedics. Hip Pain and Mobility Deficits—Hip Osteoarthritis: Revision 2025.",
      "NICE NG226. Osteoarthritis in over 16s (2022)."
    ]
  },
  {
    "nome_patologia": "Impacto Fêmoro-Acetabular",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "impacto femoro acetabular",
      "ifa",
      "fa i",
      "impingement do quadril",
      "dor inguinal",
      "fai",
      "flexao do quadril"
    ],
    "sintomas": [
      "dor inguinal",
      "dor ao flexionar quadril",
      "rigidez",
      "dor sentado",
      "dor esportiva"
    ],
    "testes_ortopedicos_neurologicos": [
      "FADIR como teste provocativo dentro de avaliação combinada.",
      "FABER conforme hipótese diferencial.",
      "Amplitude de movimento e força de quadril.",
      "Avaliação funcional específica da atividade."
    ],
    "conduta_terapeutica": [
      "Educação sobre modificação temporária de posições e carga.",
      "Fortalecimento de glúteos e musculatura do quadril.",
      "Treino de controle de movimento e capacidade funcional.",
      "Encaminhamento para avaliação especializada quando dor persistir apesar de cuidado conservador ou houver suspeita estrutural relevante."
    ],
    "referencias_cientificas": [
      "Enseki K et al. Hip Pain and Movement Dysfunction Associated With Nonarthritic Hip Joint Pain: Revision 2023.",
      "APTA Orthopedics CPG literature on nonarthritic hip pain."
    ]
  },
  {
    "nome_patologia": "Síndrome da Dor Trocantérica Maior / Tendinopatia Glútea",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "dor trocantérica",
      "gtps",
      "greater trochanteric pain syndrome",
      "tendinopatia glutea",
      "gluteo medio",
      "dor lateral do quadril"
    ],
    "sintomas": [
      "dor lateral do quadril",
      "dor ao deitar de lado",
      "dor ao subir escadas",
      "fraqueza abdutora",
      "dor ao correr"
    ],
    "testes_ortopedicos_neurologicos": [
      "Resistência à abdução.",
      "Single-leg stance para reprodução de sintomas, quando apropriado.",
      "Avaliação de força e controle pélvico.",
      "Teste funcional de marcha e escadas."
    ],
    "conduta_terapeutica": [
      "Educação para manejo de compressão lateral e carga.",
      "Fortalecimento progressivo de abdutores e extensores do quadril.",
      "Treino funcional e progressão de corrida quando relevante.",
      "Evitar aumentos abruptos de carga durante fases irritáveis."
    ],
    "referencias_cientificas": [
      "Literatura contemporânea sobre gluteal tendinopathy/GTPS e APTA Orthopedics hip clinical resources.",
      "APTA CPG literature on hip pain and movement dysfunction."
    ]
  },
  {
    "nome_patologia": "Acidente Vascular Cerebral (AVC) — Reabilitação",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "avc",
      "acidente vascular cerebral",
      "derrame",
      "stroke",
      "hemiparesia",
      "hemiplegia",
      "reabilitacao neurologica",
      "marcha",
      "equilibrio"
    ],
    "sintomas": [
      "fraqueza unilateral",
      "alteracao de equilibrio",
      "alteracao de marcha",
      "espasticidade",
      "perda de destreza",
      "fadiga"
    ],
    "testes_ortopedicos_neurologicos": [
      "Fugl-Meyer Assessment conforme domínio e disponibilidade.",
      "Berg Balance Scale ou Mini-BESTest para equilíbrio, conforme objetivo.",
      "Timed Up and Go e testes de marcha.",
      "6-Minute Walk Test quando clinicamente apropriado.",
      "Avaliação de função de membro superior, mobilidade, fala/deglutição e cognição em trabalho multiprofissional."
    ],
    "conduta_terapeutica": [
      "Treino de tarefas específicas e repetição orientada a objetivos.",
      "Treino de marcha e locomoção conforme capacidade.",
      "Fortalecimento e condicionamento cardiorrespiratório quando clinicamente apropriados.",
      "Treino de equilíbrio, transferências e participação comunitária.",
      "Uso de tecnologia/tele-reabilitação pode ser considerado quando apropriado."
    ],
    "referencias_cientificas": [
      "Richards LG et al. 2026 Guideline for Adult Stroke Rehabilitation and Recovery. American Heart Association/American Stroke Association.",
      "WHO. Package of Interventions for Rehabilitation: Module 3 – Neurological Conditions (2023).",
      "APTA Academy of Neurologic Physical Therapy clinical resources on stroke."
    ]
  },
  {
    "nome_patologia": "Doença de Parkinson",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "parkinson",
      "doenca de parkinson",
      "parkinsonismo",
      "bradicinesia",
      "rigidez",
      "tremor",
      "freezing",
      "marcha"
    ],
    "sintomas": [
      "bradicinesia",
      "rigidez",
      "tremor",
      "freezing",
      "alteracao de marcha",
      "desequilibrio",
      "fadiga"
    ],
    "testes_ortopedicos_neurologicos": [
      "Timed Up and Go.",
      "10-Meter Walk Test.",
      "Five Times Sit to Stand.",
      "Mini-BESTest/Berg conforme objetivo.",
      "Avaliação de amplitude, mobilidade funcional e freezing."
    ],
    "conduta_terapeutica": [
      "Exercício aeróbico e de resistência quando seguro e adequado.",
      "Treino de amplitude e movimentos de grande escala.",
      "Treino de marcha com pistas visuais/auditivas quando indicado.",
      "Treino de equilíbrio e transferências.",
      "Educação sobre atividade física e prevenção de quedas."
    ],
    "referencias_cientificas": [
      "APTA. Physical Therapist Management of Parkinson Disease Clinical Practice Guideline (2022).",
      "APTA. Parkinson Disease clinical summary, updated 2024.",
      "WHO. PIR Module 3 – Neurological Conditions (2023)."
    ]
  },
  {
    "nome_patologia": "Esclerose Múltipla",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "esclerose multipla",
      "multiple sclerosis",
      "ms",
      "fadiga",
      "ataxia",
      "espasticidade",
      "fraqueza",
      "equilibrio"
    ],
    "sintomas": [
      "fadiga",
      "fraqueza",
      "alteracao de equilibrio",
      "espasticidade",
      "ataxia",
      "alteracao de sensibilidade",
      "intolerância ao esforço"
    ],
    "testes_ortopedicos_neurologicos": [
      "Timed 25-Foot Walk.",
      "9-Hole Peg Test para função de membro superior.",
      "MS Functional Composite quando aplicável.",
      "6-Minute Walk Test e escalas de fadiga conforme objetivo.",
      "EDSS pode informar comunicação interprofissional, mas requer treinamento específico e não substitui medidas funcionais da fisioterapia."
    ],
    "conduta_terapeutica": [
      "Exercício aeróbico e resistência progressivos conforme tolerância.",
      "Conservação de energia e manejo da fadiga.",
      "Treino de equilíbrio e marcha.",
      "Fortalecimento e tarefas funcionais.",
      "Atenção a calor, fadiga excessiva e flutuação dos sintomas."
    ],
    "referencias_cientificas": [
      "APTA. Multiple Sclerosis clinical summary and outcome-measure resources.",
      "APTA Academy of Neurologic Physical Therapy. MS outcome measures recommendations.",
      "WHO rehabilitation resources for neurological conditions."
    ]
  },
  {
    "nome_patologia": "Lesão Medular — Reabilitação",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "lesao medular",
      "trauma raquimedular",
      "tce?",
      "spinal cord injury",
      "tetraplegia",
      "paraplegia",
      "marcha",
      "transferencia"
    ],
    "sintomas": [
      "fraqueza",
      "paralisia",
      "alteracao sensitiva",
      "espasticidade",
      "dor neuropatica",
      "limitação de mobilidade"
    ],
    "testes_ortopedicos_neurologicos": [
      "Exame neurológico padronizado, incluindo classificação ASIA/ISNCSCI quando treinado.",
      "Avaliação de força, sensibilidade e função.",
      "Testes de transferência, equilíbrio sentado/em pé e marcha conforme nível de lesão.",
      "Avaliação cardiorrespiratória e integridade cutânea."
    ],
    "conduta_terapeutica": [
      "Treino de tarefas funcionais e transferências.",
      "Fortalecimento de musculatura preservada.",
      "Treino de marcha em níveis apropriados de lesão e capacidade.",
      "Prevenção de lesões de pele, contraturas e complicações secundárias.",
      "Programa de condicionamento e participação."
    ],
    "referencias_cientificas": [
      "WHO. PIR Module 3 – Neurological Conditions (2023).",
      "APTA Academy of Neurologic Physical Therapy clinical resources on spinal cord injury.",
      "Hornby TG et al. Locomotor CPG for chronic stroke, incomplete SCI and brain injury (2020)."
    ]
  },
  {
    "nome_patologia": "Traumatismo Cranioencefálico / Concussão",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "tce",
      "traumatismo cranioencefalico",
      "concussao",
      "mild traumatic brain injury",
      "mtbi",
      "dor de cabeca",
      "tontura",
      "sensibilidade a luz"
    ],
    "sintomas": [
      "cefaleia",
      "tontura",
      "alteracao de equilibrio",
      "fadiga",
      "intolerância ao esforço",
      "sensibilidade a estímulos",
      "alteração cognitiva"
    ],
    "testes_ortopedicos_neurologicos": [
      "Triagem vestibular e oculomotora conforme indicação.",
      "Teste de equilíbrio e marcha.",
      "Avaliação de tolerância ao esforço.",
      "Questionários específicos de sintomas quando disponíveis.",
      "Avaliação cognitiva em conjunto multiprofissional quando necessário."
    ],
    "conduta_terapeutica": [
      "Retorno gradual à atividade conforme resposta e orientação clínica.",
      "Exercício aeróbico sub-sintomático quando indicado e seguro.",
      "Reabilitação vestibular/oculomotora em déficits identificados.",
      "Educação sobre progressão de carga e manejo de sintomas.",
      "Encaminhar diante de sinais neurológicos novos ou piora importante."
    ],
    "referencias_cientificas": [
      "APTA. Physical Therapy Evaluations and Treatment After Concussion/Mild Traumatic Brain Injury (2020).",
      "VA/DoD. Management and Rehabilitation of Post-Acute Mild Traumatic Brain Injury CPG (2021).",
      "Hassett L et al. Physical Activity CPG for Moderate to Severe TBI (2025)."
    ]
  },
  {
    "nome_patologia": "Vertigem Posicional Paroxística Benigna (VPPB)",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "vppb",
      "vertigem posicional",
      "vertigem ao virar na cama",
      "bppv",
      "tontura posicional",
      "canal semicircular",
      "dix hallpike"
    ],
    "sintomas": [
      "vertigem",
      "náusea",
      "tontura ao deitar",
      "tontura ao virar",
      "desequilíbrio"
    ],
    "testes_ortopedicos_neurologicos": [
      "Dix-Hallpike para canal posterior quando indicado.",
      "Supine roll test para suspeita de canal lateral.",
      "Observação de nistagmo e quadro clínico pelo profissional treinado.",
      "Triagem de sinais centrais/atípicos."
    ],
    "conduta_terapeutica": [
      "Manobras de reposicionamento canalicular apropriadas ao canal acometido.",
      "Educação e medidas de segurança para risco de queda.",
      "Reavaliação de persistência/recorrência.",
      "Reabilitação vestibular quando houver déficit residual de equilíbrio/tontura."
    ],
    "referencias_cientificas": [
      "Bhattacharyya N et al. Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update). Otolaryngol Head Neck Surg. 2017;156(Suppl):S1-S47. doi:10.1177/0194599816689667.",
      "AAO-HNSF. BPPV Clinical Practice Guideline Update."
    ]
  },
  {
    "nome_patologia": "Hipofunção Vestibular Periférica",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "hipofuncao vestibular",
      "vestibulopatia periferica",
      "unilateral vestibular hypofunction",
      "vertigem",
      "oscilopsia",
      "desequilibrio",
      "reabilitacao vestibular"
    ],
    "sintomas": [
      "tontura",
      "desequilíbrio",
      "oscilopsia",
      "instabilidade ao andar",
      "sensibilidade a movimento da cabeça"
    ],
    "testes_ortopedicos_neurologicos": [
      "Head impulse test quando treinado e indicado.",
      "Dynamic Gait Index ou Functional Gait Assessment.",
      "Dynamic visual acuity.",
      "Teste de equilíbrio estático/dinâmico."
    ],
    "conduta_terapeutica": [
      "Exercícios de estabilização do olhar.",
      "Habitação a movimentos provocadores de maneira graduada.",
      "Treino de equilíbrio e marcha.",
      "Progressão de tarefas com dupla demanda quando necessário.",
      "Encaminhamento quando sinais centrais ou perda auditiva associada exigirem investigação."
    ],
    "referencias_cientificas": [
      "APTA Academy of Neurologic Physical Therapy. Vestibular Rehabilitation for Peripheral Vestibular Hypofunction – Updated CPG (2022).",
      "WHO rehabilitation resources."
    ]
  },
  {
    "nome_patologia": "Neuropatia Periférica",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "neuropatia periferica",
      "polineuropatia",
      "neuropatia diabetica",
      "parestesia",
      "formigamento nos pes",
      "perda de sensibilidade",
      "fraqueza distal"
    ],
    "sintomas": [
      "dormencia",
      "formigamento",
      "alteracao sensitiva",
      "fraqueza",
      "desequilibrio",
      "dor neuropatica"
    ],
    "testes_ortopedicos_neurologicos": [
      "Monofilamento e avaliação sensitiva quando indicado.",
      "Testes de equilíbrio e marcha.",
      "Força distal e amplitude articular.",
      "Inspeção de pele e pés quando houver diabetes."
    ],
    "conduta_terapeutica": [
      "Treino de equilíbrio e força quando indicado.",
      "Educação para proteção dos pés e inspeção da pele.",
      "Estratégias de atividade para reduzir risco de queda.",
      "Programa de exercício individualizado segundo causa e tolerância."
    ],
    "referencias_cientificas": [
      "APTA-supported Clinical Practice Guideline. Diabetic Foot Ulcer Beyond Wound Closure (2024).",
      "APTA clinical summaries on peripheral neuropathy and diabetes.",
      "WHO rehabilitation resources."
    ]
  },
  {
    "nome_patologia": "Paralisia Cerebral — Reabilitação",
    "regiao_corpo": "Neurologia",
    "palavras_chave": [
      "paralisia cerebral",
      "cerebral palsy",
      "diplegia",
      "hemiplegia",
      "espasticidade",
      "desenvolvimento motor",
      "marcha infantil"
    ],
    "sintomas": [
      "espasticidade",
      "fraqueza",
      "alteração de marcha",
      "atraso motor",
      "limitação funcional",
      "alteração de equilíbrio"
    ],
    "testes_ortopedicos_neurologicos": [
      "GMFM para função motora grossa quando aplicável.",
      "Avaliação de tônus e amplitude.",
      "Avaliação de marcha e equilíbrio.",
      "Medidas de participação e função específicas da idade."
    ],
    "conduta_terapeutica": [
      "Treino orientado a tarefas e objetivos funcionais.",
      "Fortalecimento progressivo quando apropriado.",
      "Treino de marcha, equilíbrio e mobilidade.",
      "Tecnologia assistiva/órteses quando indicadas pela equipe.",
      "Educação e participação da família/cuidador."
    ],
    "referencias_cientificas": [
      "WHO. PIR Module 3 – Neurological Conditions (2023).",
      "APTA pediatric and neurologic physical therapy clinical resources."
    ]
  },
  {
    "nome_patologia": "Síndrome do Desfiladeiro Torácico — Abordagem Musculoesquelética",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "desfiladeiro toracico",
      "thoracic outlet syndrome",
      "parestesia no braço",
      "compressao neurovascular",
      "ombro",
      "mao dormente"
    ],
    "sintomas": [
      "parestesia",
      "dor no braço",
      "fadiga do membro superior",
      "sensação de peso",
      "alteração vascular"
    ],
    "testes_ortopedicos_neurologicos": [
      "Avaliação neurológica e vascular do membro superior.",
      "Testes provocativos específicos devem ser interpretados com cautela, pois têm limitações de precisão.",
      "Avaliação de postura/movimento e demanda funcional.",
      "Encaminhamento para avaliação vascular/neurológica diante de sinais relevantes."
    ],
    "conduta_terapeutica": [
      "Educação e modificação de cargas/posições provocativas.",
      "Treino de controle cervicoescapular e mobilidade quando indicado.",
      "Fortalecimento progressivo com monitoramento dos sintomas.",
      "Investigar causas alternativas e encaminhar quando sinais vasculares ou neurológicos forem preocupantes."
    ],
    "referencias_cientificas": [
      "Literatura de APTA/JOSPT sobre dor cervical, membro superior e diagnóstico diferencial.",
      "Diretrizes clínicas multidisciplinares para síndrome do desfiladeiro torácico."
    ]
  },
  {
    "nome_patologia": "Dor no Punho por Sobrecarga / Tendinopatia Extensora",
    "regiao_corpo": "Punho e Mão",
    "palavras_chave": [
      "dor no punho",
      "tendinopatia extensora",
      "sobrecarga de punho",
      "extensores do punho",
      "mouse",
      "teclado",
      "academia",
      "punho dolorido"
    ],
    "sintomas": [
      "dor no punho",
      "dor com extensão",
      "dor com preensão",
      "fadiga",
      "sensibilidade tendínea"
    ],
    "testes_ortopedicos_neurologicos": [
      "Movimentos ativos e resistidos do punho/dedos.",
      "Palpação do compartimento envolvido.",
      "Teste de força de preensão.",
      "Triagem de nervos periféricos e articulações adjacentes quando indicado."
    ],
    "conduta_terapeutica": [
      "Manejo de carga e ergonomia funcional.",
      "Mobilidade sem irritação excessiva.",
      "Fortalecimento progressivo dos músculos envolvidos.",
      "Retorno gradual às tarefas repetitivas."
    ],
    "referencias_cientificas": [
      "Literatura contemporânea de terapia da mão e tendinopatia.",
      "APTA Hand & Upper Extremity resources."
    ]
  },
  {
    "nome_patologia": "Artrose de Tornozelo",
    "regiao_corpo": "Tornozelo e Pé",
    "palavras_chave": [
      "artrose do tornozelo",
      "osteoartrite do tornozelo",
      "tornozelo rigido",
      "dor no tornozelo",
      "pos trauma tornozelo"
    ],
    "sintomas": [
      "dor articular",
      "rigidez",
      "limitação de dorsiflexão",
      "edema",
      "dificuldade para caminhar"
    ],
    "testes_ortopedicos_neurologicos": [
      "Amplitude de movimento do tornozelo.",
      "Avaliação de força e equilíbrio.",
      "Testes funcionais de marcha e escadas.",
      "Imagem quando indicada para confirmação/diferenciação."
    ],
    "conduta_terapeutica": [
      "Fortalecimento de panturrilha e membro inferior.",
      "Exercício aeróbico de baixo impacto conforme tolerância.",
      "Mobilidade funcional e treino de marcha.",
      "Educação e manejo de carga."
    ],
    "referencias_cientificas": [
      "NICE NG226. Osteoarthritis in over 16s (2022).",
      "Literatura APTA Orthopedics sobre condições do pé e tornozelo."
    ]
  },
  {
    "nome_patologia": "Dor do Tendão do Bíceps — Porção Longa",
    "regiao_corpo": "Ombro e Cotovelo",
    "palavras_chave": [
      "tendinopatia do biceps",
      "biceps longo",
      "dor anterior do ombro",
      "sulco bicipital",
      "tendao do biceps"
    ],
    "sintomas": [
      "dor anterior do ombro",
      "dor com elevação",
      "dor com flexão do cotovelo",
      "sensibilidade no sulco bicipital"
    ],
    "testes_ortopedicos_neurologicos": [
      "Speed e Yergason como testes complementares, reconhecendo limitações diagnósticas.",
      "Palpação do sulco bicipital.",
      "Testes de força e movimento do ombro.",
      "Triagem de lesão do manguito e labral."
    ],
    "conduta_terapeutica": [
      "Manejo de carga e tarefas provocativas.",
      "Fortalecimento progressivo do complexo do ombro.",
      "Integração com reabilitação do manguito quando coexistente.",
      "Retorno gradual às atividades acima da cabeça."
    ],
    "referencias_cientificas": [
      "APTA/JOSPT shoulder pain and rotator cuff tendinopathy literature.",
      "AAOS clinical resources for biceps tendon pathology."
    ]
  },
  {
    "nome_patologia": "Lesão/Distensão Muscular Aguda",
    "regiao_corpo": "Joelho e Quadril",
    "palavras_chave": [
      "distensao muscular",
      "lesao muscular",
      "estiramento",
      "strain",
      "posterior da coxa",
      "hamstring",
      "adutor",
      "quadriceps"
    ],
    "sintomas": [
      "dor muscular",
      "edema",
      "perda de força",
      "dor ao alongar",
      "dor ao contrair"
    ],
    "testes_ortopedicos_neurologicos": [
      "Palpação e localização da dor.",
      "Teste resistido do músculo envolvido.",
      "Amplitude e tolerância ao alongamento.",
      "Testes funcionais progressivos conforme fase."
    ],
    "conduta_terapeutica": [
      "Manejo de carga de acordo com irritabilidade e fase de cicatrização.",
      "Movimento ativo precoce quando seguro.",
      "Fortalecimento progressivo do tecido envolvido.",
      "Retorno gradual a velocidade, corrida e mudanças de direção."
    ],
    "referencias_cientificas": [
      "Literatura JOSPT/APTA Sports Physical Therapy sobre lesões musculares e retorno ao esporte.",
      "Consensos internacionais de reabilitação de lesões musculares."
    ]
  }
];

const COMORBIDITY_OPTIONS = [
  { id: "obesidade", label: "Obesidade" },
  { id: "hipertensao", label: "Hipertensão" },
  { id: "diabetes", label: "Diabetes" },
  { id: "osteoporose", label: "Osteoporose" },
  { id: "cardiovascular", label: "Doença cardiovascular conhecida" },
  { id: "risco-queda", label: "Risco aumentado de queda" }
];

const SYMPTOM_OPTIONS = [
  { id: "dor-articular", label: "Dor articular" },
  { id: "fadiga-muscular", label: "Fadiga muscular" },
  { id: "alteracao-sensibilidade", label: "Alteração de sensibilidade" },
  { id: "edema", label: "Edema" },
  { id: "rigidez", label: "Rigidez / perda de mobilidade" },
  { id: "fraqueza", label: "Fraqueza muscular" },
  { id: "desequilibrio", label: "Desequilíbrio / insegurança ao andar" },
  { id: "dor-neuropatica", label: "Dor com característica neuropática" },
  { id: "falta-ar", label: "Falta de ar aos esforços" },
  { id: "baixa-tolerancia", label: "Baixa tolerância ao esforço" }
];

// Helpers opcionais expostos para debug/uso futuro.
const CLINICAL_CATEGORIES = [...new Set(CLINICAL_DATABASE.map(item => item.regiao_corpo))];
