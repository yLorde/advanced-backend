const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name: String,
    value: String,
    image: String,
    seller: String,
});

module.exports = mongoose.model('products', productSchema);