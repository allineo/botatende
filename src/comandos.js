
const cardapio = require('./cardapio.js');


exports.checkComandos = async function (client, message, userStages) {

    if (userStages[message.from].stage == 'cardapio' ||
        message.body.toLowerCase() == 'c' || message.body.toLowerCase() == 'cardápio do dia'
        || message.body.toLowerCase() == 'cardápio' || message.body.toLowerCase() == 'cardapio') {
        cardapio.showCardapio(client, message.from);
        userStages[message.from].stage = 'cardapiosent';
    }

    if (message.body.toLowerCase() == 'sucos' || message.body.toLowerCase() == 'suco') {
        cardapio.showSucos(client, message.from);
        userStages[message.from].stage = 'cardapiosent';
    }
}
