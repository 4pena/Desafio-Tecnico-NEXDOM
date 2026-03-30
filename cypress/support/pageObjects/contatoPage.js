class ContatoPage {
    visitar() {
        cy.visit('https://nexdom.tec.br/contato/');
        cy.url().should('eq', 'https://nexdom.tec.br/contato/');
    }

    getTitulo() {
        return cy.get('h2.elementor-heading-title').contains('Fale conosco');
    }

    getTituloPagina() {
        return cy.get('[data-id="1bc9375"] h2.elementor-heading-title');
    }

    getCampoNome() {
        return cy.get('#form-field-name');
    }

    getCampoEmail() {
        return cy.get('#form-field-email');
    }

    getCampoEmpresa() {
        return cy.get('#form-field-message');
    }

    getCampoCargo() {
        return cy.get('#form-field-field_67e0483');
    }

    getCampoTelefone() {
        return cy.get('#form-field-field_5778e7b');
    }

    getCampoAssunto() {
        return cy.get('#form-field-field_f77a763');
    }

    getCheckboxTermos() {
        return cy.get('#form-field-field_7651528');
    }

    getLabelTermos() {
        return cy.get('label[for="form-field-field_7651528"]');
    }

    getBotaoEnviar() {
        return cy.get('form[name="Formulário Contato"] button[type="submit"]');
    }

    getFormulario() {
        return cy.get('form[name="Formulário Contato"]');
    }

    preencherFormulario({ nome, email, empresa, cargo, telefone, assunto }) {
        this.getCampoNome().type(nome);
        this.getCampoEmail().type(email);
        this.getCampoEmpresa().type(empresa);
        if (cargo) this.getCampoCargo().type(cargo);
        if (telefone) this.getCampoTelefone().type(telefone);
        if (assunto) this.getCampoAssunto().type(assunto);
    }

    aceitarTermos() {
        this.getCheckboxTermos().check();
        this.getCheckboxTermos().should('be.checked');
    }

    enviar() {
        this.getBotaoEnviar().click({force : true});
    }
}

export default ContatoPage;
