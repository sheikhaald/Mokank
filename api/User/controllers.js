const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const Notifications = require("../../models/Notifications");
require("dotenv").config();

const hashPassWord = async (password) => {
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
const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const hashMyPw = await hashPassWord(req.body.password);
    req.body.password = hashMyPw;
    console.log("file");
    console.log(req.files);
    console.log(req.file);
    if (req.file) {
      console.log("hi");
      console.log(req.file);
      req.body.profileimage = req.file.path.replace("\\", "/");
    }
    const newUser = await User.create(req.body);
    const token = generateToken(newUser);
    console.log(token);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
const createUser = async (req, res, next) => {
  try {
    req.body.password = await hashPassWord(req.body.password);
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
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("createdPlaces bookedPlaces")
      .select("-password");
    res.status(200).json(user);
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

const register_token = async (req, res, next) => {
  try {
    const { token } = req.body;

    const user = await User.findById(req.user._id);
    const found = user.notification_tokens.find(
      (theToken) => theToken == token
    );

    if (found) {
      return res.status(200).json({ message: "token found!" });
    }

    await user.updateOne({ $push: { notification_tokens: token } });

    return res.status(201).json({ message: "token added!" });
  } catch (error) {
    next(error);
  }
};

const getMyNotification = async (req, res, next) => {
  try {
    console.log(req.user._id);
    const notifications = await Notifications.find({
      user: req.user._id,
    });

    res.status(200).json(notifications);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  updateUser,
  getAllUsers,
  createUser,
  generateToken,
  register,
  getProfile,
  register_token,
  getMyNotification,
};
