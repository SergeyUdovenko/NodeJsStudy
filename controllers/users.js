const Models = require('../models');

const getAllUsers = (req, res, next) => Models.Users.findAll({
  attributes: ['id', 'name', 'type'],
  raw: true
})
  .then(users => res.json(users))
  .catch(next);

module.exports = {
  getAllUsers
};
