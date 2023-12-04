const { model, Schema } = require("mongoose");

const AddOnsSchema = new Schema({
  image: String,
  name: String,
  Price: String,
});

module.exports = model("place", PlaceSchema);
