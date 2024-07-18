const { PaymentMethod } = require("mercadopago");
const MercadoPagoClient = require("../mercadoPagoClient");

const MP_PaymentMethod = new PaymentMethod(MercadoPagoClient);

module.exports = MP_PaymentMethod;