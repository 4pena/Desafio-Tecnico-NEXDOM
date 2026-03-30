Funcionalidade: Submissão do Formulário de Contato
  Como um usuário
  Eu quero preencher e enviar o formulário de contato
  Para entrar em contato com a NEXDOM

  Contexto:
    Dado que o usuário acessa a página de contato "https://nexdom.tec.br/contato/"
    E o título "Entre em contato conosco de forma fácil e rápida." deve estar visível

  Cenário: Submissão com dados válidos
    Quando o usuário preenche o formulário com dados válidos:
      | campo    | valor                    |
      | Nome     | <nome aleatório>         |
      | E-mail   | <email aleatório>        |
      | Empresa  | <empresa aleatória>      |
      | Cargo    | <cargo aleatório>        |
      | Telefone | <telefone aleatório>     |
      | Assunto  | <assunto aleatório>      |
    E aceita os termos de uso
    E clica no botão "Enviar"
    Então a requisição POST deve ser enviada com status 200
    E o corpo da requisição deve conter os dados preenchidos

  Cenário: Submissão com e-mail inválido
    Quando o usuário preenche o formulário com:
      | campo    | valor            |
      | Nome     | <nome aleatório> |
      | E-mail   | emailinvalido    |
      | Empresa  | <empresa aleatória> |
    E clica no botão "Enviar"
    Então o campo "E-mail" deve exibir mensagem de validação informando que falta o "@"

  Cenário: Submissão com campos obrigatórios vazios
    Quando o usuário clica no botão "Enviar" sem preencher o formulário
    Então o campo "Nome" deve exibir a mensagem "Preencha este campo."

  Cenário: Submissão com dados inválidos
    Quando o usuário preenche o formulário com dados inválidos:
      | campo    | valor   |
      | Nome     | 12345   |
      | E-mail   | abc@    |
      | Empresa  | !!!     |
      | Cargo    | ---     |
      | Telefone | abcdef  |
      | Assunto  |         |
    E aceita os termos de uso
    E clica no botão "Enviar"
    Então o campo "E-mail" deve exibir mensagem de validação

  Cenário: Submissão sem aceitar os termos de uso
    Quando o usuário preenche o formulário com dados válidos:
      | campo    | valor                    |
      | Nome     | <nome aleatório>         |
      | E-mail   | <email aleatório>        |
      | Empresa  | <empresa aleatória>      |
    E o checkbox de termos de uso NÃO está marcado
    E clica no botão "Enviar"
    Então o formulário não deve ser enviado
