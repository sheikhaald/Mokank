const { model, Schema } = require("mongoose");

const UserBusinessSchema = new Schema({
  PlaceName: String,
  PlaceLogo: String,
  RentPrice: String,
  AllowedBusiness: [{ type: Schema.Types.ObjectId, ref: "allowedBusiness" }],
  PlaceAmmenities: [{ type: Schema.Types.ObjectId, ref: "placeAmmenities" }],
  CommericalLicense: String,
  Description: String,
  DayFrom: Date,
  DayTo: Date,
  TimeFrom: Date,
  TimeTo: Date,
});

module.exports = model("userbusiness", UserBusinessSchema);
