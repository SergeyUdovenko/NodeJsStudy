const express = require('express');
const app = express();

const models = require('./models')

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

models.Products.findAll({
    attributes: ['id', 'name', 'price'],
    raw: true
  })
  .then(data => {
    console.log(data);
  })

models.Reviews.findAll({
    attributes: ['title'],
    raw: true
  })
  .then(data => console.log(data))
models.Users.findAll({
    attributes: ['id', 'name', 'type'],
    raw: true
  })
  .then(data => {
    console.log(data);
  })
module.exports = app;
