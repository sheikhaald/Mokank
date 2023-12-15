const { model, Schema } = require("mongoose");

const SponsorshipSchema = new Schema({
  title: String,
  subTitle: String,
  image: String,
});

module.exports = model("sponsorship", SponsorshipSchema);
