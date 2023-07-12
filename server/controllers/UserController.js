const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hash = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hash,
    });

    res.status(201).json({
      status: "sucess",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({
      status: "fail",
      massage: "User with this email doesn't exsist",
    });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    res.status(401).json({
      status: "fail",
      message: "Password or email is wrong",
    });
  }

  const token = await jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "10d" }
  );

  res.status(201).json({
    status: "sucess",
    access: token,
  });
};
