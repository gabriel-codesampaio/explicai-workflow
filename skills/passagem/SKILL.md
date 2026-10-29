---
name: passagem
description: "Registra o estado do trabalho para a próxima sessão continuar sem reler tudo - o que foi feito, o que falta, decisões e como verificar. Use ao encerrar uma sessão com trabalho pela metade."
---

# Passagem

Escreva em `docs/passagem.md` no projeto (ou na descrição do PR em rascunho), substituindo a anterior:

```markdown
# Passagem: <data>

## Objetivo
Uma frase, com link para a spec.

## Feito
- Fatia: commit `abc123`, verificada com `...`

## Em andamento
- O que estava sendo feito, em que arquivo, o que falta para fechar.

## Decisões
- Decisão e o motivo, uma linha cada.

## Próximos passos
1. ...

## Como verificar
`comando` → resultado esperado

## Atenção
Riscos, testes que falham, perguntas para a pessoa.
```

Não copie conversa nem log inteiro. A próxima sessão deve conseguir continuar lendo só este arquivo, a spec e o plano.
