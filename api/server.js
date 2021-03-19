const express = require('express');
const server = express();
const Recipe = require('./recipes/recipes-models')

server.use(express.json())

server.get("/api/:id", (req, res) => {
    Recipe.getRecipeById(req.params.id)
          .then( recipe => {
              res.status(200).json(recipe)
          })
          .catch(err => console.log({ err }))
})

server.use("/", (req, res) => {
    res.send("api working")
})

module.exports = server;