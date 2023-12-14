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

exports.getOneAmmenities = async (req, res, next) => {
  try {
    const ammenities = await req.ammenities;
    res.status(200).json(ammenities);
  } catch (error) {
    next(error);
  }
};

exports.updateAmmenities = async (req, res, next) => {
  try {
    await req.ammenities.updateOne(req.body);
    res.status(204).end();
  } catch (error) {}
};

exports.deleteAmmenities = async (req, res, next) => {
  try {
    await req.ammenities.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findAmmenities = async (AmmenitiesId, next) => {
  try {
    const ammenities = await Ammenities.findById(AmmenitiesId);
    if (ammenities) return ammenities;
    next({ message: "Ammenities not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.addAmmenitiesToPlaces = async (req, res, next) => {
  try {
    await req.ammenities.updateOne({ $push: { place: req.place } });
    await req.place.updateOne({ $push: { ammenities: req.ammenities } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
