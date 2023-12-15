const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  phonenumber: Number,
  password: String,
  profileimage: String,
  bookedPlaces: [{ type: Schema.Types.ObjectId, ref: "place" }],
});

module.exports = model("user", UserSchema);
