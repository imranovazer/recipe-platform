const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  follow: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
