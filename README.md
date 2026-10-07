# Fisio90s ¬ Fisioterapia Offline

PWA Vanilla JS para GitHub Pages. O aplicativo usa IndexedDB local, não possui senha e separa pacientes e pesquisas por `@usuário`.

## Arquivos
- index.html
- style.css
- app.js
- database.js
- manifest.json
- sw.js
- logo-placeholder.png

## Publicação
Envie todos os arquivos para um repositório do GitHub e ative GitHub Pages. O primeiro acesso precisa de internet para baixar os arquivos; depois do cache do Service Worker, a aplicação funciona offline.

Para testar corretamente o PWA localmente, use um servidor HTTP (por exemplo, Live Server), não abra o `index.html` diretamente com `file://`.

## Logo
Substitua `logo-placeholder.png` pela sua própria logo mantendo o mesmo nome e caminho.

## Observação clínica
A base é um recurso educacional e de consulta rápida. A seleção final de exercícios, intensidade, volume e progressão deve ser individualizada por profissional habilitado.


## Atualização do armazenamento e ícones

Esta revisão utiliza um banco IndexedDB novo (`Fisio90s_V2_DB`, versão 1), isolado do banco anterior. Os ícones do PWA são arquivos locais `icon-192.png` e `icon-512.png`, incluídos no projeto e no cache do Service Worker.
