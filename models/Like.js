const { model, Schema } = require("mongoose");

const LikeSchema = new Schema({
  places: [{ type: Schema.Types.ObjectId, ref: "places" }],
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = model("like", LikeSchema);
