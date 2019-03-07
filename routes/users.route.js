const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');


router.route('/').get(Controllers.users.getAllUsers);

module.exports = router;