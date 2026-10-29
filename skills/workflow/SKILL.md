---
name: workflow
description: "Mapa do workflow da equipe (especificar, planejar, construir, verificar, design, revisar, entregar) e de qual agente faz cada fase. Use ao receber um pedido novo para decidir o caminho, ou quando não souber qual fase vem a seguir."
---

# Workflow da equipe

Leia [WORKFLOW.md](../../WORKFLOW.md) para as fases e [DEFINITION_OF_DONE.md](../../DEFINITION_OF_DONE.md) para saber quando parar.

## Decidir o caminho

1. O pedido é pequeno, seguro e localizado? Use o caminho rápido do WORKFLOW.md e pule para construir.
2. Senão, siga as fases na ordem. Cada fase tem uma skill:

| Fase | Skill | Agente |
|------|-------|--------|
| Especificar | `especificar` | supervisor |
| Planejar | `planejar` | supervisor |
| Branch | `entregar` (passo 1) | supervisor |
| Construir | `tdd` | frontend |
| Verificar | `verificar`, `testar-interface` | qa |
| Design (se tem tela) | `revisar-design` | design |
| Revisar | `revisar-codigo` | code-reviewer |
| Entregar | `entregar` | supervisor |

Fora do caminho: `diagnosticar` (bug cuja causa não é óbvia) e `passagem` (encerrar a sessão com trabalho pela metade).

Fila de trabalho: `tickets` (transformar achados em tickets em `docs/tickets/` e trabalhar neles por prioridade).

Comunicação: `caveman` (respostas curtíssimas; o supervisor usa nos pedidos aos agentes e nos relatórios).

## Contratos

Entre uma fase e outra passa só o artefato descrito em [CONTEXT_POLICY.md](../../CONTEXT_POLICY.md). Um agente que recebe um pedido sem critério de aceite ou sem jeito de verificar devolve a pergunta ao supervisor antes de começar.

## Paralelo

Fatias que não mexem nos mesmos arquivos podem ir em paralelo, cada agente numa worktree. Fatias que mexem no mesmo arquivo vão em sequência.

## Pare e pergunte

Antes de: push na branch principal, publicar pacote, abrir PR, apagar dados, mudar formato de arquivo salvo, adicionar dependência. Essas decisões são de uma pessoa.
