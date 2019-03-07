const tokenExpiredIn = 60*3;
const tokenSecret = process.env.TOKEN_SECRET || 'admin';

const user = {
  login: 'admin',
  pass: 'admin'
};

module.exports = {
  tokenExpiredIn,
  tokenSecret,
  user
};
