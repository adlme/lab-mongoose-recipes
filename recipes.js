'use strict';

const mongoose = require('mongoose');

const data = require('./data.js');
const Recipe = require('./models/Recipe')


mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const createOneRecipe = async () => {
  try {
    const response = await Recipe.create({
      //esto es el documento
      title: 'Brocoli con patatas',
      level: 'UltraPro Chef',
      ingredients: ['brocoli', 'patatas', 'ajo', 'aceite', 'sal'],
      cuisine: 'veggie',
      dishType: 'Dish',
      duration: 30,
      creator: 'Anna',
    });
    console.log(response.title)
  }
  catch(error) {
    console.log(error);
  }
}

const addManyRecipes = async (data) => {
  try{
    const response = await Recipe.insertMany(data);
    response.forEach(recipe => console.log(recipe.title))
  }
  catch (error) {
    console.log(error)
  }
}

createOneRecipe();
addManyRecipes(data);

Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100})