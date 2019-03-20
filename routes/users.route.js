const express = require('express');
const Controller = require('../controllers');

const router = express.Router();


// router.route('/').get(Controllers.users.getAllUsers);
router.route('/init-user').get(Controller.users.init);
router.route('/:id').delete(Controller.users.delete);

module.exports = router;