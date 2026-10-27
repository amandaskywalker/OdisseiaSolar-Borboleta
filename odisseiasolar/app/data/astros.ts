import type { Astro } from "./tipos";

export const astros: Astro[] = [
  {
    slug: "sol",
    nome: "Sol",
    tituloHome: "Sol",
    detalheHome: "Estrela Central",
    classe: "sol",
    partes: [
      {
        classe: "esfera-solar"
      }
    ],
    descricao: "O Sol é a estrela anã amarela central do nosso sistema, concentrando cerca de 99,86% de toda a massa planetária.",
    secoes: [
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo",
            texto: "Região central a 15 milhões de °C onde ocorre a fusão de hidrogênio em hélio."
          },
          {
            termo: "Zona Radiativa",
            texto: "Camada densa intermediária onde a energia viaja em forma de fótons por milênios."
          },
          {
            termo: "Zona Convectiva",
            texto: "Camada superior onde correntes turbulentas de plasma transportam o calor para o exterior."
          }
        ]
      },
      {
        titulo: "Atmosfera Solar",
        itens: [
          {
            termo: "Fotosfera",
            texto: "Superfície visível que emite luz direta, com temperatura em torno de 5.500 °C."
          },
          {
            termo: "Cromosfera",
            texto: "Camada avermelhada intermediária visível durante eclipses solares totais."
          },
          {
            termo: "Corona",
            texto: "Camada mais externa difusa que atinge mais de 1 milhão de °C e sopra o vento solar."
          }
        ]
      }
    ]
  },
  {
    slug: "mercurio",
    nome: "Mercúrio",
    tituloHome: "1. Mercúrio",
    detalheHome: "57,9 milhões de km do Sol",
    classe: "mercurio",
    partes: [],
    descricao: "Mercúrio é o menor planeta rochoso e o mais próximo do Sol, com uma densidade altíssima devido ao seu núcleo colossal.",
    secoes: [
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Metálico",
            texto: "Ocupa cerca de 85% do raio do planeta, composto predominantemente por ferro e níquel parcialmente líquido."
          },
          {
            termo: "Manto Rochoso",
            texto: "Camada sólida de silicatos com espessura estimada em apenas 400 km."
          },
          {
            termo: "Crosta",
            texto: "Superfície escura e espessa, repleta de crateras de impacto e escarpas formadas pelo resfriamento do planeta."
          }
        ]
      },
      {
        titulo: "Atmosfera (Exosfera)",
        itens: [
          {
            termo: "Composição",
            texto: "Exosfera extremamente rarefeita com átomos arrancados pelo vento solar: oxigênio, sódio, hidrogênio e hélio."
          },
          {
            termo: "Variação Térmica",
            texto: "Sem atmosfera para reter calor, oscila de -180 °C durante a noite a mais de 430 °C durante o dia."
          }
        ]
      }
    ]
  },
  {
    slug: "venus",
    nome: "Vênus",
    tituloHome: "2. Vênus",
    detalheHome: "108,2 milhões de km do Sol",
    classe: "venus",
    partes: [],
    descricao: "Vênus possui dimensões muito parecidas com as da Terra, mas desenvolveu um ambiente infernal devido a um efeito estufa descontrolado.",
    secoes: [
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Metálico",
            texto: "Núcleo de ferro e níquel com cerca de 3.000 km de raio, similar ao terrestre porém com campo magnético quase nulo."
          },
          {
            termo: "Manto Rochoso",
            texto: "Manto viscoso de silicatos com aproximadamente 3.000 km de espessura, palco de intenso vulcanismo ao longo de sua história."
          },
          {
            termo: "Crosta Basáltica",
            texto: "Crosta rígida e contínua de rocha vulcânica, sem divisão em placas tectônicas ativas."
          }
        ]
      },
      {
        titulo: "Atmosfera e Clima",
        itens: [
          {
            termo: "Composição",
            texto: "Mais de 96% de dióxido de carbono ($CO_2$) e 3,5% de nitrogênio, coberta por nuvens espessas de ácido sulfúrico."
          },
          {
            termo: "Pressão e Calor",
            texto: "Pressão de superfície 92 vezes superior à da Terra e temperatura uniforme de 465 °C dia e noite."
          },
          {
            termo: "Super-rotação",
            texto: "Ventos na alta atmosfera atingem 360 km/h, circulando todo o planeta a cada 4 dias terrestres."
          }
        ]
      }
    ]
  },
  {
    slug: "terra",
    nome: "Terra",
    tituloHome: "3. Terra",
    detalheHome: "149,6 milhões de km do Sol • 1 Lua (A Lua)",
    classe: "terra",
    partes: [
      {
        classe: "lua",
        titulo: "Lua"
      }
    ],
    descricao: "O terceiro planeta do Sol é o único mundo conhecido com água líquida em abundância na superfície e condições capazes de sustentar a vida.",
    secoes: [
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Interno e Externo",
            texto: "Núcleo interno sólido de ferro e níquel a mais de 5.000 °C, envolvido por núcleo externo de metal fundido cujo movimento gera o campo magnético."
          },
          {
            termo: "Manto Terrestre",
            texto: "Camada rochosa de silicatos com 2.900 km de profundidade. O manto superior (astenosfera) flui lentamente, impulsionando a tectônica de placas."
          },
          {
            termo: "Crosta",
            texto: "Casca externa dividida em crosta oceânica fina (~7 km) e crosta continental espessa (~35 km a 70 km)."
          }
        ]
      },
      {
        titulo: "Atmosfera e Clima",
        itens: [
          {
            termo: "Camadas Atmosféricas",
            texto: "Composta por Troposfera, Estratosfera (com a camada de ozônio protetora), Mesosfera, Termosfera e Exosfera."
          },
          {
            termo: "Composição do Ar",
            texto: "78% de nitrogênio ($N_2$), 21% de oxigênio ($O_2$), 0,9% de argônio e vapor de água variável."
          },
          {
            termo: "Equilíbrio Térmico",
            texto: "Pressão de 1 atm e efeito estufa moderado mantêm a temperatura média global em torno de 15 °C."
          }
        ]
      }
    ]
  },
  {
    slug: "marte",
    nome: "Marte",
    tituloHome: "4. Marte",
    detalheHome: "227,9 milhões de km do Sol • 2 Luas (Fobos e Deimos)",
    classe: "marte",
    partes: [
      {
        classe: "lua-fobos",
        titulo: "Fobos"
      },
      {
        classe: "lua-deimos",
        titulo: "Deimos"
      }
    ],
    descricao: "Conhecido como o Planeta Vermelho, Marte preserva marcas de antigos rios, lagos e a maior cadeia vulcânica do Sistema Solar.",
    secoes: [
      {
        titulo: "Luas Naturais: Fobos e Deimos",
        itens: [
          {
            termo: "Fobos (Medo)",
            texto: "A maior lua de Marte (cerca de 22 km de diâmetro), com órbita tão próxima que completa três voltas ao redor do planeta a cada dia marciano."
          },
          {
            termo: "Deimos (Pânico)",
            texto: "A menor e mais distante das duas luas (cerca de 12 km), de formato irregular e coberta por uma espessa camada de regolito."
          }
        ]
      },
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo",
            texto: "Núcleo denso com raio de cerca de 1.800 km, composto de ferro, níquel e alta proporção de enxofre."
          },
          {
            termo: "Manto Silicatado",
            texto: "Manto rochoso espesso e atualmente estático com cerca de 1.500 km, que alimentou vulcões monumentais como o Monte Olimpo."
          },
          {
            termo: "Crosta Avermelhada",
            texto: "Camada basáltica de 50 a 100 km rica em poeira de óxido de ferro (ferrugem), que cobre todo o relevo marciano."
          }
        ]
      },
      {
        titulo: "Atmosfera e Clima",
        itens: [
          {
            termo: "Composição",
            texto: "95% de dióxido de carbono ($CO_2$), 2,6% de nitrogênio e 1,9% de argônio."
          },
          {
            termo: "Pressão Tênue",
            texto: "Pressão na superfície correspondente a menos de 1% da terrestre, insuficiente para manter água líquida estável."
          },
          {
            termo: "Tempestades de Poeira",
            texto: "Ventos intensos podem erguer tempestades de areia microscópica que cobrem o planeta inteiro por semanas."
          }
        ]
      }
    ]
  },
  {
    slug: "jupiter",
    nome: "Júpiter",
    tituloHome: "5. Júpiter",
    detalheHome: "778,5 milhões de km do Sol • Luas Galileanas (Ío, Europa, Ganimedes, Calisto)",
    classe: "jupiter",
    partes: [
      {
        classe: "lua-io",
        titulo: "Ío"
      },
      {
        classe: "lua-europa",
        titulo: "Europa"
      },
      {
        classe: "lua-ganimedes",
        titulo: "Ganimedes"
      },
      {
        classe: "lua-calisto",
        titulo: "Calisto"
      }
    ],
    descricao: "O maior planeta do Sistema Solar é um gigante gasoso colossal, com massa equivalente a mais de 300 Terras combinadas e 95 luas conhecidas.",
    secoes: [
      {
        titulo: "As Quatro Grandes Luas Galileanas",
        itens: [
          {
            termo: "Ío",
            texto: "O corpo mais vulcanicamente ativo do Sistema Solar, repleto de centenas de vulcões em erupção constante de enxofre."
          },
          {
            termo: "Europa",
            texto: "Crosta lisa de gelo de água que abriga um vasto oceano subterrâneo líquido com potencial para vida extraterrestre."
          },
          {
            termo: "Ganimedes",
            texto: "A maior lua de todo o Sistema Solar (maior até que o planeta Mercúrio), dotada de seu próprio campo magnético."
          },
          {
            termo: "Calisto",
            texto: "O mundo com maior densidade de crateras do sistema, com superfície antiga intocada há bilhões de anos."
          }
        ]
      },
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Difuso",
            texto: "Núcleo denso e quente de rocha e gelo sob pressões titânicas, parcialmente misturado às camadas vizinhas."
          },
          {
            termo: "Manto de Hidrogênio Metálico",
            texto: "Região onde o hidrogênio líquido é comprimido a ponto de conduzir eletricidade como um metal, gerando um poderoso campo magnético."
          },
          {
            termo: "Camada de Transição",
            texto: "O hidrogênio metálico transita gradualmente para hidrogênio molecular líquido e gasoso sem uma superfície sólida definida."
          }
        ]
      },
      {
        titulo: "Atmosfera e Clima",
        itens: [
          {
            termo: "Composição dos Gases",
            texto: "Cerca de 90% de hidrogênio ($H_2$), 10% de hélio ($He$), com traços de metano, vapor de água e amônia."
          },
          {
            termo: "Cinturões e Zonas",
            texto: "Faixas atmosféricas paralelas em rotação alternada, com nuvens formadas por cristais de amônia e hidrossulfeto de amônio."
          },
          {
            termo: "A Grande Mancha Vermelha",
            texto: "Tempestade anticiclônica maior que a Terra em atividade há mais de 350 anos com ventos superiores a 400 km/h."
          }
        ]
      }
    ]
  },
  {
    slug: "saturno",
    nome: "Saturno",
    tituloHome: "6. Saturno",
    detalheHome: "1,43 bilhão de km do Sol • Luas Notáveis (Titã, Encélado, Mimas)",
    classe: "saturno",
    partes: [
      {
        classe: "anel-saturno-tras"
      },
      {
        classe: "corpo-saturno"
      },
      {
        classe: "anel-saturno-frente"
      },
      {
        classe: "lua-tita",
        titulo: "Titã"
      },
      {
        classe: "lua-encelado",
        titulo: "Encélado"
      },
      {
        classe: "lua-mimas",
        titulo: "Mimas"
      }
    ],
    descricao: "O segundo maior planeta do Sistema Solar é um gigante gasoso conhecido mundialmente pelo mais deslumbrante sistema de anéis e mais de 140 luas catalogadas.",
    secoes: [
      {
        titulo: "Luas Fascinantes de Saturno",
        itens: [
          {
            termo: "Titã",
            texto: "A segunda maior lua do Sistema Solar, a única com atmosfera densa rica em nitrogênio e lagos líquidos de metano e etano."
          },
          {
            termo: "Encélado",
            texto: "Mundo coberto de gelo super brilhante com gêiseres ativos que ejetam vapor de água e moléculas orgânicas para o espaço a partir de um oceano subterrâneo."
          },
          {
            termo: "Mimas",
            texto: "Famosa pela gigantesca cratera Herschel, conferindo-lhe uma semelhança marcante com a \"Estrela da Morte\"."
          }
        ]
      },
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Rochoso",
            texto: "Núcleo denso de ferro, níquel e compostos rochosos com massa estimada entre 9 e 22 vezes a da Terra."
          },
          {
            termo: "Manto de Hidrogênio Metálico",
            texto: "Camada condutora sob extrema pressão, menos espessa que a de Júpiter mas geradora do campo magnético saturniano."
          },
          {
            termo: "Chuva de Hélio",
            texto: "Em camadas intermediárias de hidrogênio líquido, o hélio condensa em gotas que precipitam em direção ao núcleo gerando calor interno."
          }
        ]
      },
      {
        titulo: "Atmosfera e Sistema de Anéis",
        itens: [
          {
            termo: "Composição Atmosférica",
            texto: "96% de hidrogênio molecular, 3% de hélio e névoas de hidrocarbonetos que conferem sua cor dourada pálida."
          },
          {
            termo: "Ventos Supersônicos",
            texto: "Ventos na região equatorial atingem até 1.800 km/h, além de abrigar um curioso vórtice em formato de hexágono em seu polo norte."
          },
          {
            termo: "Anéis de Gelo",
            texto: "Formados por bilhões de blocos de gelo d'água quase puro, que se estendem por 282.000 km com espessura média de apenas 10 metros."
          }
        ]
      }
    ]
  },
  {
    slug: "urano",
    nome: "Urano",
    tituloHome: "7. Urano",
    detalheHome: "2,87 bilhões de km do Sol • Luas Notáveis (Miranda, Titânia)",
    classe: "urano",
    partes: [
      {
        classe: "anel-urano-tras"
      },
      {
        classe: "corpo-urano"
      },
      {
        classe: "anel-urano-frente"
      },
      {
        classe: "lua-miranda",
        titulo: "Miranda"
      },
      {
        classe: "lua-titania",
        titulo: "Titânia"
      }
    ],
    descricao: "Urano é o primeiro gigante de gelo do Sistema Solar, notável por orbitar o Sol deitado em seu eixo de rotação e possuir 28 luas conhecidas.",
    secoes: [
      {
        titulo: "Principais Luas de Urano",
        itens: [
          {
            termo: "Miranda",
            texto: "Famosa por seu relevo caótico e desfiladeiros verticais como Verona Rupes, uma escarpa com mais de 20 km de altura (a maior do sistema)."
          },
          {
            termo: "Titânia",
            texto: "A maior lua de Urano (cerca de 1.580 km), composta de rocha e gelo cortada por extensos cânions e vales de falhas tectônicas."
          }
        ]
      },
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Rochoso",
            texto: "Núcleo relativamente pequeno de ferro e silicatos, com massa em torno de metade da massa da Terra."
          },
          {
            termo: "Manto de Gelos Supercríticos",
            texto: "Representa 80% da massa do planeta, formado por um fluido espesso, quente e altamente condutor de água, metano e amônia sob altíssima pressão."
          },
          {
            termo: "Sem Superfície Sólida",
            texto: "O manto fluido se funde de forma gradual com a camada inferior da atmosfera gasosa sem descontinuidade nítida."
          }
        ]
      },
      {
        titulo: "Atmosfera e Clima Extremo",
        itens: [
          {
            termo: "Composição e Cor",
            texto: "83% de hidrogênio, 15% de hélio e 2,3% de metano, cujo gás absorve a luz vermelha conferindo ao planeta sua cor ciano característica."
          },
          {
            termo: "Recorde de Frio",
            texto: "Possui a atmosfera mais gelada de todos os planetas, com temperaturas que chegam a -224 °C."
          },
          {
            termo: "Inclinação Axial de 98°",
            texto: "Gira de lado em relação ao plano orbital, gerando estações climáticas extremas que duram 21 anos terrestres cada."
          }
        ]
      }
    ]
  },
  {
    slug: "netuno",
    nome: "Netuno",
    tituloHome: "8. Netuno",
    detalheHome: "4,5 bilhões de km do Sol • Luas Notáveis (Tritão, Proteu)",
    classe: "netuno",
    partes: [
      {
        classe: "lua-tritao",
        titulo: "Tritão"
      },
      {
        classe: "lua-proteu",
        titulo: "Proteu"
      }
    ],
    descricao: "Netuno é o planeta mais afastado do Sol, um gigante de gelo com cor azul profunda, os ventos mais furiosos e 16 luas catalogadas.",
    secoes: [
      {
        titulo: "Luas Fascinantes de Netuno",
        itens: [
          {
            termo: "Tritão",
            texto: "A única grande lua do Sistema Solar com órbita retrógrada (gira no sentido oposto à rotação do planeta). Possui criovulcões e gêiseres ativos que expelem nitrogênio líquido congelado."
          },
          {
            termo: "Proteu",
            texto: "A segunda maior lua de Netuno, de formato irregular e densamente craterada, que quase atingiu massa suficiente para se tornar esférica."
          }
        ]
      },
      {
        titulo: "Camadas e Estrutura Interna",
        itens: [
          {
            termo: "Núcleo Sólido",
            texto: "Núcleo de rocha, ferro e níquel com massa cerca de 1,2 vezes a terrestre sob pressões de milhões de atmosferas."
          },
          {
            termo: "Manto de Fluido Iônico",
            texto: "Fluido superaquecido e de alta densidade composto por água, amônia e metano condutor, onde pressões extremas podem formar cristais de diamante."
          },
          {
            termo: "Calor Interno Ativo",
            texto: "Ao contrário de Urano, Netuno irradia 2,6 vezes mais calor do que recebe do Sol, impulsionando sua intensa atividade atmosférica."
          }
        ]
      },
      {
        titulo: "Atmosfera e Dinâmica Climática",
        itens: [
          {
            termo: "Composição Atmosférica",
            texto: "80% de hidrogênio, 19% de hélio e cerca de 1,5% de metano, com coloração azul vívida e nuvens brancas de gelo de metano em alta altitude."
          },
          {
            termo: "Ventos Mais Rápidos do Sistema",
            texto: "Correntes de jato atmosféricas que atingem velocidades supersônicas impressionantes superiores a 2.100 km/h."
          },
          {
            termo: "Vórtices Escuros",
            texto: "Tempestades gigantescas similares a buracos atmosféricos que surgem e se dissipam em escalas de poucos anos."
          }
        ]
      }
    ]
  }
];
