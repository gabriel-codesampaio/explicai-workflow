---
name: escrever-post
description: "Escreve um post do blog sobre a construção do projeto (série 'Explicaí #N' no codesampa.io), em pt-BR e en-US, a partir do que de fato aconteceu: commits, tickets, testes e números. Use quando pedirem um post, um texto para o blog ou um resumo público de uma fase do projeto."
---

# Escrever post

## Onde fica

Repositório `gabriel-codesampaio/codesampa.io-content` (clone local em `Desktop/codesampa.io/codesampa.io-content`):

```
blog/pt-BR/<slug>.mdx
blog/en-US/<slug>.mdx     mesmo slug nas duas línguas
```

Rascunhos e cópia de trabalho também ficam em `Manual/blog/pt-BR` e `Manual/blog/en-US`. Slug da série: `explicai-NN-<assunto>` (ex.: `explicai-03-testes-e-exportacao`).

Cabeçalho, igual nos dois idiomas, traduzido:

```yaml
---
title: 'Explicaí #N: <o que aconteceu, com a tensão do post>'
description: '<duas frases: o que foi feito e o que se aprendeu>'
date: AAAA-MM-DD
published: false
tags: ['Integração de IA', 'Claude Code', 'Open Source', 'Explicaí', '<tema>']
comments: false
---
```

`published: false` sempre. Quem publica é a pessoa.

## Antes de escrever: os fatos

1. Leia o post anterior da série, para continuar de onde ele parou (o "próximo passo" dele).
2. Junte o que aconteceu desde então, em fontes de verdade: `git log` dos repositórios do projeto, tickets fechados (`docs/tickets/`), críticas (`.impeccable/critique/`), resultados de teste, números medidos.
3. Escolha **uma** história central (um bug que enganou, uma decisão difícil, uma virada) e no máximo três seções de apoio. Post não é changelog.
4. Todo número, nome e data do texto precisa estar nessas fontes. Não invente depoimento, métrica ou usuário.

## Como escrever

- Primeira pessoa do plural ("testamos", "decidimos"), tom de quem conta o que fez, sem vender.
- Abertura: onde o post anterior parou e o que estava em jogo nesta fase.
- Cada seção conta um fato concreto: o que tentamos, o que deu errado, como descobrimos, o que mudou.
- Errar e corrigir aparece como foi, inclusive palpite errado.
- Fechamento: o que fica (números da fase) e o próximo passo, sem frase de efeito.
- Sem citar nem comparar com concorrentes.
- Termos técnicos explicados na primeira vez, para quem não é dev.
- 900 a 1300 palavras.

## Revisão obrigatória

1. Carregue a skill `humanizer` e passe o texto pt-BR por ela (modo arquivo). Atenção aos sinais mais comuns: "não é X, é Y", frase de efeito no fim do parágrafo, trios forçados, travessão como conector, negrito em lista, palavras infladas.
2. Confira de novo cada número e afirmação contra as fontes.
3. Escreva o en-US como tradução fiel do pt-BR final: mesmos fatos, mesma estrutura, inglês natural. Passe pelo `humanizer` também.
4. Título e descrição: se quiser, use a skill `conversion-copywriting` só para eles, sem prometer o que o post não entrega.

## Entregar

1. No repositório de conteúdo: branch `post/explicai-NN`, os dois arquivos, commit `docs(blog): adiciona o post Explicaí #N (pt-BR e en-US)`.
2. Push da branch. PR e publicação são da pessoa: devolva o link de PR que o GitHub mostrar.
3. Devolva: título, as fontes usadas para os fatos, o que foi cortado e por quê, e o link.
