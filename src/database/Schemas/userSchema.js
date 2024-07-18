const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    idU: String,
    username: String,
    email: String,
    password: String,
    profilePictureUrl: String,
    createdAt: { type: Date, default: new Date.now() },
    config: {
        defaultTheme: { type: String, default: 'light' },
    },
    payment: {
        history: {
            type: Array, default: [
                {
                    productID: String,
                    date: Date,
                    value: String,
                }
            ]
        },
    },
    inventory: {
        type: Array, default: [
            {
                productID: String,
                buyAt: String,
            }
        ]
    },
});

module.exports = mongoose.model('users', userSchema);