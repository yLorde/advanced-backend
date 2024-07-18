const { PaymentRefund } = require('mercadopago');
const MercadoPagoClient = require('../mercadoPagoClient');

const MP_PaymentRefund = new PaymentRefund(MercadoPagoClient);

module.exports = MP_PaymentRefund;