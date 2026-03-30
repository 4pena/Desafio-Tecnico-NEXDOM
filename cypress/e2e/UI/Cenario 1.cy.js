import HomePage from '../../support/pageObjects/homePage';

describe('Cenário 1 : Verificação da Página Inicial', () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.visit();
  });
  it('Cabeçalho', () => {
    homePage.getLogo().should('be.visible').and('have.attr', 'href', 'https://nexdom.tec.br/');

    const menuItems = [
      { texto: 'Home', href: 'https://nexdom.tec.br/home/' },
      { texto: 'Sobre nós', href: 'https://nexdom.tec.br/sobre-nos/' },
      { texto: 'Soluções' },
      { texto: 'Carreiras', href: 'https://nexdom.tec.br/carreiras/' },
      { texto: 'Contato', href: 'https://nexdom.tec.br/contato/' },
    ];

    homePage.getItensMenu().should('have.length', 5).then(($items) => {
      menuItems.forEach((item, index) => {
        expect($items.eq(index)).to.contain.text(item.texto);
        if (item.href) {
          homePage.getLinkMenu(index).should('have.attr', 'href', item.href);
        }
      });
    });

    homePage.abrirDropdown();

    const dropdownItems = [
      { text: 'Gestão de planos de saúde', href: 'https://nexdom.tec.br/gestao-de-planos-de-saude/' },
      { text: 'Autorização e Atendimento', href: 'https://nexdom.tec.br/autorizacao-e-atendimento/' },
      { text: 'Ressarcimento ao SUS', href: 'https://nexdom.tec.br/ressarcimento-ao-sus/' },
      { text: 'Portal da empresa e beneficiário', href: 'https://nexdom.tec.br/portal-da-empresa-e-beneficiario/' },
      { text: 'Gestão de relacionamento e ouvidoria', href: 'https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/' },
      { text: 'DataHealth', href: 'https://nexdom.tec.br/data-health/' },
      { text: 'Gestão de Cartas Negativas', href: 'https://nexdom.tec.br/07-gestao-de-cartas-negativas/' },
      { text: 'Declaração de Saúde Online', href: 'https://nexdom.tec.br/07-declaracao-de-saude/' },
    ];

    homePage.getLinksDropdown().should('have.length', 8).each(($link, index) => {
      cy.wrap($link).should('be.visible');
      expect($link).to.contain.text(dropdownItems[index].text);
      cy.wrap($link).should('have.attr', 'href', dropdownItems[index].href);
    });
  });
  it('Corpo', () => {
    //Seção Inicial 
    homePage.getTituloPagina().should('contain.text', 'Promovemos inovação e qualidade').and('contain.text', 'na gestão de planos de saúde do Sistema Unimed por meio da convergência e integração de tecnologias.');
    homePage.getBotaoSaibaMais().first().should('be.visible');
    cy.get('.elementor-button-text').should('contain.text', 'Saiba mais');
    // Seção Nossos Números
    cy.get('svg[viewBox="0 0 169 55"]').should('be.visible');
    homePage.getTituloPagina().should('contain.text', 'Já nascemos grandes');
    cy.get('.elementor-counter').should('have.length', 4);
    //Seção Video Youtube
    homePage.getTituloPagina().contains('Assista nosso vídeo').should('be.visible').click();
    cy.get('iframe.elementor-video').should('be.visible').and('have.attr', 'src').and('include', 'jHs0bb3h1_Q');
    //Seção Soluções
    homePage.getTituloPagina().contains('Conheça nossas soluções').scrollIntoView().should('be.visible');
    cy.get('[data-id="36f62bd"]').children('.e-con.e-child').should('have.length', 6).each(($bloco, index) => {
      const expectedTexts = [
        'Gestão de\nplanos de saúde',
        'Autorização \ne Atendimento',
        'Ressarcimento\nao SUS',
        'Portal da empresa\ne beneficiário',
        'Gestão de relacionamento\ne Ouvidoria',
        'Business Intelligence'
      ];
      const expectedHrefs = [
        'https://nexdom.tec.br/gestao-de-planos-de-saude/',
        'https://nexdom.tec.br/autorizacao-e-atendimento/',
        'https://nexdom.tec.br/ressarcimento-ao-sus/',
        'https://nexdom.tec.br/portal-da-empresa-e-beneficiario/',
        'https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/',
        'https://nexdom.tec.br/business-intelligence/'
      ];
      cy.wrap($bloco).find('h2.elementor-heading-title').should('contain.text', expectedTexts[index]);
      cy.wrap($bloco).find('a.elementor-icon').should('have.attr', 'href', expectedHrefs[index]);
    });
    // Seção Diferenciais
    homePage.getTituloPagina().contains('Ser referência em tecnologia para a gestão da saúde.').should('be.visible');
    // Slides
    cy.get('.swiper-wrapper .swiper-slide:not([aria-hidden="true"])', { timeout: 10000 }).should('have.length', 2);
    cy.get('.swiper-slide[data-slide="2"]').should('be.visible');
    cy.get('.e-lottie__container').should('be.visible');
    cy.get('.swiper-pagination-bullet').should('have.length', 6);

    const slides = [
      { titulo: 'Líder de mercado', texto: 'Somos os maiores especialistas em Sistema Unimed' },
      { titulo: 'Garantia de entrega sem risco financeiro', texto: 'Todos os projetos planejados são entregues' },
      { bullet: 1, titulo: 'Integração legal com ANS', texto: 'As alterações de legislação são analisadas' },
      { bullet: 2, titulo: 'Implantação Ágil', texto: 'Como especialistas no segmento' },
      { bullet: 3, titulo: 'Especializado em Sistema Unimed', texto: 'Atendemos demandas especificas do Sistema' },
      { bullet: 4, titulo: 'Investimento de acordo com o tamanho da singular', texto: 'Temos o compromisso com o resultado' },
    ];

    const slideAtivo = '.swiper-slide:not([aria-hidden="true"])';

    slides.forEach((slide) => {
      if (slide.bullet !== undefined) {
        cy.get(`.swiper-pagination-bullet[data-bullet-index="${slide.bullet}"]`).click();
        cy.get(`.swiper-pagination-bullet[data-bullet-index="${slide.bullet}"]`).should('have.class', 'swiper-pagination-bullet-active');
      }
      cy.get(`${slideAtivo} h2`).contains(slide.titulo).should('be.visible');
      cy.get(`${slideAtivo} p`).contains(slide.texto).should('be.visible');
    });
    // Seção Nosso Propósito
    homePage.getTituloPagina().should('contain.text', 'Levamos você').and('contain.text', 'ao próximo nível');
    homePage.getBotaoSaibaMais().eq(1).should('be.visible');
    cy.contains('p', 'Saiba mais em').should('be.visible')
      .find('a')
      .should('have.attr', 'href', 'https://www.unimed.coop.br/site/web/sinergia')
      .and('have.attr', 'target', '_blank')
      .and('contain', 'unimed.me/sinergiaunimed');
  })
  it('Rodapé', function () {
    homePage.getRodape().scrollIntoView().should('be.visible');
    // Logo do rodapé
    homePage.getLogoRodape().should('be.visible');
    // Informações de contato
    homePage.getItensContato().should('have.length', 3);
    homePage.getSecaoContato().within(() => {
      cy.contains('contato@nexdom.tec.br').should('be.visible')
        .closest('a').should('have.attr', 'href', 'mailto:contact@mysite.com');
      cy.contains('(47) 9 9656-5688').should('be.visible');
      cy.contains('Trabalhe conosco!').should('be.visible')
        .closest('a').should('have.attr', 'href', 'https://vempranexdom.gupy.io/')
        .and('have.attr', 'target', '_blank');
    });
    // Título redes sociais
    cy.get('footer h6').contains('nossas redes sociais').should('be.visible');
    // Redes sociais
    const redesSociais = [
      { titulo: 'facebook', href: 'https://www.facebook.com/nexdomhealthtech' },
      { titulo: 'instagram', href: 'https://www.instagram.com/nexdomhealthtech/' },
      { titulo: 'linkedin', href: 'https://www.linkedin.com/company/nexdomhealthtech' },
    ];
    homePage.getLinksRedesSociais().should('have.length', 3).each(($link, index) => {
      cy.wrap($link).should('have.attr', 'href', redesSociais[index].href)
        .and('have.attr', 'target', '_blank');
    });
    // Seção Soluções no rodapé
    cy.get('footer h6').contains('Soluções').should('be.visible');
    const solucoes = [
      { text: 'Gestão de planos de saúde', href: 'https://nexdom.tec.br/gestao-de-planos-de-saude/' },
      { text: 'Autorização e Atendimento', href: 'https://nexdom.tec.br/autorizacao-e-atendimento/' },
      { text: 'Ressarcimento ao SUS', href: 'https://nexdom.tec.br/ressarcimento-ao-sus/' },
      { text: 'Portal da empresa e beneficiário', href: 'https://nexdom.tec.br/portal-da-empresa-e-beneficiario/' },
      { text: 'Gestão de relacionamento e ouvidoria', href: 'https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/' },
      { text: 'DataHealth', href: 'https://nexdom.tec.br/data-health/' },
      { text: 'Gestão de Cartas Negativas', href: 'https://nexdom.tec.br/07-gestao-de-cartas-negativas/' },
      { text: 'Declaração de Saúde Online', href: 'https://nexdom.tec.br/07-declaracao-de-saude/' },
    ];
    homePage.getLinksSolucoesRodape().should('have.length', 8).each(($li, index) => {
      cy.wrap($li).should('contain.text', solucoes[index].text)
        .find('a').should('have.attr', 'href', solucoes[index].href);
    });
    // Endereços
    homePage.getBlocoEndereco('89ac02f').should('contain.text', 'São Paulo (Matriz)')
      .and('contain.text', 'Edifício Jacaranda');
    homePage.getBlocoEndereco('e067fb9').should('contain.text', 'Vitória/ES')
      .and('contain.text', 'Ed. Enseada Office');
    homePage.getBlocoEndereco('59300d0').should('contain.text', 'Joinville/SC')
      .and('contain.text', 'Bold Workplace');
    // Copyright
    cy.contains('Copyright © 2024 NEXDOM HealthTech').should('be.visible');
    // Links do rodapé inferior
    const linksRodape = [
      { texto: 'Termo de Uso', href: 'https://nexdom.tec.br/termo-de-uso/' },
      { texto: 'Relatório de Transparência e Igualdade Salarial', href: 'https://nexdom.tec.br/relatorio-de-transparencia-e-igualdade-salarial/' },
      { texto: 'Canal Seguro', href: 'https://contatoseguro.com.br/nexdom' },
      { texto: 'LGPD', href: 'https://nexdom.tec.br/politica-de-privacidade/' },
    ];
    linksRodape.forEach((link) => {
      homePage.getLinksInferiores().contains('a', link.texto).should('have.attr', 'href', link.href);
    });
  });
});