const express = require('express');
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/', protect, createRecipe);


router.get('/', getRecipes);


router.get('/:id', getRecipeById);


router.put('/:id', protect, updateRecipe);


router.delete('/:id', protect, deleteRecipe);

module.exports = router;
