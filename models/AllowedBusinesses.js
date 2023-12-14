const { model, Schema } = require("mongoose");

const AllowedBusinessSchema = new Schema({
  name: String,
  icon: String,
  Userbusiness: [{ type: Schema.Types.ObjectId, ref: "userbusiness" }],
});

module.exports = model("allowedBusiness", AllowedBusinessSchema);
