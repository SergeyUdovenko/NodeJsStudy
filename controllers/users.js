
const UserModel = require('../models').UserModel;
const users = require('../data/users.1');

module.exports.init = (req, res) => {

  UserModel.create(users, (error, data) =>{
    if (error) console.log(error);
    res.json(data)
  })
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  UserModel.findOneAndRemove({_id: id}).exec((error, data)=>{
    if (error) {
      res.status(500).end('Error: fail to find user with id: ', id)
    }
    res.end(`Success: User with id: ${id} removed`)
  })
};
// const Models = require('../models');

// const getAllUsers = (req, res, next) => Models.Users.findAll({
//   attributes: ['id', 'name', 'type'],
//   raw: true
// })
//   .then(users => res.json(users))
//   .catch(next);

// module.exports = {
//   getAllUsers
// };