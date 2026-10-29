# Política de contexto

Cada agente começa sem o histórico da conversa. O que ele recebe precisa caber em poucas linhas e conter o necessário para agir.

## Regras

- Carregue só a skill da fase atual, mais as [CONVENTIONS.md](CONVENTIONS.md) quando for implementar, verificar ou revisar.
- As listas de revisão do `revisar-codigo` entram só quando o risco pede.
- Prefira resumo estruturado a transcrição longa.
- Guarde decisões, riscos e evidência. Corte narrativa.
- Não repita a spec em toda fase: cite os critérios de aceite que importam.

## O que passa de uma fase para a outra

| Fase | Artefato |
|------|----------|
| Especificar | Problema; entra / fica de fora; critérios de aceite; riscos |
| Planejar | Fatias na ordem; para cada uma, como verificar |
| Construir | Arquivos tocados; decisões técnicas (uma linha cada); testes criados ou alterados |
| Verificar | Comandos rodados; passou ou falhou, com a saída que prova |
| Design | Larguras e temas vistos; o que mudou; prints antes e depois |
| Revisar | Achados com arquivo:linha e gravidade; o que bloqueia |
| Entregar | Resumo; riscos; próximo passo |

## Pedido do supervisor para um agente

Um bom pedido tem:

1. **Objetivo** em uma frase.
2. **Critérios de aceite** da fatia.
3. **Onde mexer:** arquivos ou pastas, e o que não tocar.
4. **Como verificar:** o comando ou o fluxo na tela.
5. **O que devolver:** o artefato da fase, no formato acima.
