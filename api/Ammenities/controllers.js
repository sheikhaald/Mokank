const Ammenities = require("../../models/Ammenities");

exports.createAmmenities = async (req, res, next) => {
  try {
    const ammenities = await Ammenities.create();
    res.status(200).json(ammenities);
  } catch (error) {
    next(error);
  }
};

exports.getAllAmmenities = async (req, res, next) => {
  try {
    const ammenities = await ammenities.find();
    res.status(200).json(ammenities);
  } catch (error) {
    next(error);
  }
};
