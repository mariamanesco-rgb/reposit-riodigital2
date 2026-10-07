# Fisio+

PWA offline-first em HTML/CSS/JavaScript puro para consulta educacional e gerenciamento local de pacientes.

## Arquivos
- `index.html` — interface
- `style.css` — identidade visual responsiva
- `app.js` — IndexedDB, autenticação local sem senha, buscas, histórico, pacientes, adaptações e instalação
- `database.js` — base científica estática
- `manifest.json` — configuração PWA
- `sw.js` — cache offline
- `logo-placeholder.png` — substitua pela sua logo mantendo o mesmo nome

## Executar
Publique no GitHub Pages ou use um servidor local (ex.: Live Server). Não abra por `file://`, porque Service Worker e algumas APIs do navegador exigem contexto seguro/servidor.

## Privacidade e segurança
Os dados dos pacientes ficam no IndexedDB do navegador e são separados por `@usuário`. Esta versão não possui servidor, sincronização entre dispositivos, recuperação de senha ou criptografia de prontuário. Para uso real com dados pessoais/sensíveis, valide requisitos de LGPD, segurança, backup e governança antes de produção.

## Banco científico
O conteúdo é uma base educacional estática. Referências e condutas devem ser revisadas antes de uso acadêmico ou clínico. O aplicativo não substitui avaliação profissional, protocolos institucionais ou julgamento clínico.
