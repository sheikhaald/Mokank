const { model, Schema } = require("mongoose");
const CategorySchema = new Schema({
  name: String,
  image: String,
  place: [{ type: Schema.Types.ObjectId, ref: "place" }],
});

module.exports = model("category", CategorySchema);
