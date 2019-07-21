'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
      type: String,
      enum: ["Easy Peasy", "Amateur Chef", 'UltraPro Chef']
    },
    ingredients: Array,
    // np hace falta ponerle un objeto si solo le pasas el tipo
    cuisine: {
      type: String,
      required: true
    },
    dishType: {
      type: String,
      enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
    },
    image: {
      type: String,
      default: 'https://images.media-allrecipes.com/images/75131.jpg',
    },
    duration: {
      type: Number,
      min: 0,
    },
    creator: {
      type: String
    },
    created: {
      type: Date,
      default: new Date(),
    }
  })


  //el schema es la plantilla y el modelo es el spray, lo usas para poder printear las cosas en la bbdd
  const Recipe = mongoose.model('Recipe', recipeSchema)

  module.exports = Recipe;