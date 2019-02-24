const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: "1080281834705-n0m7o4258r79tgvdk40ojnr2noa0gr41.apps.googleusercontent.com",
    clientSecret: "lAmsZHBlCqzr2LJ7CijuBDRq",
    callbackURL: "http://127.0.0.1:8080/"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));