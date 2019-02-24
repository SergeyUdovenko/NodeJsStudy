require('../strategies');
require('../strategies/facebook.strategy')
require('../strategies/google.strategy')
//require('../strategies/twitter.strategy')
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Controllers = require('../controllers');

router.route('/auth').post(Controllers.auth.login);

const params = {
  session: false
};
router.route('/auth/local')
  .post(passport.authenticate('local', params),
    Controllers.auth.login
  );

router.route('/auth/facebook').post(passport.authenticate('facebook'),
  Controllers.auth.login
)
router.route('/auth/google').post(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
  Controllers.auth.login
)
module.exports = router;