Funcionalidade: Navegação para a Página de Soluções
  Como um usuário
  Eu quero navegar para cada página de solução a partir do menu
  Para verificar que os links direcionam corretamente

  Contexto:
    Dado que o usuário acessa a página inicial "https://nexdom.tec.br/"

  Esquema do Cenário: Navegar para <solucao>
    Quando o usuário abre o dropdown "Soluções"
    E clica no link "<solucao>"
    Então a URL deve ser "<url>"
    E o título da página deve ser "<tituloPagina>"

    Exemplos:
      | solucao                                  | url                                                               | tituloPagina                           |
      | Gestão de planos de saúde                | https://nexdom.tec.br/gestao-de-planos-de-saude/                  | Gestão de Planos de Saúde              |
      | Autorização e Atendimento                | https://nexdom.tec.br/autorizacao-e-atendimento/                  | Autorização e Atendimento              |
      | Ressarcimento ao SUS                     | https://nexdom.tec.br/ressarcimento-ao-sus/                       | Ressarcimento ao SUS                   |
      | Portal da empresa e beneficiário         | https://nexdom.tec.br/portal-da-empresa-e-beneficiario/           | Portal da Empresa e Beneficiário       |
      | Gestão de relacionamento e ouvidoria     | https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/       | Gestão de Relacionamento e Ouvidoria   |
      | DataHealth                               | https://nexdom.tec.br/data-health/                                | DataHealth                             |
      | Gestão de Cartas Negativas               | https://nexdom.tec.br/07-gestao-de-cartas-negativas/              | Gestão de Cartas Negativas             |
      | Declaração de Saúde Online               | https://nexdom.tec.br/07-declaracao-de-saude/                     | Declaração de Saúde Online             |
