const express = require("express");
const userController = require("../controllers/UserController");
const Middelware = require("../middleware/middelware");
const router = express.Router();

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router
  .route("follow-user/:user")
  .post(Middelware.protect, userController.followUser);

router
  .route("unfollow-user/:user")
  .post(Middelware.protect, userController.unfollowUser);

router.route("/who-am-i").get(Middelware.protect, userController.whoAmI);
module.exports = router;
