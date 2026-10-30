---
name: entregar
description: "Abre a branch de trabalho no começo e, no fim, faz a checagem final, organiza os commits em etapas, envia e escreve o resumo ou o PR com descrição completa. Use ao começar a construir e ao terminar uma mudança."
---

# Entregar

## 1. Antes de construir: a branch

1. `git status`: a base está limpa? Se não, pergunte o que fazer com o que está pendente.
2. Atualize a branch principal e crie a de trabalho: `feature/<nome>`, `fix/<nome>` ou `docs/<nome>`.
3. Trabalhando como equipe, crie uma worktree **fora** da pasta da pessoa: `git worktree add <pasta temporária do sistema>/equipe/<repo>-<branch> <branch>`. Prints e arquivos de teste também vão para lá, nunca para dentro do workspace (eles viram ruído na sessão da pessoa). Remova a worktree na entrega.
3. Registre o nome da branch no plano.

## 2. Ao terminar: a checagem final

Na fatia, rode só os testes do que mudou (módulo e área tocados). A checagem completa só roda na **main mesclada, antes do push** (supervisor): rode-a lá (no `CLAUDE.md`: lint, tipos, testes e, se houver tela, os testes de ponta a ponta). Leia a saída. Falhou? Volte para a fase certa: não entregue.

## 3. Commits em etapas

- Um assunto por commit: núcleo, API, tela, testes, documentação podem ser commits separados.
- Cada commit passa na checagem sozinho. Não commite com a checagem falhando.
- Mensagem em Conventional Commits (`tipo(escopo): descrição`, ver [CONVENTIONS.md](../../CONVENTIONS.md#commits-e-entregas)), com a descrição no idioma do projeto; o corpo diz por quê e o que muda para quem usa.
- Inclua as linhas de autoria que o ambiente pedir.

## 4. Enviar

- Antes de todo push ou publicação, chame o agente `seguranca` para conferir se não vai segredo. Ele mandou parar? Não envie.
- Push da branch de trabalho: pode.
- Push na branch principal, merge, tag, publicação de pacote, PR: pergunte antes, com o resumo do que vai acontecer.

## 5. Descrição

PR ou resumo de entrega com:

```markdown
## O que muda
## Por quê
## Como testar
## Riscos e o que não foi testado
## Próximo passo
```

Metadados de pacote (descrição, palavras-chave, licença, repositório, link de problemas) conferidos antes de publicar, nos idiomas do projeto.
