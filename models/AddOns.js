const { model, Schema } = require("mongoose");

const AddOnsSchema = new Schema({
  name: String,
  Price: String,
});

module.exports = model("addons", AddOnsSchema);
