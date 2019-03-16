const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  hasCar: {type: Boolean, dafault: false}
});

module.exports = {
  UserModel: mongoose.model('User', User)
};


// module.exports = (sequelize, DataTypes) => {
//   var Users = sequelize.define('Users', {
//     name: DataTypes.STRING,
//     type: DataTypes.STRING
//   }, {});
//   Users.associate = function(models) {
//     // associations can be defined here
//   };
//   return Users;
// };
