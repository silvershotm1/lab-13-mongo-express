'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();

const Recipe = require('../model/recipe.js');
const Ingredient = require('../model/ingredients.js');

const ingredientRouter = module.exports = new Router();

ingredientRouter.post('/api/recipe/:recipeID/ingredient', jsonParser, function(req, res, next){
  Recipe.findByIdAndAddProject(req.params.recipeID, req.body)
  .then( project => res.json(project))
  .catch(next);
});

ingredientRouter.get('/api/portfolio/ingredient', function(req, res, next){
  Ingredient.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch(next);
});

ingredientRouter.put('/api/portfolio/project', jsonParser, function(req, res, next){
  Ingredient.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then( recipe => res.json(recipe))
  .catch(next);
});