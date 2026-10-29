---
name: planejar
description: "Quebra uma spec em fatias verticais pequenas, na ordem certa, cada uma com o jeito de verificar e o agente responsável. Use depois de especificar e antes de construir."
---

# Planejar

## Fatia vertical

Uma fatia entrega um pedaço que funciona de ponta a ponta (dado, regra, tela), pequeno o bastante para um commit. "Criar todos os tipos" não é fatia; "exportar o manual em Markdown com uma página simples" é.

## Passos

1. Liste as fatias. Comece pela que prova o caminho mais arriscado.
2. Ordene por dependência e risco. Marque quais podem ir em paralelo (não tocam os mesmos arquivos).
3. Para cada fatia, escreva:

```markdown
### Fatia N: <nome>
- Entrega: o que passa a funcionar.
- Arquivos: onde mexer (e o que não tocar).
- Verificação: teste a escrever e comando a rodar; fluxo na tela, se tiver tela.
- Agente: frontend | design | qa
- Paralela com: fatia X | nenhuma
```

4. Feche com a ordem final e o que fica para depois.

## Cuidados

- Mudança no formato de dados salvos vem numa fatia própria, com teste de ida e volta.
- Fatia de tela termina com a verificação no navegador e a passagem pelo agente de design.
- Se uma fatia passa de um dia de trabalho, quebre de novo.
