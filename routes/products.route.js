const express = require('express');
const Controller = require('../controllers');

const router = express.Router();


// router.route('/').get(Controllers.users.getAllUsers);
router.route('/').get(Controller.products.getAll);
router.route('/init-product').get(Controller.products.init);
router.route('/:id').delete(Controller.products.delete);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Controllers = require('../controllers');
// router.route('/')
// 	.get(Controllers.products.getAllProducts)
// 	.post(Controllers.products.addProduct);

// router.route('/:id').get(Controllers.products.getProduct);

// router.route('/:id/reviews').get(Controllers.products.getReviews);
// module.exports = router;