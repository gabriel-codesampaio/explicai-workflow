---
name: testar-interface
description: "Prova que uma tela funciona como a pessoa vai usar - teste de ponta a ponta com Playwright e conferência no navegador real por script Playwright, em larguras e temas diferentes. Use em toda fatia que muda tela."
---

# Testar a interface

## Teste de ponta a ponta

- Escreva o fluxo como a pessoa faz: clicar, digitar, usar atalho. Ache os elementos pelo papel e pelo nome acessível (`getByRole("button", { name: "..." })`), não por classe CSS.
- Cada teste cria os próprios dados (pela API, quando houver) para não depender da ordem dos outros.
- Espere pelo estado da tela (`toBeVisible`, `toHaveText`), nunca por tempo fixo.
- Se a interface tem mais de um idioma, fixe o idioma do navegador no teste.
- Rode só os testes da área tocada (`npx playwright test -g "<nome>"` ou o arquivo). O e2e completo fica para a main mesclada, antes do push.

## Conferência no navegador

Com o app rodando, use script Playwright headless (o do `node_modules` do projeto, em arquivo fora do repo): grava os prints em arquivo e imprime só as medidas, e confira o quadro abaixo. Chrome DevTools MCP só quando o script não resolve (rede, desempenho, depuração), com `evaluate_script` em vez de snapshot.

| O quê | Como |
|-------|------|
| Larguras | 375 e 1440; 960 e 2560 só quando a fatia mexe em layout |
| Temas | claro e escuro, se o projeto tiver |
| Teclado | o fluxo inteiro sem mouse; foco sempre visível |
| Leitor de tela | nomes, papéis e títulos por script (`getByRole`, `ariaSnapshot` de um trecho) |
| Transbordo | `document.documentElement.scrollWidth` igual à largura da janela |

No fim, encerre o script e o servidor que subiu. Se usou o Chrome DevTools MCP, feche a aba e devolva o navegador como encontrou.

## Evidência

Prints das telas conferidas, os comandos de teste e o resultado. Teste que falha às vezes vai para `diagnosticar`, não para repetição automática.
