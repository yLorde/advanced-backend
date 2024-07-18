const mongo = require('mongoose');
const auth = require('../data/auth');

module.exports.dbConnect = async () => {
    await mongo.connect(auth.mongo).then(async (connect) => {
        console.log(color.green(`[API] (DATABASE) -> Conectado`));
        console.log(color.green(`[API] (DATABASE) -> Conectado ao ${connect.connection.db.databaseName}`));
    }).catch(async (err) => {
        if (err) {
            console.log(`Error (DataBase): ${err}`);
        };
    });
};