const { model, Schema } = require("mongoose");

const SponsorshipSchema = new Schema({
  text: String,
  image: String,
});

module.exports = model("sponsorship", SponsorshipSchema);
