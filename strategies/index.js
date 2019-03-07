const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config');

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'pass',
  },
  (username, password, done) => {
    if (!username ||
      username !== config.user.login ||
      password !== config.user.pass) {

      return done(null, false, { message: 'Not Found' });
    }
    return done(null, {user: config.user});
  }
));
