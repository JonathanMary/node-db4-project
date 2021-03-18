const express = require('express');
const db = require('../data/db.config')
const server = express();

server.use(express.json())

server.use("/", (req, res) => {
    res.send("api working")
})

module.exports = server;