const data = require('../data/users');
const users = data.users || [];

const getAllUsers = new Promise((resolve) => {
  resolve(users)
});

module.exports = {
  getAllUsers
};