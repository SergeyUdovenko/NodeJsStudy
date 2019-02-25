const Models = require('../models');

const getAllUsers = (req, res, next) => Models.users.getAllUsers
  .then(users => res.json(users))
  .catch(next);

module.exports = {
  getAllUsers
};
