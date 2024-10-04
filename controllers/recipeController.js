const Recipe = require('../models/Recipe');

// Create a new recipe
const createRecipe = async (req, res) => {
    const { title, ingredients, instructions, cuisineType } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            cuisineType,
            author: req.user, 
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get a recipe by ID
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a recipe
const updateRecipe = async (req, res) => {
    const { title, ingredients, instructions, cuisineType } = req.body;

    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        
        if (recipe.author.toString() !== req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        recipe.title = title || recipe.title;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;
        recipe.cuisineType = cuisineType || recipe.cuisineType;

        const updatedRecipe = await recipe.save();
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        
        if (recipe.author.toString() !== req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await recipe.remove();
        res.status(200).json({ message: 'Recipe removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe };
