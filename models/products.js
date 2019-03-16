module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    timestamps: false
  });
  Products.associate = function(models) {
    // associations can be defined here
    Products.hasMany(models.Reviews, {as: 'reviews'})
  };
  return Products;
};
