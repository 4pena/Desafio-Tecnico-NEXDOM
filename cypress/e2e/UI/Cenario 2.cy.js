import HomePage from '../../support/pageObjects/homePage';

describe('Cenário 2: Navegação para a Página de Soluções', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  const solucoes = [
    { titulo: 'Gestão de planos de saúde', tituloPagina: 'Gestão de Planos de Saúde', url: 'https://nexdom.tec.br/gestao-de-planos-de-saude/' },
    { titulo: 'Autorização e Atendimento', tituloPagina: 'Autorização e Atendimento', url: 'https://nexdom.tec.br/autorizacao-e-atendimento/' },
    { titulo: 'Ressarcimento ao SUS', tituloPagina: 'Ressarcimento ao SUS', url: 'https://nexdom.tec.br/ressarcimento-ao-sus/' },
    { titulo: 'Portal da empresa e beneficiário', tituloPagina: 'Portal da Empresa e Beneficiário', url: 'https://nexdom.tec.br/portal-da-empresa-e-beneficiario/' },
    { titulo: 'Gestão de relacionamento e ouvidoria', tituloPagina: 'Gestão de Relacionamento e Ouvidoria', url: 'https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/' },
    { titulo: 'DataHealth', tituloPagina: 'DataHealth', url: 'https://nexdom.tec.br/data-health/' },
    { titulo: 'Gestão de Cartas Negativas', tituloPagina: 'Gestão de Cartas Negativas', url: 'https://nexdom.tec.br/07-gestao-de-cartas-negativas/' },
    { titulo: 'Declaração de Saúde Online', tituloPagina: 'Declaração de Saúde Online', url: 'https://nexdom.tec.br/07-declaracao-de-saude/' },
  ];

  solucoes.forEach((solucao, index) => {
    it(`Navegar para: ${solucao.titulo}`, () => {
      homePage.abrirDropdown();
      homePage.getLinksDropdown().eq(index).click();
      cy.url({ timeout: 10000 }).should('eq', solucao.url);
      homePage.getTituloPagina().first().invoke('text').then((texto) => {
        const textoNormalizado = texto.replace(/\s+/g, ' ').trim();
        expect(textoNormalizado).to.eq(solucao.tituloPagina);
      });
    });
  });
});