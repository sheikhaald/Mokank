const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  phonenumber: Number,
  password: String,
  profileimage: String,
  bookedPlaces: [{ type: Schema.Types.ObjectId, ref: "place" }],
  createdPlaces: [{ type: Schema.Types.ObjectId, ref: "place" }],
  chats: [{ type: Schema.Types.ObjectId, ref: "chat" }],
});

module.exports = model("user", UserSchema);
