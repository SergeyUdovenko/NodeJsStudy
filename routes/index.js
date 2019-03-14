const express = require('express');
const router = express.Router();

const auth = require('./auth.route');
const products = require('./products.route');
const users = require('./users.route')
const { checkAuth } = require('../middlewares');

//router.use('/auth', auth)

//router.use(checkAuth);

router.use('/products', products)
router.use('/users', users)

module.exports = router
