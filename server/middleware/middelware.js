const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(403).json({
          status: "fail",
          message: "You are not authorized",
        });
      }

      const verify = await jwt.verify(token, process.env.SECRET_KEY);

      const user = await User.findById(verify.id);
      if (!user) {
        return res.status(403).json({
          status: "fail",
          message: "You are not authorized",
        });
      }

      req.user = user;
      return next();
    } else {
      return res.status(403).json({
        status: "fail",
        message: "You are not authorized",
      });
    }
  } catch (error) {
    return res.status(403).json({
      status: "fail",
      message: "You are not authorized",
    });
  }
};
