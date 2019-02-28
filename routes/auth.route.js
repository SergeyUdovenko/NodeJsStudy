require('../strategies');
require('../strategies/facebook.strategy')
require('../strategies/google.strategy')
//require('../strategies/twitter.strategy')
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Controllers = require('../controllers');

const params = {
  session: false
};

router.route('/').post(Controllers.auth.login);

router.route('/local')
  .post(passport.authenticate('local', params),
    Controllers.auth.login
  );

router.route('/facebook').post(passport.authenticate('facebook'),
  Controllers.auth.login
)
router.get('/facebook',
	passport.authenticate('facebook'));

router.get('/facebook/callback',
	Controllers.auth.login,
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});
	
router.route('/google').post(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
  Controllers.auth.login
)
module.exports = router;