const firebaseadmin = require('firebase-admin');
// https://firebase.google.com/docs/firestore/quickstart#node.js


let db = null;

function initDB() {
    if (db == null) {
        let firebaseServiceAccount = require('../chefrico-f29b0-firebase-adminsdk-dv58y-9b09b3d73c.json');
        firebaseadmin.initializeApp({
            credential: firebaseadmin.credential.cert(firebaseServiceAccount)
        });
        db = firebaseadmin.firestore();
    }
}

exports.queryByPhone = async function (client, phone) {
    initDB(client);
    if (phone != '') {
        const phone2 = phone.substring(2);
        let userdata = null;
        try {
            const queryRef = await db.collection('users')
                .where('telefone', 'in', [phone, phone2])
                .get();
            if (!queryRef.empty) {
                queryRef.forEach((user) => {
                    userdata = user.data();
                    userdata['id'] = user.id;
                });
            }
        } catch (_error) {
            console.log(_error);
        }
        return userdata;
    }
}



exports.save = async function (user) {
    try {
        user['cadastradoEm'] = firebaseadmin.firestore.Timestamp.fromDate(new Date());
        const newUser = await db.collection('users').add(user);
        user['id'] = newUser.id;
        return user;
    } catch (_error) {
        console.log("Erro: " + _error);
    }
}


exports.update = async function (userdata) {
    try {
        const userRegister = await db.collection('users').doc(userdata['id']).set(userdata);
        return userRegister;
    } catch (_error) {
        console.log("Erro Firebase Update: " + _error);
    }
}