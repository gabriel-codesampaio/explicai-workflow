# Segurança e dados

- Caminho vindo de fora passa por uma função que impede sair da pasta permitida (`../`)?
- Conteúdo da pessoa entra em HTML sem escape? Link aceita `javascript:` ou outro protocolo perigoso?
- Servidor local aceita só localhost? Valida Host e Origin?
- Gravação de arquivo é atômica (arquivo temporário e renomear)? Uma falha no meio pode deixar o arquivo pela metade?
- Algo é apagado sem volta? Existe lixeira ou confirmação?
- Mudou o formato de algo salvo em disco? A documentação do formato e a versão acompanham? Arquivos antigos continuam abrindo?
- Dependência nova: licença compatível (nada GPL/AGPL num projeto MIT), mantida, necessária?
- Segredo, token ou dado pessoal em código, log ou commit?
