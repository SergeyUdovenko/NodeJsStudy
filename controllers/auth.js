const jwt = require('jsonwebtoken');
const config = require('../config');

const login = (req, res) => {
  const user = req.body;
  if (!user ||
    user.login !== config.user.login ||
    user.pass !== config.user.pass) {
    res.status(404).send({ message: "Not Found" });
    return;
  }

  const token = jwt.sign(user, config.tokenSecret, { expiresIn: config.tokenExpiredIn });
  res.status(200).json({
    message: "OK",
    data: {
      email: "user@gmail.com",
      username: user.login
    },
    token
  });
};

module.exports = {
  login
};
