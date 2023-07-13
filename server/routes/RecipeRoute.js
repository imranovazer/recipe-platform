const express = require("express");
const RecipeController = require("../controllers/RecipeController");
const Middelware = require("../middleware/middelware");
const route = express.Router();

route
  .route("/")
  .post(Middelware.protect, RecipeController.createRecipe)
  .get(RecipeController.getAllRecipes);

route
  .route("/:id")
  .delete(Middelware.protect, RecipeController.deleteRecipe)
  .get(RecipeController.getOneRecipe);

route
  .route("/add-to-favorite/:id")
  .post(Middelware.protect, RecipeController.addToFavorite);

route
  .route("/remove-from-favorite/:id")
  .post(Middelware.protect, RecipeController.removeFromFavorite);

module.exports = route;
