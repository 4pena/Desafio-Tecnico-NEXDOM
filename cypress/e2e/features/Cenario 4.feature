Funcionalidade: Testes de API REST - GitHub
  Como usuário da API do GitHub
  Quero criar, consultar e excluir repositórios e issues
  Para validar os endpoints da API REST

  Contexto:
    Dado que o usuário está autenticado na API do GitHub
    E qualquer repositório remanescente de execuções anteriores é removido

  Cenário: Criar repositório no GitHub
    Quando enviar uma requisição POST para criar o repositório "Teste-Tecnico-NEXDOM"
    Então o status da resposta deve ser 201
    E o nome do repositório deve ser "Teste-Tecnico-NEXDOM"
    E o repositório deve ser público
    E a descrição deve ser "Repositório criado via Cypress para teste de API"

  Cenário: Consultar repositório criado
    Quando enviar uma requisição GET para consultar o repositório "Teste-Tecnico-NEXDOM"
    Então o status da resposta deve ser 200
    E o nome do repositório deve ser "Teste-Tecnico-NEXDOM"
    E o dono do repositório deve ser o usuário autenticado

  Cenário: Criar issue no repositório
    Quando enviar uma requisição POST para criar uma issue no repositório
    Então o status da resposta deve ser 201
    E o título da issue deve ser "Issue de teste via Cypress"
    E o corpo da issue deve ser "Esta issue foi criada automaticamente pelo Cypress para validação da API."
    E o estado da issue deve ser "open"
    E o número da issue deve ser 1

  Cenário: Consultar issue criada
    Quando enviar uma requisição GET para consultar a issue número 1
    Então o status da resposta deve ser 200
    E o título da issue deve ser "Issue de teste via Cypress"
    E o estado da issue deve ser "open"
    E o autor da issue deve ser o usuário autenticado

  Cenário: Excluir repositório
    Quando enviar uma requisição DELETE para excluir o repositório
    Então o status da resposta deve ser 204

  Cenário: Verificar que o repositório foi eliminado
    Quando enviar uma requisição GET para consultar o repositório excluído
    Então o status da resposta deve ser 404
    E a mensagem deve ser "Not Found"
