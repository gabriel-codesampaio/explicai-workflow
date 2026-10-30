---
name: revisar-design
description: "Confere uma tela no navegador contra a marca do projeto e corrige o visual - hierarquia, tipografia, cor, espaçamento, estados e o que dá \"cara de feito por IA\". Use em toda fatia que muda tela, ou quando pedirem crítica ou acabamento de design."
---

# Revisar design

## Antes de olhar

1. Leia o contexto de marca do projeto. Se houver `docs/marca-resumo.md`, ele basta; senão, `PRODUCT.md` e `DESIGN.md`. Sem isso, a crítica vira gosto pessoal.
2. Carregue a skill `impeccable` (plugin impeccable) e siga o comando que o pedido pede. No dia a dia (fim de lote) use `audit`, mais barato; `polish` para acabamento. A `critique` completa só no fecho de um marco (fim de fila, antes de versão nova) ou quando a pessoa pedir.

A crítica completa do `impeccable` (duas avaliações em paralelo) custa caro: rode só no fecho de um marco ou quando a pessoa pedir. No fim de lote, `audit` basta.

## O que procurar

**Cara de feito por IA.** Cada item abaixo, sozinho, é comum; juntos, denunciam o gerado:

- componentes da biblioteca no visual padrão (cinza neutro, raio igual em tudo, sombra igual em tudo);
- tudo centralizado e com o mesmo peso, sem um ponto que chame o olho primeiro;
- botão com ícone e texto em todo lugar, inclusive onde o texto basta;
- texto cinza claro e pequeno em excesso;
- marca só no logo, sem aparecer nos detalhes do produto;
- estado vazio genérico ("Nada aqui ainda").

Para cada achado, proponha uma troca concreta que venha da marca (cor, fonte, metáfora, tom de voz) e não de uma tendência.

**Fundamentos.** Hierarquia, alinhamento, ritmo de espaçamento, escala tipográfica, contraste nos dois temas, foco visível, larguras de 375 a 2560.

## Como trabalhar

- Veja a tela de verdade no navegador (Chrome DevTools MCP). Três prints por tela: 1440 claro, 1440 escuro, 375 claro. Medidas (largura, contraste, transbordo) por script, não por print.
- Mude estilo e marcação, não regra de negócio. Tokens de cor e fonte ficam no arquivo de tokens do projeto, não espalhados nos componentes.
- Depois de mudar, rode a checagem do projeto e confira a tela de novo.

## Relatório

O que mudou (arquivo:linha), prints antes e depois, o que ficou para depois e por quê.
