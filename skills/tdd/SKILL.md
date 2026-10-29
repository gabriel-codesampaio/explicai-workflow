---
name: tdd
description: "Constrói uma fatia com teste primeiro (vermelho, verde, refatorar), seguindo a arquitetura do projeto. Use ao implementar comportamento novo ou corrigir bug."
---

# Construir com teste primeiro

## Ciclo

1. **Vermelho.** Escreva o teste do comportamento que falta, no estilo dos testes que o projeto já tem. Rode e confirme que falha pelo motivo certo (não por erro de importação).
2. **Verde.** Escreva o mínimo de código que faz o teste passar. Rode de novo.
3. **Refatorar.** Com o teste verde, limpe: nomes, duplicação, arquivo grande demais. Rode de novo.
4. Repita até cobrir os critérios de aceite da fatia.

Bug: o primeiro teste reproduz o bug e falha. A correção vai na causa, no código compartilhado, e não em cada lugar que chama.

## Antes de escrever

- Leia o código que a fatia toca e o que chama ele.
- Procure no projeto o que já resolve parte do problema (função, componente, padrão). Reaproveite.
- Siga as regras do projeto (`CLAUDE.md`, `.claude/rules/`): camadas, pastas, idioma dos comentários.

## O que testar

- Comportamento observável, não detalhe de implementação.
- Casos de borda que importam: vazio, muito grande, dado vindo de fora estragado, caractere especial.
- Ida e volta para tudo que é salvo e lido de novo: salvar e abrir não pode mudar o conteúdo.
- Sem mock do que dá para usar de verdade barato (disco em pasta temporária, servidor numa porta livre).

## Ao terminar a fatia

Devolva ao supervisor:

```markdown
- Arquivos: caminho:linha, o que mudou
- Decisões: uma linha cada
- Testes: criados/alterados e o comando que passou
- Pendente: o que ficou de fora e por quê
```

Não faça commit: o supervisor organiza os commits na entrega.
