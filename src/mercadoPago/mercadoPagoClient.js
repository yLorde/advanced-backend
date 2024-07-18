const { default: MercadoPagoConfig } = require("mercadopago");
const { accessToken } = require("../data/mercadoPago");

const MercadoPagoClient = new MercadoPagoConfig({
    accessToken: accessToken,
});

module.exports = MercadoPagoClient;