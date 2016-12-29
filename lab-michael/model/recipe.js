'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipeSchema = Schema({
  name: {type: String, required: true},
  // mealType: {type: String, required: true},
  createDate: {type: Date},
  // directions: {type: String},
  // origin: {type: String, required:true}
  // ingredients: {type: String},
  recipeDetailsID: {type:Schema.Types.ObjectId}
});

module.exports = mongoose.model('recipe', recipeSchema); // look at later