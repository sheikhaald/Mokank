const { model, Schema } = require("mongoose");

const AllowedBusinessSchema = new Schema({
  name: String,
  icon: String,
});

module.exports = model("allowedBusiness", AllowedBusinessSchema);
