const { model, Schema } = require("mongoose");

const Notifications = new Schema({
  text: String,
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

module.exports = model("notifications", Notifications);
