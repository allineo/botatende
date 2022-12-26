const util = require('./util.js');


exports.showCardapio = async function (client, messagefrom) {

    /*  client.sendListMessage(messagefrom, {
          buttonText: 'Clique',
          description: '*CARDÁPIO DO DIA*',
          sections: [
              {
                  rows: [
                      {
                          title: 'PIZZAS',
                      },
                      {
                          title: 'MARMITAS E QUENTINHAS',
                      },
                      {
                          title: 'SUCOS',
                      },
                      {
                          title: 'SUCOLÉS',
                      },
                      {
                          title: 'CAFÉ DA MANHÃ',
                      },
                      {
                          title: 'BEBIDAS',
                      },
                  ],
              }
          ],
      }); */

    client.sendText(messagefrom, '*Chefe Ricardo* 👨‍🍳 \n Cardápio do Dia:', {
        useTemplateButtons: true,
        buttons: [
            {
                text: 'Cardápio Online',
                url: "https://chefericardo.com.br"
            },
            {
                url: 'https://api.whatsapp.com/send?phone=5521981351099&text=Olá',
                text: 'Fale Conosco 👨‍🍳'
            },
            {
                text: 'Pizzas'
            },
            {
                text: 'Marmitas e Quentinhas'
            },
            {
                text: 'Sucolés'
            },
        ],
        // title: ' ',
        //footer: 'Footer text' // Optional
    });
}

exports.showCardapio2 = async function (client, messagefrom) {

    client.sendText(messagefrom, 'Temos também: ', {
        useTemplateButtons: true,
        buttons: [
            {
                text: 'Sucos',
            },
            {
                text: 'Café da Manhã'
            },
            {
                text: 'Bebidas'
            }
        ]
    });
}


exports.showSucos = async function (client, messagefrom) {
    util.sendImages(client, messagefrom, 'Sucos', '');

    client.sendListMessage(messagefrom, {
        buttonText: 'Clique',
        description: '*SUCOS DO DIA* \n' +
            'Integral, sem adição de água nem açúcar',
        sections: [
            {
                title: ''
                    + 'R$ 8,00 (taça)',
                rows: [
                    {
                        title: 'Suco - UVA ROXA',
                    },
                    {
                        title: 'Suco - UVA VERDE',
                    },
                    {
                        title: 'Suco - MORANGO',
                    },
                    {
                        title: 'Suco - DETOX',
                        description: 'Limão, Gengibre, Couve, Uva verde',
                    }
                ],
            }
        ],
    });
}