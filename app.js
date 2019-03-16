const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config').mongoCongif;
const routers = require('./routes');

const server = express();
server.use(bodyParser.json());
server.use('/api', routers);

mongoose.connect(`${config.url}/${config.dbName}`, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to DB'));




server.listen(3001, ()=> console.log('Server start on port :3001'));