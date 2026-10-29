---
name: especificar
description: "Transforma um pedido, ideia ou bug numa spec curta com escopo, critérios de aceite e riscos. Use no começo de qualquer mudança que não seja do caminho rápido."
---

# Especificar

O objetivo é que qualquer agente consiga trabalhar a partir da spec sem ler a conversa.

## Passos

1. Leia o pedido e o código que ele toca. Procure no projeto o que já existe para isso (documentação, `CLAUDE.md`, regras, testes).
2. Liste as dúvidas que mudam o que vai ser feito. Responda o que o código responde. O resto vira pergunta para a pessoa, com opções concretas e uma recomendação.
3. Escreva a spec no formato abaixo. Curta: meia página costuma bastar.

## Formato

```markdown
# <nome da mudança>

## Problema
Uma ou duas frases: o que está errado ou falta, e para quem.

## Entra
- ...

## Fica de fora
- ... (com o motivo, quando não for óbvio)

## Critérios de aceite
- [ ] Comportamento observável, verificável por teste ou na tela.

## Riscos
- Dados, segurança, compatibilidade, desempenho. "Nenhum conhecido" é uma resposta válida.
```

## Onde guardar

Spec pequena vai na própria conversa ou na descrição do PR. Spec grande vai em `docs/specs/<nome>.md` no projeto, e entra no commit da primeira fatia.

## Cuidados

- Critério de aceite descreve o que se vê, não como implementar.
- Não invente requisito. O que a pessoa não pediu entra em "fica de fora" ou vira pergunta.
