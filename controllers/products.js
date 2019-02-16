const Models = require('../models');

const getAllProducts = (req, res, next) => Models.products.getAllProducts
  .then(products => res.json(products))
  .catch(next);

const getProduct = (req, res, next) => Models.products.getProduct(req.params.id)
  .then(product => res.json(product))
  .catch(next);

const getReviews = (req, res, next) => {
  return Models.products.getReviews(req.params.id)
    .then(reviews => res.json(reviews))
    .catch(next);
};

const addProduct = (req, res, next) => {
  const product = req.body;
  return Models.products.addProduct(product)
    .then(product => res.json(product))
    .catch(next);
};


module.exports = {
  getAllProducts, getProduct, getReviews, addProduct
};




