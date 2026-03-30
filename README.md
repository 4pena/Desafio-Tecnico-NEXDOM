# Desafio Técnico NEXDOM - Testes Automatizados

Projeto de testes automatizados utilizando **Cypress** para validação do site [nexdom.tec.br](https://nexdom.tec.br/) e da API REST do GitHub.

## Estrutura do Projeto

```
cypress/
  e2e/
    API/
      Cenario 4.cy.js          # Testes de API REST - GitHub
    UI/
      Cenario 1.cy.js          # Verificação da Página Inicial
      Cenario 2.cy.js          # Navegação nas Páginas de Soluções
      Cenario 3.cy.js          # Submissão do Formulário de Contato
    features/
      Cenario 1.feature        # Gherkin - Página Inicial
      Cenario 2.feature        # Gherkin - Soluções
      Cenario 3.feature        # Gherkin - Formulário de Contato
      Cenario 4.feature        # Gherkin - API REST GitHub
  support/
    pageObjects/
      homePage.js              # Page Object - Página Inicial
      contatoPage.js           # Page Object - Página de Contato
```

## Cenários de Teste

### Cenário 1 — Verificação da Página Inicial
Valida os elementos do site: cabeçalho (logo, menu, dropdown de soluções), corpo (seções de conteúdo, vídeo, slider de diferenciais) e rodapé (contato, redes sociais, endereços, links).

### Cenário 2 — Navegação nas Páginas de Soluções
Acessa cada uma das 8 páginas de soluções pelo dropdown do menu e valida a URL e o título da página.

### Cenário 3 — Submissão do Formulário de Contato
Testa o formulário de contato com 5 cenários: dados válidos (com interceptação do POST), e-mail inválido, campos vazios, dados inválidos e submissão sem aceitar os termos.

### Cenário 4 — Testes de API REST - GitHub
Testa operações CRUD na API do GitHub: criar repositório, consultar repositório, criar issue, consultar issue, excluir repositório e verificar exclusão.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [Git](https://git-scm.com/)
- Token do GitHub (para o Cenário 4)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/4pena/Desafio-Tecnico-NEXDOM.git
cd Desafio-Tecnico-NEXDOM
```

2. Instale as dependências:
```bash
npm install
```

As dependências principais serão instaladas automaticamente:
- **cypress** — Framework de testes E2E
- **@faker-js/faker** — Geração de dados fictícios para os testes

## Configuração do Token GitHub (Cenario 4)

1. Acesse [GitHub > Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Gere um token **classic** com as permissões: `public_repo` e `delete_repo`
3. Adicione o token no `cypress.config.js` dentro de `e2e.env`:

```js
e2e: {
  env: {
    GITHUB_TOKEN: 'seu_token_aqui',
  },
}
```

## Execução dos Testes

Abrir o Cypress em modo interativo:
```bash
npx cypress open
```

Executar todos os testes via terminal:
```bash
npx cypress run
```

Executar um cenário específico:
```bash
npx cypress run --spec "cypress/e2e/UI/Cenario 1.cy.js"
npx cypress run --spec "cypress/e2e/UI/Cenario 2.cy.js"
npx cypress run --spec "cypress/e2e/UI/Cenario 3.cy.js"
npx cypress run --spec "cypress/e2e/API/Cenario 4.cy.js"
```

## Casos de Teste (Gherkin)

Os casos de teste documentados em formato Gherkin (BDD) estão na pasta `cypress/e2e/features/`. Cada arquivo `.feature` descreve os cenários em linguagem natural (português).

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Cypress | Framework de testes E2E |
| @faker-js/faker | Geração de dados fictícios (PT-BR) |
| Page Object Pattern | Organização dos elementos e ações |
| Gherkin (BDD) | Documentação dos casos de teste |
| GitHub REST API | Testes de API (Cenário 4) |
