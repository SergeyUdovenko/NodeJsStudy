module.exports = (sequelize, DataTypes) => {
  var Reviews = sequelize.define('Reviews', {
    title: DataTypes.STRING,
	product_id: DataTypes.INTEGER
	
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
    Reviews.belongsTo(models.Products, {as: 'reviews'})
  };
  return Reviews;
};
