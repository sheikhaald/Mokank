const Ammenities = require("../../models/Ammenities");

exports.createAmmenity = async (req, res, next) => {
  try {
    const newAmmenity = await Ammenities.create(req.body);
    res.status(201).json(newAmmenity);
  } catch (error) {
    next(error);
  }
};

exports.getAllAmmenities = async (req, res, next) => {
  try {
    const ammenities = await Ammenities.find();
    res.status(200).json(ammenities);
  } catch (error) {
    next(error);
  }
};

exports.updateAmmenity = async (req, res, next) => {
  try {
    await req.like.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.ammenityDelete = async (req, res, next) => {
  try {
    await req.like.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
