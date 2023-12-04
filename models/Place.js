const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema({
  reviews: String,
  BusinessUser: [{ type: Schema.Types.ObjectId, ref: "businessuser" }],
});

module.exports = model("place", PlaceSchema);
