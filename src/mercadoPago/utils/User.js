const { User } = require("mercadopago");
const MercadoPagoClient = require("../mercadoPagoClient");

const MP_User = new User(MercadoPagoClient);

module.exports = MP_User;