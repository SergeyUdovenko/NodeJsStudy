const router = require('express').Router();
const usersData = require('../data/users');
const productsData = require('../data/products');
const users = usersData.users || [];
const products = productsData.products || [];

router.route('/api/users').get((req, res, next) => {
  res.json(users);
  next();
});

router.route('/api/products')
  .get((req, res, next) => {
    res.json(products);
    next();
  })
  .post((req, res, next) => {
    const product = req.body;
    products.push(product);
    res.json(product);
    next();
  });

router.route('/api/products/:id').get((req, res, next) => {
  const productId = req.params.id
  const product = products.find((product) => product.id === +productId);
    try {
      res.json(product);
    }
    catch(err) {
      console.log(err)
    }
    next();
  });

router.route('/api/products/:id/reviews').get((req, res, next) => {
  const productId = req.params.id
  const product = products.find((product) => product.id === +productId);
  try {
    const reviews = product.reviews || [];
    res.json(reviews);
  }
  catch(err) {
    console.log(err)
  }
  next();
});

module.exports = router