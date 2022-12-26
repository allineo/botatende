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

exports.queryUserByPhone = async function (messagefrom) {
    phone = (messagefrom).replace(/[^\d]+/g, '');
    initDB();
    if (messagefrom != '') {
        let userdata = null;
        try {
            const queryRef = await db.collection('users')
                .where('phone', '=', phone)
                .get();
            if (!queryRef.empty) {
                queryRef.forEach((user) => {
                    userdata = user.data();
                    userdata['id'] = user.id;
                });
            } else {
                userdata = await saveUser(phone);
            }
        } catch (_error) {
            console.log(_error);
        }
        return userdata;
    }
}



async function saveUser(phone) {
    try {
        let user = {};
        user['phone'] = phone;
        user['cadastradoEm'] = firebaseadmin.firestore.Timestamp.fromDate(new Date());
        user['stage'] = 'welcome';
        const newUser = await db.collection('users').add(user);
        user['id'] = newUser.id;
        // console.log('new user: ' + JSON.stringify(user));
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