const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema({
	name: String,
	country: {
		type: String,
		default: ''
	},
	capital: {
		type: Boolean,
		default: false
	},
	location: Object,
	lastModifiedDate: Date,
});

City.pre('save', function (doc, next) {
	this.lastModifiedDate = Date.now();
	next();
});

City.pre('update', function (doc,next) {
	this.lastModifiedDate = Date.now();
	next();
});

module.exports = {
	CityModel: mongoose.model('City', City)
};