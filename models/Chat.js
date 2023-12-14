const { model, Schema } = require("mongoose");

const Chat = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  status: String,
  message: String,
});

module.exports = model("chat", Chat);
