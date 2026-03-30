Funcionalidade: Verificação da Página Inicial
  Como um usuário
  Eu quero verificar os elementos da página inicial da NEXDOM
  Para garantir que todas as seções estão visíveis e com os dados corretos

  Contexto:
    Dado que o usuário acessa a página inicial "https://nexdom.tec.br/"

  Cenário: Validação do Cabeçalho
    Então o logo da NEXDOM deve estar visível
    E o menu deve conter 5 itens: "Home", "Sobre nós", "Soluções", "Carreiras" e "Contato"
    E cada item do menu deve ter o link correto
    Quando o usuário abre o dropdown "Soluções"
    Então o dropdown deve exibir 8 links de soluções
    E cada link deve ter o texto e href corretos:
      | texto                                    | href                                                              |
      | Gestão de planos de saúde                | https://nexdom.tec.br/gestao-de-planos-de-saude/                  |
      | Autorização e Atendimento                | https://nexdom.tec.br/autorizacao-e-atendimento/                  |
      | Ressarcimento ao SUS                     | https://nexdom.tec.br/ressarcimento-ao-sus/                       |
      | Portal da empresa e beneficiário         | https://nexdom.tec.br/portal-da-empresa-e-beneficiario/           |
      | Gestão de relacionamento e ouvidoria     | https://nexdom.tec.br/gestao-de-relacionamento-e-ouvidoria/       |
      | DataHealth                               | https://nexdom.tec.br/data-health/                                |
      | Gestão de Cartas Negativas               | https://nexdom.tec.br/07-gestao-de-cartas-negativas/              |
      | Declaração de Saúde Online               | https://nexdom.tec.br/07-declaracao-de-saude/                     |

  Cenário: Validação do Corpo da Página
    Então o título "Promovemos inovação e qualidade" deve estar visível
    E o botão "Saiba mais" deve estar visível com link para "https://nexdom.tec.br/sobre-nos/"
    E a seção "Já nascemos grandes" deve exibir 4 contadores
    Quando o usuário clica em "Assista nosso vídeo"
    Então o vídeo do YouTube deve ser carregado com o ID "jHs0bb3h1_Q"
    E a seção "Conheça nossas soluções" deve exibir 6 blocos de soluções
    E a seção de diferenciais deve exibir o slider com 6 bullets
    E cada slide deve exibir seu título e descrição corretamente
    E a seção "Levamos você ao próximo nível" deve estar visível
    E o link "unimed.me/sinergiaunimed" deve apontar para "https://www.unimed.coop.br/site/web/sinergia"

  Cenário: Validação do Rodapé
    Quando o usuário navega até o rodapé
    Então o logo do rodapé deve estar visível
    E as informações de contato devem conter 3 itens:
      | texto                   | tipo    | destino                              |
      | contato@nexdom.tec.br   | email   | mailto:contact@mysite.com            |
      | (47) 9 9656-5688        | telefone|                                      |
      | Trabalhe conosco!       | link    | https://vempranexdom.gupy.io/        |
    E o título "nossas redes sociais" deve estar visível
    E devem haver 3 ícones de redes sociais com links corretos:
      | rede       | href                                                  |
      | Facebook   | https://www.facebook.com/nexdomhealthtech              |
      | Instagram  | https://www.instagram.com/nexdomhealthtech/            |
      | LinkedIn   | https://www.linkedin.com/company/nexdomhealthtech      |
    E a seção "Soluções" no rodapé deve exibir 8 links
    E os 3 endereços devem estar visíveis:
      | cidade           | local              |
      | São Paulo        | Edifício Jacaranda |
      | Vitória/ES       | Ed. Enseada Office |
      | Joinville/SC     | Bold Workplace     |
    E o texto "Copyright © 2024 NEXDOM HealthTech" deve estar visível
    E os links inferiores devem estar presentes:
      | texto                                              | href                                                                      |
      | Termo de Uso                                       | https://nexdom.tec.br/termo-de-uso/                                       |
      | Relatório de Transparência e Igualdade Salarial    | https://nexdom.tec.br/relatorio-de-transparencia-e-igualdade-salarial/    |
      | Canal Seguro                                       | https://contatoseguro.com.br/nexdom                                       |
      | LGPD                                               | https://nexdom.tec.br/politica-de-privacidade/                            |
