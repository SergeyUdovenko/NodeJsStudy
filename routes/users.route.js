const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');


// router.route('/').get(Controllers.users.getAllUsers);
router.route('/init-user', Controllers.users.init);
router.route('/:id', Controllers.users.delete);
module.exports = router;