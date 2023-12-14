const AddOns = require("../../models/AddOns");

exports.createAddOns = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newAddOns = await AddOns.create(req.body);
    res.status(201).json(newAddOns);
  } catch (error) {
    next(error);
  }
};
exports.getAllAddOns = async (req, res, next) => {
  try {
    const getALL = await AddOns.find();
    res.status(200).json(getALL);
  } catch (error) {
    next(error);
  }
};

exports.getOneAddOns = async (req, res, next) => {
  try {
    const addons = await req.addons;
    res.status(200).json(addons);
  } catch (error) {
    next(error);
  }
};

exports.deleteAddOns = async (req, res, next) => {
  try {
    await req.addons.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
