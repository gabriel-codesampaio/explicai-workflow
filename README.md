# Explicaí Workflow

O jeito de trabalhar do projeto [Explicaí](https://github.com/gabriel-codesampaio/explicai-studio) com o Claude Code: uma equipe de agentes e as skills de cada fase, do pedido até a entrega.

É um plugin do Claude Code. Instalado num projeto, ele traz oito agentes e catorze skills. Os comandos de cada projeto (testar, checar, construir) continuam no `CLAUDE.md` dele: o workflow não supõe uma stack.

## A equipe

| Agente | Papel |
|--------|-------|
| `supervisor` | Recebe o pedido, especifica, planeja em fatias, distribui, junta os resultados e entrega |
| `frontend` | Implementa cada fatia com teste primeiro |
| `design` | Confere a tela no navegador contra a marca e faz o acabamento visual |
| `qa` | Escreve e roda testes de unidade e de ponta a ponta e junta a evidência |
| `code-reviewer` | Revisa o diff por risco e roda a checagem, sem editar nada |
| `escritor` | Escreve os posts do blog sobre a construção do projeto, em pt-BR e en-US, a partir de commits e números reais |
| `seguranca` | Avalia o que se pede para instalar (skill, agente, plugin, MCP) e confere o que vai subir para não vazar segredo |
| `discovery` | Acha features novas e torna factível uma ideia solta: pesquisa, opções com esforço e riscos, rascunho de spec |

## As fases

**Especificar → Planejar → Branch → Construir → Verificar → Design → Revisar → Entregar**

Construir, verificar e design se repetem para cada fatia. A revisão olha a branch inteira no fim. Mudança pequena e segura usa o caminho rápido: entender, fazer, verificar, olhar o risco e resumir.

| Fase | Skill |
|------|-------|
| Especificar | `especificar` |
| Planejar | `planejar` |
| Branch e entrega | `entregar` |
| Construir | `tdd` |
| Verificar | `verificar`, `testar-interface` |
| Design | `revisar-design` |
| Revisar | `revisar-codigo` |
| Fora do caminho | `diagnosticar`, `passagem` |
| Fila de trabalho | `tickets` |
| Comunicação curta | `caveman` (o supervisor usa nos pedidos e relatórios) |
| Blog | `escrever-post` (o escritor usa, com o `humanizer`) |
| Mapa geral | `workflow` |

Leia mais em [WORKFLOW.md](WORKFLOW.md), [DEFINITION_OF_DONE.md](DEFINITION_OF_DONE.md), [CONVENTIONS.md](CONVENTIONS.md) e [CONTEXT_POLICY.md](CONTEXT_POLICY.md).

## Instalar

No Claude Code:

```
/plugin marketplace add gabriel-codesampaio/explicai-workflow
/plugin install explicai-workflow@explicai-workflow
```

Para o projeto oferecer o plugin a quem abrir o repositório, coloque no `.claude/settings.json` dele:

```json
{
  "extraKnownMarketplaces": {
    "explicai-workflow": { "source": { "source": "github", "repo": "gabriel-codesampaio/explicai-workflow" } }
  },
  "enabledPlugins": { "explicai-workflow@explicai-workflow": true }
}
```

Para testar uma cópia local sem instalar: `claude --plugin-dir caminho/para/explicai-workflow`.

### Plugins e skills que a equipe usa, se estiverem instalados

- `design` usa o plugin [impeccable](https://github.com/pbakaus/impeccable) para crítica e acabamento.
- `frontend` e `code-reviewer` usam as skills `vercel-react-best-practices` e `vercel-composition-patterns` (`npx skills add vercel-labs/agent-skills`) em projetos React.
- `design` e `qa` usam o Chrome DevTools MCP para ver a tela de verdade.
- `escritor` usa o plugin [humanizer](https://github.com/blader/humanizer) para tirar o tom de IA e, se instaladas, as skills `brand` e `conversion-copywriting`.

Sem eles, os agentes funcionam, só que sem essas checagens extras.

## Usar

Peça ao supervisor: `@supervisor exportar o manual em CSV`. Ele especifica, planeja e chama os outros agentes. Também dá para chamar um agente direto (`@qa rode os testes de ponta a ponta e confira a tela de exportação`) ou abrir uma sessão já como supervisor: `claude --agent supervisor`.

Cada agente gasta contexto próprio. Para ajuste pequeno, peça direto, sem a equipe.

## Créditos

A estrutura em fases, a definição de pronto e a política de contexto foram inspiradas no [ai-workflow](https://github.com/Rheyder/ai-workflow) do Rheyder, que por sua vez se baseia em [mattpocock/skills](https://github.com/mattpocock/skills) e [obra/superpowers](https://github.com/obra/superpowers). O texto e as regras daqui são do Explicaí.

## English

Claude Code plugin with the Explicaí development workflow: an agent team (supervisor, frontend, design, QA, code reviewer) and one skill per phase (spec, plan, test-first build, verify, design review, code review, ship, plus diagnose and handoff). Content is in Brazilian Portuguese. Install with `/plugin marketplace add gabriel-codesampaio/explicai-workflow` and `/plugin install explicai-workflow@explicai-workflow`.

## Licença

MIT. Um projeto [codesampa.io](https://codesampa.io).
