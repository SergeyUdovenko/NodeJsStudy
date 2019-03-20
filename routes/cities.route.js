const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

//localhost:3001/api/cities
router.route('/init-city').get(Controller.city.init);
router.route('/random').get(Controller.city.getRandom);
router.route('/').get(Controller.city.getAll);
router.route('/').post(Controller.city.create);
router.route('/:id').put(Controller.city.update);
router.route('/:id').delete(Controller.city.delete);

module.exports = router;