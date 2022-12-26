const util = require('./util.js');


exports.showCardapio = async function (client, messagefrom) {

    client.sendListMessage(messagefrom, {
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
    });

    /*  client.sendText(message.from, 'message', {
          useTemplateButtons: true,
          buttons: [
              {
                  text: '´Pizzas'
              },
              {
                  text: 'Marmitas'
              },
              {
                  text: 'Sucos',
                  url: "https://wppconnect-team.github."
              },
              {
                  text: 'Café'
              },
              {
                  phoneNumber: "554498005216",
                  text: 'Bebidas' 
              }
          ],
          title: 'Cardápio do Dia: ',
          //footer: 'Footer text' // Optional
      });*/

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