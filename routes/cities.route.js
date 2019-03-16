const express = require('express');
const Controller = require('../controller');

const router = express.Router();

//localhost:3001/api/cities
router.route('/init-city').get(Controller.City.init);
router.route('/random').get(Controller.City.getRandom);
router.route('/').get(Controller.City.getAll);
router.route('/').post(Controller.City.create);
router.route('/:id').delete(Controller.City.delete);

module.exports = router;