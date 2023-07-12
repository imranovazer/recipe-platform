const mongoose = require("mongoose");

const reviewSchmea = new mongoose.Schema({
  score: {
    type: String,
    min: 0,
    max: [5, "The largest amount of rate is 5 "],
  },
  recepieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: String,
});

const Review = mongoose.model("Review", reviewSchmea);

module.exports = Review;
