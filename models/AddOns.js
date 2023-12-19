const { model, Schema } = require("mongoose");

const AddOnsSchema = new Schema({
  name: String,
  Price: Number,
});

module.exports = model("addons", AddOnsSchema);
