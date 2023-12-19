const { model, Schema } = require("mongoose");

const Memebr = new Schema({
  status: { type: ["online", "offline"], default: "offline" },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = model("member", Memebr);
