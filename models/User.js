const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {type:String, required:true, unique:true},
  phonenumber: Number,
  password: String,
  profileimage: String,
});

module.exports = model("user", UserSchema);
