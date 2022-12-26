const wppconnect = require('@wppconnect-team/wppconnect');
//https://wppconnect.io/wppconnect/index.html
// https://wppconnect.io/wppconnect/classes/Whatsapp.html

const chat = require('./chat.js');

let userStages = [];


wppconnect.create({
    session: 'whatsbot',
    //autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
    .then((client) => {
        console.log('Client iniciado');
        client.onMessage((message) => {
            chat.checkUser(client, message, userStages);
        })
    })
    .catch((error) =>
        console.log(error));