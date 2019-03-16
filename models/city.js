const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema({
  name: String,
  country: {type: String, dafault: ''},
  capital: {type: Boolean, dafault: false},
  location: Object
});

module.exports = {
  CityModel: mongoose.model('City', City)
};
