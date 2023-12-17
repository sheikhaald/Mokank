const { model, Schema } = require("mongoose");

const PlaceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: false },
  startDate: { type: String, required: false },
  endDate: { type: String, required: false },
  businessUser: { type: Schema.Types.ObjectId, ref: "businessuser" },
  // user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  booked: { type: Boolean, default: false },
  bookedBy: { type: Schema.Types.ObjectId, ref: "user" },
  address: { type: String, default: "kuwait city" },
  allowedBusiness: [{ type: Schema.Types.ObjectId, ref: "allowedBusiness" }],
  businessType: { type: Schema.Types.ObjectId, ref: "businessTypeSchema" },
  placeAmmenities: [{ type: Schema.Types.ObjectId, ref: "placeAmmenities" }],
  // DayFrom: Date,
  // DayTo: Date,
  placeImages: [String],
});

module.exports = model("place", PlaceSchema);
