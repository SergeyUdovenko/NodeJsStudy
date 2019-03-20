const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  hasCar: {type: Boolean, default: false}
});

module.exports = {
  UserModel: mongoose.model('User', User)
};