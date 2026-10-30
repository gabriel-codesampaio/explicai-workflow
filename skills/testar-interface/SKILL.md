---
name: testar-interface
description: "Prova que uma tela funciona como a pessoa vai usar - teste de ponta a ponta com Playwright e conferência no navegador real pelo Chrome DevTools MCP, em larguras e temas diferentes. Use em toda fatia que muda tela."
---

# Testar a interface

## Teste de ponta a ponta

- Escreva o fluxo como a pessoa faz: clicar, digitar, usar atalho. Ache os elementos pelo papel e pelo nome acessível (`getByRole("button", { name: "..." })`), não por classe CSS.
- Cada teste cria os próprios dados (pela API, quando houver) para não depender da ordem dos outros.
- Espere pelo estado da tela (`toBeVisible`, `toHaveText`), nunca por tempo fixo.
- Se a interface tem mais de um idioma, fixe o idioma do navegador no teste.

## Conferência no navegador

Com o app rodando, abra uma aba nova no Chrome DevTools MCP e confira:

| O quê | Como |
|-------|------|
| Larguras | 375 e 1440; 960 e 2560 só quando a fatia mexe em layout |
| Temas | claro e escuro, se o projeto tiver |
| Teclado | o fluxo inteiro sem mouse; foco sempre visível |
| Leitor de tela | nomes, papéis e títulos por script; snapshot completo só se precisar achar um elemento |
| Transbordo | `document.documentElement.scrollWidth` igual à largura da janela |

Feche a aba no fim e devolva o navegador como encontrou (tema, idioma, dados de teste).

## Evidência

Prints das telas conferidas, os comandos de teste e o resultado. Teste que falha às vezes vai para `diagnosticar`, não para repetição automática.
