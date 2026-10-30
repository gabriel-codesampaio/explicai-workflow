# Definição de pronto

Uma mudança está pronta quando:

- [ ] **O objetivo está claro:** problema, escopo e critérios de aceite entendidos.
- [ ] **O feito bate com o pedido:** o que ficou de fora está dito, com o motivo.
- [ ] **A checagem do projeto passou nesta sessão:** na fatia, os testes do que mudou; na main mesclada, antes do push, a suíte completa (lint, tipos, unidade e e2e), com a saída registrada.
- [ ] **Comportamento novo tem teste:** bug corrigido ganha um teste que falhava antes.
- [ ] **Tela nova foi vista funcionando:** no navegador, nos temas e larguras que o projeto suporta.
- [ ] **O diff foi revisado:** na proporção do risco.
- [ ] **Complexidade acidental saiu:** depois que o comportamento está protegido por teste.
- [ ] **Riscos estão ditos:** dados, segurança, mudança incompatível, o que não foi testado.
- [ ] **Commits estão em etapas:** cada um com um assunto só, em Conventional Commits, dizendo o que mudou e por quê.
- [ ] **Descrições estão certas:** PR, release e metadados do pacote completos, nos idiomas do projeto.
- [ ] **O próximo passo está explícito:** merge, PR, publicação, passagem ou tarefa seguinte.

## Por fase

| Fase | Pronto quer dizer |
|------|-------------------|
| Especificar | Spec curta, critérios de aceite e riscos |
| Planejar | Fatias na ordem, cada uma com o jeito de verificar |
| Branch | Base limpa e branch de trabalho criada |
| Construir | Código e teste do comportamento novo |
| Verificar | Relatório com os comandos rodados e o resultado de cada um |
| Design | Prints antes e depois, nas larguras e temas conferidos |
| Revisar | Achados por gravidade; bloqueios resolvidos ou aceitos por uma pessoa |
| Entregar | Checagem final passando, commits enviados, resumo com riscos e próximo passo |

## Caminho rápido

Para as mudanças pequenas descritas no [WORKFLOW.md](WORKFLOW.md#caminho-rápido), basta: entender, fazer, verificar, olhar o risco e resumir. A evidência continua obrigatória.
