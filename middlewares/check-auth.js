const jwt = require('jsonwebtoken');
const config = require('../config');
const checkAuth = (req, res, next) => {
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.tokenSecret, function (err) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.json({ success: false, message: 'Token expired' });
        } else if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        }
      } else {
        req.apiToken = token;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
};

module.exports = checkAuth;
