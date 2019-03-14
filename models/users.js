module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
