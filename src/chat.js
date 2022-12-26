const util = require('./util.js');
const firebase = require('./firebase.js');
const comandos = require('./comandos.js');


exports.checkUser = async function (client, message, userStages) {

    if (userStages[message.from] == null) {
        userStages[message.from] = await firebase.queryUserByPhone(message.from);
        console.log('userStage: ' + JSON.stringify(userStages[message.from]));
    } else {
        console.log('stage: ' + userStages[message.from].stage);
    }

    if (userStages[message.from].stage == 'welcome') {
        welcomeMessage(client, message.from);
        userStages[message.from].stage = 'cardapio';
    }

    console.log('Mensagem digitada pelo usuário: ' + message.body);
    comandos.checkComandos(client, message, userStages);

    /*
    } else if (userStages[message.from].userName != undefined) {
        hiMessage(client, message, userStages);
    } else {
        client.sendText(message.from, 'Oi fulano ');
    } */
}

async function hiMessage(client, message, userStages) {
    userName = userStages[message.from].userName;
    console.log('userName: ' + userName);
    client.sendText(message.from, 'Oi ' + userName);
}


async function welcomeMessage(client, messagefrom) {
    util.sendImages(client, messagefrom, 'Chef Ricardo', '🤖  Bot do *Chef Ricardo* 👨‍🍳');

    /*  client.sendText(message.from, 'A qualquer momento digite C para ver o Cardápio do Dia', {
          useTemplateButtons: true,
          buttons: [{
              id: 'cardapio',
              text: 'CARDÁPIO DO DIA'
          }],
          //title: 'Bot do *Chef Ricardo*',
          // footer: 'Footer text'
      });*/
}