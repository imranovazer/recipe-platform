const Recipe = require("../models/Recipe");

const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
var fs = require("fs");

exports.createRecipe = async (req, res) => {
  try {
    var nameToDb,
      nameToDb2 = null;
    if (req.files.photo) {
      const file = req.files.photo;
      let fileExt = file.name.substring(file.name.lastIndexOf("."));
      const uuidv = uuidv4();
      uploadPath = __dirname + "/../images/recipe/" + uuidv + fileExt;
      nameToDb = "/../images/recipe/" + uuidv + fileExt;
      file.mv(uploadPath, function (err) {
        console.log(err);
      });
    }
    if (req.files.coverImage) {
      const file2 = req.files.coverImage;
      let file2Ext = file2.name.substring(file2.name.lastIndexOf("."));
      const uuidv2 = uuidv4();
      uploadPath2 = __dirname + "/../images/recipe/" + uuidv2 + file2Ext;
      nameToDb2 = "/../images/recipe/" + uuidv2 + file2Ext;
      file2.mv(uploadPath2, function (err) {
        console.log(err);
      });
    }
    const user = req.user;
    const { name, body, categoryId } = req.body;
    const newRecipe = await Recipe.create({
      name,
      body,
      userId: user._id,
      categoryId,
      photo: nameToDb,
      coverImage: nameToDb2,
    });
    user.recipies.push(newRecipe._id);
    await user.save();

    res.status(201).json({
      ststus: "sucess",
      data: newRecipe,
    });
  } catch (error) {
    res.status(400).json({
      ststus: "fail",
      error,
    });
  }
};
// exports.uploadImageToRecipe = async (req, res) => {
//   try {
//     let file = req.files.photo;
//     let fileExt = file.name.substring(file.name.lastIndexOf("."));
//     const uuidv = uuidv4();
//     uploadPath = __dirname + "/../images/events/" + uuidv + fileExt;
//     const pathToDb = "/images/events/" + uuidv + fileExt;
//     file.mv(uploadPath, function (err) {
//       console.log(err);
//     });
//     const recipe = await Recipe.findById(req.params.id);
//     const newImages = [...recipe.image, pathToDb];

//     const data = await Recipe.findByIdAndUpdate(req.params.id, {
//       image: newImages,
//     });
//     res.status(201).json({
//       status: "success",
//       data,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       error,
//     });
//   }
// };

exports.deleteRecipe = async (req, res) => {
  try {
    const user = req.user;
    const recipe = await Recipe.findById(req.params.id);

    if (!user._id.equals(recipe.userId)) {
      return res.status(403).json({
        ststus: "fail",
        message: "User can only remove own recipies",
      });
    }
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    fs.unlink(__dirname + deleted.photo, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.unlink(__dirname + deleted.coverImage, function (err) {
      if (err) {
        console.log(err);
      }
    });

    user.recipies = user.recipies.filter((item) => !item.equals(deleted._id));

    await user.save();

    res.status(201).json({
      status: "success",
      deleted,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipies = await Recipe.find();

    res.status(201).json({
      ststus: "sucess",
      data: recipies,
    });
  } catch (error) {
    res.status(400).json({
      ststus: "fail",
      error,
    });
  }
};
