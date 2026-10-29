---
name: tickets
description: "Controle de tickets em Markdown dentro do projeto (docs/tickets/) - criar tickets a partir de uma crítica, revisão ou spec, escolher o próximo por prioridade, mudar o status e fechar com o commit. Use para transformar achados em trabalho rastreável e para a equipe trabalhar na fila."
---

# Tickets

Os tickets ficam no próprio repositório, versionados com o código:

```
docs/tickets/
  README.md          índice: uma linha por ticket
  T-001-<nome>.md    um arquivo por ticket
```

## Formato do ticket

```markdown
# T-001: <título curto, no imperativo>

- Prioridade: P0 | P1 | P2 | P3
- Status: aberto | em andamento | feito | descartado
- Agente: frontend | design | qa | core
- Origem: <crítica de design 2026-10-29, revisão, pedido>

## Problema
O que está errado e para quem, com a evidência (arquivo:linha, print, medida).

## Critérios de aceite
- [ ] Comportamento observável.

## Onde
Arquivos prováveis.

## Como verificar
Teste, comando ou fluxo na tela.

## Registro
<!-- preenchido ao fechar: commit, o que foi feito, o que ficou de fora -->
```

Prioridade: **P0** bloqueia o uso ou atinge quem lê o resultado final; **P1** atrapalha bastante ou é o pedido principal; **P2** incomoda, há como contornar; **P3** acabamento.

## Índice (`README.md`)

```markdown
| ID | Título | Prioridade | Status | Agente |
|----|--------|------------|--------|--------|
| [T-001](T-001-fontes-no-export.md) | Embutir as fontes no manual exportado | P0 | aberto | core |
```

O índice e o arquivo do ticket mudam no mesmo commit.

## Criar tickets

1. Um achado vira um ticket. Achados que só fazem sentido juntos viram um ticket só.
2. Numere em sequência a partir do maior ID existente.
3. Critério de aceite verificável, sem prescrever a implementação quando houver mais de um jeito bom.
4. Commit: `Abre os tickets T-0NN a T-0MM (<origem>)`.

## Trabalhar na fila

1. Pegue o ticket `aberto` de maior prioridade (empate: menor ID). Tickets que dependem de outro esperam.
2. Mude para `em andamento` antes de começar.
3. Siga o workflow: o ticket já é a spec; planeje se tiver mais de uma fatia.
4. Ao terminar: critérios marcados, `Registro` preenchido (commit, o que foi feito, o que ficou de fora), status `feito`, índice atualizado. Isso entra no último commit do ticket ou num commit logo depois.
5. Achou trabalho novo no caminho? Abra outro ticket; não amplie o atual.

`descartado` precisa do motivo no `Registro`.
