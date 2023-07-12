const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
  photo: String,
  coverImage: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
