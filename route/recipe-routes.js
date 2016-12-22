const Router = require('express').Router;
const jsonParser = require('body-parser').json();

let Recipe = require('../model/recipe');
let recipeRouter = module.exports = new Router();

recipeRouter.post('/api/recipe', jsonParser, (req, res, next) => {
  req.body.createDate = new Date();
  new Recipe(req.body).save()
    .then(recipe => res.json(recipe))
    .catch(next);
});

recipeRouter.get('/api/recipe/:id', (req, res, next) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(next);
});