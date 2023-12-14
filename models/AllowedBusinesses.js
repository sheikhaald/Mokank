const { model, Schema } = require("mongoose");

const AllowedBusinesses = new Schema({
  text: [String],
});

module.exports = model("allowed", AllowedBusinesses);
