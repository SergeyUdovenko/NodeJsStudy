const router = require('express').Router();
const Controllers = require('../controllers');

router.route('/api/users').get(Controllers.users.getAllUsers);

router.route('/api/products')
  .get(Controllers.products.getAllProducts)
  .post(Controllers.products.addProduct);

router.route('/api/products/:id').get(Controllers.products.getProduct);

router.route('/api/products/:id/reviews').get(Controllers.products.getReviews);

module.exports = router
