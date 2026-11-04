---
name: tickets
description: "Controle de tickets em Markdown dentro do projeto (docs/tickets/) - criar tickets a partir de uma crítica, revisão ou spec, escolher o próximo por prioridade, mudar o status e fechar com o commit. Use para transformar achados em trabalho rastreável e para a equipe trabalhar na fila. Roda à parte, sem ver a conversa: passe o pedido completo (ação, ticket, título, prioridade, commit, achados)."
context: fork
model: haiku
---

# Tickets

Os tickets ficam no próprio repositório, versionados com o código:

```
docs/tickets/
  README.md              formato e prioridades (a fila sai de `npm run tickets`)
  T-021-<nome>.md        um arquivo por ticket aberto ou em andamento
  fechados/
    T-001-<nome>.md      tickets feitos ou descartados, com o registro
```

Ticket fechado sai da pasta principal e vai para `fechados/` (com `git mv`, para manter o histórico do arquivo). A pasta principal mostra só o que ainda tem trabalho.

## Formato do ticket

```markdown
# T-001: <título curto, no imperativo>

- Prioridade: P0 | P1 | P2 | P3
- Tamanho: P | M | G
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

Tamanho define o trilho: **P** (texto, cor, token, uma linha com teste) sem qa nem design; **M** com qa; **G** (tela ou fluxo novo, formato de dados) com a equipe toda.

Prioridade: **P0** bloqueia o uso ou atinge quem lê o resultado final; **P1** atrapalha bastante ou é o pedido principal; **P2** incomoda, há como contornar; **P3** acabamento.

## Fila (`npm run tickets`)

A lista não é versionada: PRs em paralelo conflitavam sempre na tabela do índice. O arquivo de cada ticket é a fonte; o `README.md` só explica o formato.

```
npm run tickets             # abertos, por prioridade e ID
npm run tickets -- fechados # fechados, do mais recente ao mais antigo
```

Abrir, mudar status ou fechar um ticket mexe só no arquivo dele. Nunca edite o `README.md` para listar ticket. Projeto sem o script: liste com `grep -m1 -H "^- Prioridade:" docs/tickets/T-*.md`.

## Criar tickets

1. Um achado vira um ticket. Achados que só fazem sentido juntos viram um ticket só.
2. Numere em sequência a partir do maior ID existente.
3. Critério de aceite verificável, sem prescrever a implementação quando houver mais de um jeito bom.
4. Commit: `docs(tickets): abre T-0NN a T-0MM (<origem>)`. Commits do trabalho citam o ticket no corpo (`Fecha T-0NN`).

## Trabalhar na fila

1. Pegue o ticket `aberto` de maior prioridade (empate: menor ID). Tickets que dependem de outro esperam.
2. Mude para `em andamento` antes de começar.
3. Siga o workflow: o ticket já é a spec; planeje se tiver mais de uma fatia.
4. Ao terminar: critérios marcados, `Registro` preenchido (commit, o que foi feito, o que ficou de fora), status `feito`, `git mv` do arquivo para `fechados/`. Isso entra no último commit do ticket ou num commit logo depois.
5. Achou trabalho novo no caminho? Uma linha em "Achados" no relatório, sem investigar. Quem decide se vira ticket é o supervisor ou a pessoa; não amplie o atual.
6. Trabalhe em lotes de 2 a 3 tickets por sessão e feche o lote com a skill `passagem`.

`descartado` precisa do motivo no `Registro` e também vai para `fechados/`.
