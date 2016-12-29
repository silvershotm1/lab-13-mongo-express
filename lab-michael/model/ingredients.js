'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ingredientsSchema = Schema ({
  mealType: {type: String, required: true},
  directions: {type: String},
  origin: {type: String, required:true},
  // ingredients: {type: String},
  recipeID: {type:Schema.Types.ObjectId, ref: 'recipe'}
});

module.exports = mongoose.model('ingredients', ingredientsSchema);
