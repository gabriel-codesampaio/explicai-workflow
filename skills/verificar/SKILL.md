---
name: verificar
description: "Junta evidência de que uma fatia funciona: roda os testes do que a fatia tocou e confere cada critério de aceite. Use depois de construir cada fatia e antes da revisão."
---

# Verificar a fatia

## Passos

1. Rode só o que a demanda pede (comandos no `CLAUDE.md`): os testes de unidade do módulo tocado e o lint/tipos se o código mudou. Leia a saída inteira, não só o resumo. A suíte completa não roda por fatia: é da main mesclada, antes do push (`entregar`).
2. Rode os testes de ponta a ponta da área tocada (`-g` ou por arquivo). Se a fatia tem tela, siga também `testar-interface`.
3. Para cada critério de aceite, diga como ele foi provado: qual teste, qual comando, qual print.
4. Procure o que pode ter quebrado em volta: quem chama o código alterado, dados já salvos no formato antigo, o outro tema, a tela estreita.

## Teste que falha às vezes

Não reroda até passar e não coloca repetição automática. Falha intermitente quase sempre é condição de corrida, ordem de eventos ou estado vazando entre testes. Repita o teste várias vezes (ex.: `--repeat-each 15`) para medir a taxa, e passe para `diagnosticar`.

## Relatório

```markdown
## Verificação: <fatia>
| Critério | Como foi provado | Resultado |
|----------|------------------|-----------|
| ... | teste X / comando Y / print Z | passou / falhou |

- Comandos: `...` → saída relevante
- Regressões procuradas: ...
- Defeitos encontrados: arquivo:linha, como reproduzir (vão para o frontend)
```

Defeito encontrado volta para o agente que construiu, com o passo a passo para reproduzir. Quem verifica não corrige o código de produção.
