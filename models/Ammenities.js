const { model, Schema } = require("mongoose");
const AmmenitiesSchema = new Schema({
  name: String,
  places: [{ type: Schema.Types.ObjectId, ref: "places" }],
});

module.exports = model("ammennities", AmmenitiesSchema);
