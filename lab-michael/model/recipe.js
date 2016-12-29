'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipeSchema = Schema({
  name: {type: String, required: true},
  createDate: {type: Date},
  ingredients: {type:Schema.Types.ObjectId, ref: 'ingredients'}
});

const Recipe = module.exports = mongoose.model('recipe', recipeSchema); // look at later

Recipe.findByIdAndAddIngredients = function(id, recipe) {
  return Recipe.findById(id)
  .catch(err)
  .then(recipe => {
    ingredients.recipeID = recipe._id;
    this.tempRecipe = recipe;
    return new Recipe(recipe).save();
  })
  .then( ingredient => {
    this.tempRecipe.ingredients.push(ingredient._id);
    this.tempIngredient = ingredient;
    return this.tempRecipe.save();
  })
  .then( () => {
    return this.tempIngredient;
  });
};