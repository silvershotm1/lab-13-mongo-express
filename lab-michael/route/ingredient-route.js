'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();

const Recipe = require('../model/recipe.js');
const Ingredient = require('../model/ingredients.js');

const ingredientRouter = module.exports = new Router();

ingredientRouter.post('/api/recipe/:recipeID/ingredient', jsonParser, function(req, res, next){
  Recipe.findById(req.params.recipeID, req.body)
  .then( ingredient => res.json(ingredient))
  .catch(next);
});

ingredientRouter.get('/api/recipe/:recipeID/ingredient/:id', function(req, res, next){
  Ingredient.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch(next);
});

ingredientRouter.put('/api/recipe/ingredient', jsonParser, function(req, res, next){
  Ingredient.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then( recipe => res.json(recipe))
  .catch(next);
});