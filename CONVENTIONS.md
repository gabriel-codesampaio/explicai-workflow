# Convenções

Regras que valem em todas as fases e para todos os agentes.

## Evidência antes de afirmar

- "Funciona" só depois de rodar o comando e ler a saída nesta sessão. Teste que passou ontem não conta.
- Relate o resultado como ele é: falhou, diga que falhou e mostre a saída. Pulou uma etapa, diga qual.
- Teste que falha de vez em quando não ganha repetição automática. Falha intermitente é pista de bug: investigue com `diagnosticar`.
- Tela só está pronta depois de vista no navegador.

## Código

- O projeto manda: siga o `CLAUDE.md`, as regras em `.claude/rules/` e o estilo do código em volta.
- SOLID, KISS e DRY. Quando conflitam, o mais simples vence: nada de abstração antes do segundo uso real.
- Pastas por responsabilidade e arquivos pequenos.
- A menor mudança que resolve o pedido inteiro. O que ficou de fora é dito, não escondido.
- Comentário explica o porquê que o código não mostra, em uma linha.
- Dependência nova só quando o projeto e a biblioteca padrão não resolvem, e com licença compatível.

## Commits e entregas

- Commits pequenos, um assunto por commit. O histórico é lido por outras pessoas (inclusive no LinkedIn).
- Mensagem no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `tipo(escopo): descrição`.
  - Tipos: `feat` (recurso novo), `fix` (correção), `docs`, `test`, `refactor`, `style` (formatação), `perf`, `build`, `ci`, `chore`.
  - Escopo é a parte do projeto (`export`, `editor`, `core`); pode faltar.
  - Descrição no idioma do projeto, no imperativo e sem ponto final: `feat(export): embute as fontes da marca no HTML`.
  - O corpo diz por quê e o que muda para quem usa. Mudança incompatível leva `!` depois do tipo e `BREAKING CHANGE:` no corpo.
- Nunca commitar com a checagem do projeto falhando. Se o commit entrou errado, corrija num commit seguinte.
- PR, release e metadados de pacote com descrição completa: o que muda, por quê, como testar, riscos.
- Push na branch principal, publicação e PR só com confirmação de uma pessoa.

## Texto

- Sem "tom de IA" em nada que outra pessoa vai ler (interface, README, PR, post). Evite: "não é X, é Y", frase de efeito no fim do parágrafo, trios forçados, travessão como conector, negrito em todo item, palavras infladas.
- Interface: frases curtas, "você", o botão diz o que acontece, o erro diz o que deu errado e como resolver.
- Não citar nem comparar com concorrentes.

## Comunicação entre agentes

- Devolva o resultado em poucas linhas: o que mudou (arquivo:linha), o que foi verificado e como, o que ficou pendente.
- Não repita o pedido nem a spec inteira; cite o trecho.
- Achou algo fora da sua fatia? Anote e devolva ao supervisor. Não amplie o escopo por conta própria.
