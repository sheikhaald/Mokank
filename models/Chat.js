const { model, Schema } = require("mongoose");

const Chat = new Schema({
  members: [{ type: Schema.Types.ObjectId, ref: "member" }],
  msgs: [{ type: Schema.Types.ObjectId, ref: "msg" }],
});

module.exports = model("chat", Chat);
