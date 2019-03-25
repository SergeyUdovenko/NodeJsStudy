
const UserModel = require('../models').UserModel;
const users = require('../data/users.1');

module.exports.initUser = (req, res) => {

  UserModel.create(users, (error, data) =>{
    if (error) console.log(error);
    res.json(data)
  })
};

module.exports.deleteUser = (req, res) => {
  const id = req.params.id;

  UserModel.findOneAndRemove({_id: id}).exec((error, data)=>{
    if (error) {
      res.status(500).end('Error: fail to find user with id: ', id)
    }
    res.end(`Success: User with id: ${id} removed`)
  })
};