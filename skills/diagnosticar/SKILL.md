---
name: diagnosticar
description: "Acha a causa de um bug difícil ou de um teste que falha às vezes, medindo em vez de chutar. Use quando a causa não é óbvia, quando a primeira correção não resolveu ou quando um teste é \"instável\"."
---

# Diagnosticar

Palpite não é causa. A correção só vem depois de reproduzir e de ver o mecanismo.

## Passos

1. **Reproduzir.** Ache o menor caminho que mostra o problema. Se é intermitente, repita até ter uma taxa (ex.: 7 falhas em 15). Sem reproduzir, não há como saber se consertou.
2. **Medir.** Registre o estado a cada passo do caminho (valores, seleção, ordem de eventos, requisições). Um teste de diagnóstico descartável que imprime o estado vale mais que ler código.
3. **Separar hipóteses.** Para cada uma, diga o que a mediria e meça. Descarte as que os dados negam.
4. **Corrigir a causa.** No código compartilhado, uma vez. Explique o mecanismo num comentário de uma linha se ele não for óbvio.
5. **Provar.** O teste que reproduzia passa repetidas vezes (mesma rodada que antes falhava). Crie um teste definitivo que pega o bug se ele voltar.
6. **Limpar.** Apague os testes e logs de diagnóstico.

## Sinais comuns

- Falha só quando o teste é rápido: evento ainda não processado, estado lido antes de atualizar.
- Falha só em sequência: estado vazando entre testes, porta ou pasta compartilhada.
- Funciona na primeira vez, quebra depois: cache, dado salvo num formato que muda a cada gravação.
- "Corrigi e piorou": a hipótese estava errada. Volte ao passo 2; a falha mais frequente ao menos ficou mais fácil de medir.

## Relatório

Sintoma, como reproduzir, causa (o mecanismo), correção (arquivo:linha), prova (antes e depois).
