const { model, Schema } = require("mongoose");

const Msg = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "user" },
  chat: { type: Schema.Types.ObjectId, ref: "chat" },
  text: String,
});

module.exports = model("msg", Msg);
