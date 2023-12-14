const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema({
  PlaceName: String,
  RentPrice: Number,
  image: String,
  AllowedBusiness: [{ type: Schema.Types.ObjectId, ref: "allowedBusiness" }],
  BusinessType: { type: Schema.Types.ObjectId, ref: "businessTypeSchema" },
  PlaceAmmenities: [{ type: Schema.Types.ObjectId, ref: "placeAmmenities" }],
  Description: String,
  // DayFrom: Date,
  // DayTo: Date,
  placeImages: [String],
});

module.exports = model("place", PlaceSchema);
