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

City.post('save', function (doc, next) {
	doc.lastModifiedDate = Date.now();
	next();
});

City.pre('findOneAndUpdate', function (next) {
	this.update({},{ $set: { lastModifiedDate: new Date() } });
	next();
});

module.exports = {
	CityModel: mongoose.model('City', City)
};