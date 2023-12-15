const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  price: { type: String, required: true, unique: true },
  image: { type: String, required: false, unique: true },
  startDate: { type: String, required: false, unique: true },
  endDate: { type: String, required: false, unique: true },
  businessUser: [{ type: Schema.Types.ObjectId, ref: "businessuser" }],
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],

  allowedBusiness: [{ type: Schema.Types.ObjectId, ref: "allowedBusiness" }],
  businessType: { type: Schema.Types.ObjectId, ref: "businessTypeSchema" },
  placeAmmenities: [{ type: Schema.Types.ObjectId, ref: "placeAmmenities" }],
  // DayFrom: Date,
  // DayTo: Date,
  placeImages: [String],
});

module.exports = model("place", PlaceSchema);
