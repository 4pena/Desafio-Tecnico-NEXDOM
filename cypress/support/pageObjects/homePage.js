class HomePage {
    visit() {
        cy.visit('https://nexdom.tec.br/');
        cy.url().should('eq', 'https://nexdom.tec.br/');
    }

    // Cabeçalho
    getLogo() {
        return cy.get('a.elementor-icon[href="https://nexdom.tec.br/"]');
    }

    getItensMenu() {
        return cy.get('#menubar-239 li.e-n-menu-item');
    }

    getItemMenu(index) {
        return this.getItensMenu().eq(index);
    }

    getLinkMenu(index) {
        return this.getItemMenu(index).find('a');
    }

    getConteudoDropdown() {
        return cy.get('#e-n-menu-content-2393', { timeout: 10000 });
    }

    getLinksDropdown() {
        return this.getConteudoDropdown().find('a');
    }

    abrirDropdown() {
        cy.get('#e-n-menu-content-2393').invoke('css', 'display', 'block');
        cy.get('#e-n-menu-dropdown-icon-2393').invoke('attr', 'aria-expanded', 'true');
        this.getConteudoDropdown().should('be.visible');
    }

    // Corpo
    getTituloPagina() {
        return cy.get('h2.elementor-heading-title');
    }

    getBotaoSaibaMais() {
        return cy.get('a.elementor-button.elementor-button-link.elementor-size-sm[href="https://nexdom.tec.br/sobre-nos/"]');
    }

    // Rodapé
    getRodape() {
        return cy.get('footer');
    }

    getLogoRodape() {
        return cy.get('footer img[src*="logo_navbar.svg"]', { timeout: 10000 });
    }

    getItensContato() {
        return cy.get('[data-id="0192800"] .elementor-icon-list-items li');
    }

    getSecaoContato() {
        return cy.get('[data-id="0192800"]');
    }

    getLinksRedesSociais() {
        return cy.get('[data-id="071c10c"] .elementor-social-icons-wrapper a');
    }

    getLinksSolucoesRodape() {
        return cy.get('[data-id="eee13e6"] .elementor-icon-list-items li');
    }

    getBlocoEndereco(dataId) {
        return cy.get(`[data-id="${dataId}"]`);
    }

    getLinksInferiores() {
        return this.getRodape();
    }
}

export default HomePage;    