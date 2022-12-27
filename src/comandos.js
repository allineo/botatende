
const cardapio = require('./cardapio.js');


exports.checkComandos = async function (client, message, userStages) {

    let msgUser = message.body;
    if (msgUser == undefined) {
        msgUser = '';
    }

    if (userStages[message.from].stage == 'cardapio' ||
        msgUser.toLowerCase() == 'c' || msgUser.toLowerCase() == 'cardápio do dia'
        || msgUser.toLowerCase() == 'cardápio' || msgUser.toLowerCase() == 'cardapio') {
        await cardapio.showCardapio(client, message.from);
        cardapio.showCardapio2(client, message.from);
        userStages[message.from].stage = 'cardapiosent';
    }

    if (msgUser.toLowerCase() == 'sucos' || msgUser.toLowerCase() == 'suco') {
        cardapio.showSucos(client, message.from);
        userStages[message.from].stage = 'cardapiosent';
    }

    if (msgUser.toLowerCase() == 'pizzas' || msgUser.toLowerCase() == 'pizza') {
        cardapio.showPizzas(client, message.from);
        userStages[message.from].stage = 'cardapiosent';
    }
}
