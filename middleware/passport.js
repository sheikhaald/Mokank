const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;
require("dotenv").config();
exports.localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  async (username, password, done) => {
    try {
      const user = await User.findOne({
        $or: [{ username: username }, { email: username }],
      });
      if (!user) {
        return done({ message: "Invalid credentials" }, false);
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done({ message: "Invalid credentials" }, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

exports.jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PRIVATE_KEY,
  },
  async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.exp * 1000) {
      return done(null, false);
    }
    try {
      const user = await User.findById(jwtPayload._id);
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);
