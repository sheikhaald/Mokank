const { model, Schema } = require("mongoose");
const AmmenitiesSchema = new Schema({
  name: String,
  places: [{ type: Schema.Types.Array, ref: "places" }],
});

module.exports = model("ammennities", AmmenitiesSchema);
