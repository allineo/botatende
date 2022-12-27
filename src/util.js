
exports.sendImages = async function (client, messagefrom, imagename, imagetext) {
    await client
        .sendImage(
            messagefrom,
            './img/' + imagename + '.jpg',
            imagename.replace(' ', ''),
            imagetext
        )
        .then((result) => {
            //console.log('Result: ', result);
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro);
        });
}

exports.sendImageStick = async function (client, messagefrom, imagename) {
    await client
        .sendImageAsSticker(
            messagefrom,
            './img/' + imagename + '.jpg'
        )
        .then((result) => {
            //console.log('Result: ', result);
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro);
        });
}

