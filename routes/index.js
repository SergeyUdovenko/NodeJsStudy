const router = require('express').Router();

router.route('/api/users').get();

router.route('/api/products')
  .get()
  .post();

router.route('/api/products/:id').get();

router.route('/api/products/:id/reviews').get();

module.exports = router