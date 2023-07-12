const mongoose = require("mongoose");

const categorySchmea = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model("Category", categorySchmea);

module.exports = Category;
