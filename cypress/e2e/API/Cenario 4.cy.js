describe('Cenário 4: Testes de API REST - GitHub', () => {
  const token = Cypress.env('GITHUB_TOKEN');
  const baseUrl = 'https://api.github.com';
  const nomeRepo = 'Teste-Tecnico-NEXDOM';
  const descricaoRepo = 'Repositório criado via Cypress para teste de API';
  const tituloIssue = 'Issue de teste via Cypress';
  const descricaoIssue = 'Issue criada via Cypress para validação da API.';
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  let usuario;

  before(() => {
    // Buscar o username do usuário autenticado
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user`,
      headers,
    }).then((retorno) => {
      expect(retorno.status).to.eq(200);
      usuario = retorno.body.login;

      // Deletar repositório caso exista de uma execução anterior
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/repos/${usuario}/${nomeRepo}`,
        headers,
        failOnStatusCode: false,
      });
    });
  });

  it('Criar repositório no GitHub', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/user/repos`,
      headers,
      body: {
        name: nomeRepo,
        description: descricaoRepo,
        private: false,
        auto_init: true,
      },
    }).then((retorno) => {
      expect(retorno.status).to.eq(201);
      expect(retorno.body.name).to.eq(nomeRepo);
      expect(retorno.body.private).to.be.false;
      expect(retorno.body.description).to.eq(descricaoRepo);
    });
  });

  it('Consultar repositório criado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${usuario}/${nomeRepo}`,
      headers,
    }).then((retorno) => {
      expect(retorno.status).to.eq(200);
      expect(retorno.body.name).to.eq(nomeRepo);
      expect(retorno.body.owner.login).to.eq(usuario);
    });
  });

  it('Criar issue no repositório', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/repos/${usuario}/${nomeRepo}/issues`,
      headers,
      body: {
        title: tituloIssue,
        body: descricaoIssue,
        labels: ['bug'],
      },
    }).then((retorno) => {
      expect(retorno.status).to.eq(201);
      expect(retorno.body.title).to.eq(tituloIssue);
      expect(retorno.body.body).to.eq(descricaoIssue);
      expect(retorno.body.state).to.eq('open');
      expect(retorno.body.number).to.eq(1);
    });
  });

  it('Consultar issue criada', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${usuario}/${nomeRepo}/issues/1`,
      headers,
    }).then((retorno) => {
      expect(retorno.status).to.eq(200);
      expect(retorno.body.title).to.eq('Issue de teste via Cypress');
      expect(retorno.body.state).to.eq('open');
      expect(retorno.body.user.login).to.eq(usuario);
    });
  });

  it('Excluir repositório', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/repos/${usuario}/${nomeRepo}`,
      headers,
    }).then((retorno) => {
      expect(retorno.status).to.eq(204);
    });
  });

  it('Verificar que o repositório foi eliminado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${usuario}/${nomeRepo}`,
      headers,
      failOnStatusCode: false,
    }).then((retorno) => {
      expect(retorno.status).to.eq(404);
      expect(retorno.body.message).to.eq('Not Found');
    });
  });
});