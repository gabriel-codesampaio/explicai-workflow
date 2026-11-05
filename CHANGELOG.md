# Changelog

Formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/). Versões seguem `.claude-plugin/plugin.json`.

## [0.13.1] - 2026-11-04
### Corrigido
- tickets: a fila sai de `npm run tickets`, sem tabela no README (PRs paralelos conflitavam nas linhas do índice).

## [0.13.0] - 2026-11-03
### Adicionado
- navegador: script Playwright como primeira opção, para gastar menos tokens; o Chrome DevTools MCP fica para o que o script não mostra.

## [0.12.0] - 2026-11-03
### Alterado
- supervisor: para no fim do lote, espera os próprios agentes e encurta o relatório.
- tickets: índice só com os abertos e passagem num arquivo só.

## [0.11.0] - 2026-11-03
### Alterado
- frontend: escolhe o caminho por tipo de fatia e carrega as skills React só quando precisa.

## [0.10.2] - 2026-10-30
### Alterado
- qa: roda só os testes do que a demanda toca.

## [0.10.1] - 2026-10-30
### Alterado
- tickets: a skill roda à parte com haiku.

## [0.10.0] - 2026-10-30
### Adicionado
- Agente `seguranca`: avalia instalações e confere o que vai subir.
- Agente `discovery`; a ideia que vira discovery sai do caderno (0.9.0).
