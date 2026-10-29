---
name: revisar-codigo
description: "Revisa o diff de uma branch na proporção do risco - correção, testes, segurança, dados, manutenção e acessibilidade - e devolve achados com arquivo:linha e gravidade. Use antes de entregar qualquer mudança que não seja do caminho rápido."
---

# Revisar código

Revisão lê o código, não só o diff. Abra o que o diff chama e o que chama o diff.

## Passos

1. `git diff <base>...HEAD` e `git diff` (o que ainda não foi commitado). Liste os arquivos e classifique o risco de cada um.
2. Leia as regras do projeto (`CLAUDE.md`, `.claude/rules/`). Regra do projeto violada é achado.
3. Escolha as listas pelo risco. Não carregue todas:

| Mudou... | Carregue |
|----------|----------|
| regra de negócio, função pura, parser | [correcao-e-testes.md](correcao-e-testes.md) |
| dado vindo de fora, caminho de arquivo, HTML gerado, dependência | [seguranca-e-dados.md](seguranca-e-dados.md) |
| estrutura, arquivo novo, componente React | [manutencao.md](manutencao.md) |
| tela | [interface.md](interface.md) |

4. Rode a checagem do projeto e leia a saída.
5. Escreva os achados.

## Gravidade

| Nível | Quando |
|-------|--------|
| Bloqueia | Perda de dados, falha de segurança, comportamento errado, checagem falhando |
| Importante | Bug provável em caso de borda, teste faltando para comportamento novo, regra do projeto violada |
| Menor | Nome confuso, duplicação, comentário desatualizado |

## Relatório

```markdown
| Gravidade | Arquivo:linha | Problema | Como resolver |
|-----------|---------------|----------|---------------|
```

Termine com: checagem (passou/falhou), o que não foi revisado e por quê. Sem achado? Diga em uma linha. Não edite arquivos: quem corrige é o agente que construiu.
