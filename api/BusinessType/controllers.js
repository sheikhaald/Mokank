const BusinessType = require("../../models/BusinessType");
const Place = require("../../models/Place");

const createBusinessType = async (req, res, next) => {
  try {
    const newBusinessType = await BusinessType.create(req.body);
    res.status(201).json(newBusinessType);
  } catch (error) {
    next(error);
  }
};

const getAllBusinessTypes = async (req, res, next) => {
  try {
    const business = await BusinessType.find();
    res.status(200).json(business);
  } catch (error) {
    next(error);
  }
};

const updateBusinessType = async (req, res, next) => {
  try {
    await req.business.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
const addTypeToPlace = async (req, res, next) => {
  try {
    const businessType = await BusinessType.findById(req.body.typeId);
    const place = await Place.findById(req.body.placeId);
    if (!businessType)
      return res.status(401).json({ message: "the typeId is wrong" });
    if (!place)
      return res.status(401).json({ message: "the  placeId is wrong" });

    await businessType.updateOne({
      $push: { places: place._id },
    });

    await place.updateOne({
      $push: { BusinessType: businessType._id },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateBusinessType,
  getAllBusinessTypes,
  createBusinessType,
  addTypeToPlace,
};
