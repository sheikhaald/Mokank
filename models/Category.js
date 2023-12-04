const { model, Schema } = require("mongoose");
const CategorySchema = new Schema({
  name: String,
  place: [ type: Schema.Types.Array, ref: "place" ],
});

module.exports = model("category", CategorySchema);
