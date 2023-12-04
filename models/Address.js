const { model, Schema } = require("mongoose");

const AddressSchema = new Schema({
  text: String,
});

module.exports = model("address", AddressSchema);
