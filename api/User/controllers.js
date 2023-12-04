const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.PRIVATE_KEY, {
    expiresIn: process.env.EXP_TIME,
  });
  return token;
};

const createUser = async (req, res, next) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const newUser = await User.create(req.body);
    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    await User.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  updateUser,
  getAllUsers,
  createUser,
  hashPassword,
  generateToken,
};
