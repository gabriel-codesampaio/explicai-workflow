---
name: entregar
description: "Abre a branch de trabalho no começo e, no fim, faz a checagem final, organiza os commits em etapas, envia e escreve o resumo ou o PR com descrição completa. Use ao começar a construir e ao terminar uma mudança."
---

# Entregar

## 1. Antes de construir: a branch

1. `git status`: a base está limpa? Se não, pergunte o que fazer com o que está pendente.
2. Atualize a branch principal e crie a de trabalho: `feature/<nome>`, `fix/<nome>` ou `docs/<nome>`.
3. Registre o nome da branch no plano.

## 2. Ao terminar: a checagem final

Rode a checagem completa do projeto (no `CLAUDE.md`: lint, tipos, testes e, se houver tela, os testes de ponta a ponta). Leia a saída. Falhou? Volte para a fase certa: não entregue.

## 3. Commits em etapas

- Um assunto por commit: núcleo, API, tela, testes, documentação podem ser commits separados.
- Cada commit passa na checagem sozinho. Não commite com a checagem falhando.
- Mensagem no idioma do projeto: a primeira linha diz o que mudou; o corpo, por quê e o que muda para quem usa.
- Inclua as linhas de autoria que o ambiente pedir.

## 4. Enviar

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
