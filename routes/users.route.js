const express = require('express');
const Controller = require('../controllers');

const router = express.Router();


// router.route('/').get(Controllers.users.getAllUsers);
router.route('/init-user').get(Controller.users.initUser);
router.route('/:id').delete(Controller.users.deleteUser);

module.exports = router;