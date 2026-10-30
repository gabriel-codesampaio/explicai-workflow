# Workflow

Como uma mudança anda do pedido até a entrega. Vale para pessoas e para os agentes da equipe.

## Fases

| # | Fase | O que sai dela | Quem faz | Skill |
|---|------|----------------|----------|-------|
| 1 | Especificar | Problema, o que entra e o que fica de fora, critérios de aceite, riscos | Supervisor | `especificar` |
| 2 | Planejar | Fatias pequenas, na ordem, cada uma com o jeito de provar que funciona | Supervisor | `planejar` |
| 3 | Branch | Base limpa e uma branch de trabalho | Supervisor | `entregar` (início) |
| 4 | Construir | A menor mudança útil, com teste | Frontend | `tdd` |
| 5 | Verificar | Evidência de que a fatia funciona: comando rodado, resultado, print | QA | `verificar`, `testar-interface` |
| 6 | Design | A tela de verdade conferida contra a marca, em telas largas e estreitas | Design | `revisar-design` |
| 7 | Revisar | Achados por gravidade, bloqueios resolvidos ou aceitos | Code Review | `revisar-codigo` |
| 8 | Entregar | Checagem final, commits em etapas, push, PR com descrição certa | Supervisor | `entregar` |

As fases 4 e 5 se repetem por fatia. Design (6) e revisão (7) passam uma vez no fim do lote. O tamanho do ticket escolhe quem entra: **P** sem qa nem design, **M** com qa, **G** com a equipe toda.

Quando algo quebra e a causa não é óbvia, qualquer agente para e usa `diagnosticar`. Ao terminar uma sessão com trabalho pela metade, o supervisor usa `passagem`.

## Caminho rápido

Para mudança pequena, segura e localizada (texto de interface, cor, um bug de uma linha com teste):

1. Entender o pedido.
2. Fazer a menor mudança.
3. Rodar a verificação do projeto.
4. Olhar o risco do que mudou.
5. Resumir em poucas linhas.

Não use o caminho rápido quando houver: regra nova, mudança no formato dos dados salvos, segurança, dependência nova, integração externa ou comportamento esperado que não está claro.

## Regras

- Cada fase carrega só o que precisa ([CONTEXT_POLICY.md](CONTEXT_POLICY.md)).
- Nada é dado como pronto sem evidência desta sessão ([CONVENTIONS.md](CONVENTIONS.md#evidência-antes-de-afirmar)).
- O pronto é o da [DEFINITION_OF_DONE.md](DEFINITION_OF_DONE.md).
- Ações sem volta (push na branch principal, publicar pacote, apagar dados, abrir PR) pedem confirmação de uma pessoa.
- Os comandos (testar, checar, construir) vêm do projeto, no `CLAUDE.md` dele. O workflow não supõe uma stack.

## A equipe

| Agente | Papel | Não faz |
|--------|-------|---------|
| `supervisor` | Recebe o pedido, especifica, planeja, distribui as fatias, junta os resultados e entrega | Não implementa fatia grande sozinho quando há agente para ela |
| `frontend` | Implementa a fatia com teste, seguindo as regras de arquitetura do projeto | Não faz commit nem push |
| `design` | Abre a tela no navegador, compara com a marca e corrige o visual | Não muda regra de negócio |
| `qa` | Escreve e roda testes de unidade e de ponta a ponta, junta evidência | Não corrige o código de produção: devolve o defeito para o `frontend` |
| `code-reviewer` | Revisa o diff por risco e roda a checagem do projeto | Não edita arquivos |

O supervisor chama os outros. Fatias independentes podem ir em paralelo, cada uma numa cópia isolada do repositório (worktree), para os agentes não se atropelarem.
