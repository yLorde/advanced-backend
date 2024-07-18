const { Payment } = require("mercadopago");
const MercadoPagoClient = require("../mercadoPagoClient");

const MP_Payment = new Payment(MercadoPagoClient);

module.exports = MP_Payment;