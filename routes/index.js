const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

//localhost:3001/api/cities
router.route('/init-city').get(Controller.city.init);
router.route('/cities/random').get(Controller.city.getRandom);
router.route('/cities').get(Controller.city.getAll);
router.route('/cities').post(Controller.city.create);
router.route('/cities/:id').delete(Controller.city.delete);

router.route('/init-user', Controller.users.init);
router.route('/users/:id', Controller.users.delete);

module.exports = router;
