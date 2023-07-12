const express = require("express");
const RecipeController = require("../controllers/RecipeController");
const Middelware = require("../middleware/middelware");
const route = express.Router();

route
  .route("/")
  .post(Middelware.protect, RecipeController.createRecipe)
  .get(RecipeController.getAllRecipes);

route.route("/:id").delete(Middelware.protect, RecipeController.deleteRecipe);

module.exports = route;
