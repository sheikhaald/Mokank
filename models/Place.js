const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  price: { type: String, required: true, unique: true },
  image: { type: String, required: false, unique: true },
  businessType: { type: String, required: false, unique: true },
  allowedBusiness: { type: String, required: false, unique: true },
  startDate: { type: String, required: false, unique: true },
  endDate: { type: String, required: false, unique: true },
  BusinessUser: [{ type: Schema.Types.ObjectId, ref: "businessuser" }],
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

module.exports = model("place", PlaceSchema);
