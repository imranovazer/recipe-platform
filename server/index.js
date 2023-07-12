const Category = require("./models/Category");
const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const UserRouter = require("./routes/UserRoute");
const RecipeRouter = require("./routes/RecipeRoute");
dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.use(fileUpload());
app.use("/api/user", UserRouter);

app.use("/api/recipe", RecipeRouter);

app.post("/api/category", async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({
      name,
    });

    res.status(201).json({ status: "sucess", data: category });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});
app.get("/api/category", async (req, res) => {
  try {
    const category = await Category.find();

    res.status(201).json({ status: "sucess", data: category });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});

const db = mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("Connected to mongo db");
});
const port = process.env.PORT | 8080;
app.listen(port, () => {
  console.log("Server started on port", port);
});
