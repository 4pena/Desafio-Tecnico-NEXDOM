import ContatoPage from '../../support/pageObjects/contatoPage';
import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Cenário 3: Submissão do Formulário de Contato', () => {
  const contatoPage = new ContatoPage();

  beforeEach(() => {
    contatoPage.visitar();
    contatoPage.getTituloPagina().invoke('text').then((texto) => {
      const textoNormalizado = texto.replace(/\s+/g, ' ').trim();
      expect(textoNormalizado).to.eq('Entre em contato conosco de forma fácil e rápida.');
    });
  });
  it('Submissão com dados válidos', () => {
    cy.intercept('POST', '**/admin-ajax.php').as('envioFormulario');

    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      empresa: faker.company.name(),
      cargo: faker.person.jobTitle(),
      telefone: faker.phone.number({ style: 'national' }),
      assunto: faker.lorem.sentence(),
    };

    contatoPage.preencherFormulario(dados);
    contatoPage.aceitarTermos();
    contatoPage.enviar();

    cy.wait('@envioFormulario').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      const body = interception.request.body;
      expect(body).to.include(dados.nome);
      expect(body).to.include(dados.email);
      expect(body).to.include(dados.empresa);
      expect(body).to.include(dados.cargo);
      expect(body).to.include(dados.telefone);
      expect(body).to.include(dados.assunto);
    });
  });

  it('Submissão com e-mail inválido', () => {
    contatoPage.preencherFormulario({
      nome: faker.person.fullName(),
      email: 'emailinvalido',
      empresa: faker.company.name(),
    });
    contatoPage.enviar();
    contatoPage.getCampoEmail().then(($input) => {
      expect($input[0].validationMessage).to.include('@');
      expect($input[0].validationMessage).to.include('emailinvalido');
    });
  });

  it('Submissão com campos obrigatórios vazios', () => {
    contatoPage.enviar();
    contatoPage.getCampoNome().then(($input) => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.');
    });
  });

  it('Submissão com dados inválidos', () => {
    contatoPage.preencherFormulario({
      nome: '12345',
      email: 'abc@',
      empresa: '!!!',
      cargo: '---',
      telefone: 'abcdef',
      assunto: '',
    });
    contatoPage.aceitarTermos();
    contatoPage.enviar();
    contatoPage.getCampoEmail().then(($input) => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it('Submissão sem aceitar os termos', () => {
    contatoPage.preencherFormulario({
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      empresa: faker.company.name(),
    });
    contatoPage.getCheckboxTermos().should('not.be.checked');
    contatoPage.enviar();
  });
});