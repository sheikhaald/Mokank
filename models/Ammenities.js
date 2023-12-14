const { model, Schema } = require("mongoose");
const AmmenitiesSchema = new Schema({
  name: String,
  icon: String,
});

module.exports = model("ammennities", AmmenitiesSchema);
