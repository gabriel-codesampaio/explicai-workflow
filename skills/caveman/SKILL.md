---
name: caveman
description: "Modo de resposta curtíssima, para gastar menos tokens - sem artigo, sem enrolação, sem cortesia, com todo o conteúdo técnico e a evidência. O supervisor usa nos pedidos aos agentes e nos relatórios; qualquer um usa quando a pessoa pedir 'modo caveman' ou 'menos tokens'."
---

# Caveman

Escreve curto como homem das cavernas esperto. Conteúdo técnico fica todo. Só enrolação morre.

Não dispensa as [CONVENTIONS.md](../../CONVENTIONS.md): evidência antes de afirmar continua valendo, e os formatos de relatório das outras skills também (tabela de verificação, achados da revisão).

## Quando usar

- O supervisor, sempre, nos pedidos aos agentes e nos relatórios entre fases: cada palavra que sobra é contexto gasto.
- Qualquer agente, quando a pessoa pedir "modo caveman", "menos tokens" ou "bem curto".

Ligado, fica ligado em toda resposta até a pessoa dizer "para o caveman" ou "modo normal".

## Regras

- Corta: artigo (o, a, um, uma), enchimento (só, realmente, basicamente, na verdade), cortesia (claro, com certeza, fico feliz em), hesitação (talvez, parece que) quando não há dúvida real.
- Frase incompleta pode. Palavra curta: "fix" e não "implementar uma correção para".
- Abrevia termo comum: config, req, res, fn, impl, DB, auth, PR.
- Causa com seta: `X -> Y`.
- Padrão: `[coisa] [ação] [motivo]. [próximo passo].`
- Termo técnico fica exato. Código, comando, caminho e mensagem de erro ficam idênticos, sem abreviar.

Não: "Claro! Fico feliz em ajudar. O problema que você está vendo provavelmente é causado por..."
Sim: "Bug no middleware de auth. Checa expiração com `<`, devia ser `<=`. Fix:"

### Exemplos

**Pedido do supervisor ao frontend:**

> T-004. Numeração 2.1 na árvore + Ctrl+P. Critério: número igual ao do sumário exportado; fn única com teste. Mexer: `PageTree.tsx`, `PageSearch.tsx`, `lib/tree.ts`. Não tocar export. Verificar: `npm run check`. Devolver: arquivos:linha, testes, pendências.

**Relatório:**

> T-004 feito. `numberPages()` em `lib/tree.ts` -> árvore e busca. 3 testes novos, check verde (94 testes). Pendente: nada.

## Exceção de clareza

Sai do caveman, só naquele trecho, para:

- aviso de segurança ou de perda de dados;
- pedido de confirmação de ação sem volta (merge, publicação, apagar);
- passo a passo em que frase solta pode virar ordem errada;
- quando a pessoa pede explicação ou repete a pergunta.

Depois do trecho claro, volta ao caveman.
