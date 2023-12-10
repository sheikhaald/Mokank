const bcrypt = require("bcryptjs");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;

const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
  },
  async (username, password, done) => {
    try {
      console.log("object");
      const user = await User.findOne({ username: username });
      console.log(user);
      if (!user) return done({ message: "username or password is wrong" });
      const checkPass = await bcrypt.compare(password, user.password);
      console.log(checkPass);
      if (!checkPass) return done({ message: "username or password is wrong" });
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = localStrategy;
