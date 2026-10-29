# Correção e testes

- O código faz o que o critério de aceite pede, inclusive nos casos de borda (vazio, um item, muitos, valor fora da faixa)?
- Erros de fora (disco, rede, entrada da pessoa) são tratados e viram mensagem clara, sem engolir a falha?
- Assíncrono: há corrida entre duas ações rápidas? Estado lido antes de atualizar? Promessa sem tratamento?
- Tudo que é salvo e lido de novo volta igual? Há teste de ida e volta?
- Comportamento novo tem teste; bug corrigido tem teste que falhava antes.
- Os testes provam o comportamento, ou só repetem a implementação? Mock esconde o que deveria ser testado?
- Teste com espera por tempo fixo, ou dependente da ordem de execução?
