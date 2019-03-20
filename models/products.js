const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
	name: String,
	brand: String,
	price: Number,
	options: Array
});

module.exports = {
	ProductModel: mongoose.model('Product', Product)
};