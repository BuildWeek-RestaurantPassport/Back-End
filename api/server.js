const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//const jwt = require('jsonwebtoken');

//const authenticate = require('../auth')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("I actually work!!");
})

module.exports = server;