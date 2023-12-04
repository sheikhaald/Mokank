const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  phonenumber: Number,
  password: String,
  profileimage: String,
});

module.exports = model("user", UserSchema);
