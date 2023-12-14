const { model, Schema } = require("mongoose");

const BusinessTypeSchema = new Schema({
  name: String,
  icon: String,
  places: [{ type: Schema.Types.ObjectId, ref: "place" }],
});

module.exports = model("businessType", BusinessTypeSchema);
