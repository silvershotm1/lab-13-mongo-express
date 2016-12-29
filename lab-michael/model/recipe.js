'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ingredient = require('./ingredients.js');
const createError = require('http-errors');

let recipeSchema = Schema({
  name: {type: String, required: true},
  createDate: {type: Date},
  ingredients: {type:Schema.Types.ObjectId, ref: 'ingredients'}
});

const Recipe = module.exports = mongoose.model('recipe', recipeSchema); // look at later

Recipe.findByIdAndAddItem = function(id, ingredient){
  return Recipe.findById(id)
  .catch(err => Promise.reject(createError(404, err.message)))
  .then(recipe => {
    ingredient.recipeID = recipe._id;
    this.tempRecipe = recipe;
    return new Ingredient(ingredient).save();
  })
  .then( ingredient => {
    this.tempRecipe.ingredient.push(ingredient._id);
    this.tempIngredient = ingredient;
    return this.tempStore.save();
  })
  .then( () => {
    return this.tempIngredient;
  });
};