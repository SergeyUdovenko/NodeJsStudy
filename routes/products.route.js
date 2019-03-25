const express = require('express');
const Controller = require('../controllers');

const router = express.Router();


router.route('/').get(Controller.products.getAllProducts);
router.route('/init-product').get(Controller.products.initProduct);
router.route('/:id').delete(Controller.products.deleteProduct);

module.exports = router;