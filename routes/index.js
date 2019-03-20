const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

const cities = require('./cities.route');
const users = require('./users.route');
const products = require('./products.route')

//localhost:3001/api/cities

router.use('/users', users);
router.use('/cities', cities);
router.use('/products', products);


module.exports = router;
