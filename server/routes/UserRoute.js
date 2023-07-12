const express = require("express");
const userController = require("../controllers/UserController");
const Middelware = require("../middleware/middelware");
const router = express.Router();

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router.route("/who-am-i").get(Middelware.protect, userController.whoAmI);
module.exports = router;
