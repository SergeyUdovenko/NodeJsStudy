const Models = require('../models');

const getAllProducts = (req, res, next) => Models.Products.findAll({
    attributes: ['id', 'name', 'price'],
    raw: true
  })
  .then(products => res.json(products))
  .catch(next);
  
const getProduct = (req, res, next) => Models.Products.findOne({ 
  where: {id: req.params.id}, 
  attributes: ['id', 'name', 'price'],
  raw: true
})
  .then(product => res.json(product))
  .catch(next);

const getReviews = (req, res, next) => {
  return Models.Reviews.findAll({
    where: {product_id: req.params.id},
    attributes: ['title'],
    raw: true
  })
    .then(reviews => res.json(reviews))
    .catch(next);
};

const addProduct = (req, res, next) => {
  const product = req.body;
  return Models.Products.create(product)
    .then(product => res.json(product))
    .catch(next);
};


module.exports = {
  getAllProducts,
  getProduct,
  getReviews,
  addProduct
};