
exports.checkUser = function (client, message, userStages) {
    //let phone = '5521972229720';
    let phone = (message.from).replace(/[^\d]+/g, '');
    console.log('phone: ' + phone);
    console.log('Mensagem digitada pelo usuário: ' + message.body);
    if (phone != '') {
        if (userStages[phone] == null) {
            userStages[phone] = {phone};
            welcomeMessage(client, phone);
        } else {
            userName = userStages[phone].userName;
            hiMessage(client, message.from, userName);
        }
    }
}

async function hiMessage(client, sendTo, userName) {
    console.log('userName: ' + userName);
    if (userName != undefined) {
        client.sendText(sendTo, 'Oi ' + userName);
    } else {

    }
}


async function welcomeMessage(client, sendTo) {
    await client
        .sendImage(
            sendTo,
            './img/chefRicardo.jpeg',
            'Chef Ricardo',
            '🤖  Bot do *Chef Ricardo* 👨‍🍳\n'
        )
        .then((result) => {
            //console.log('Result: ', result);
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro);
        });

    client.sendText(sendTo, 'A qualquer momento digite C para ver o Cardápio do Dia', {
        useTemplateButtons: true,
        buttons: [{
            id: 'cardapio',
            text: 'CARDÁPIO DO DIA'
        }],
        //title: 'Bot do *Chef Ricardo*',
        // footer: 'Footer text'
    });
}