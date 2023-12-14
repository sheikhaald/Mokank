const AllowedBusiness = require("../../models/AllowedBusiness");

exports.createAllowedBusiness = async (req, res, next) => {
  try {
    const NewAllowedBusiness = await AllowedBusiness.create(req.body);
    res.status(200).json(NewAllowedBusiness);
  } catch (error) {
    next(error);
  }
};

exports.updateAllowedBusiness = async (req, res, next) => {
  try {
    await req.allowedbusiness.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findAllowedBusiness = async (AllowedBusinessId, next) => {
  try {
    const AllowedBusiness = await AllowedBusiness.findById(AllowedBusinessId);
    if (allowedbusiness) return allowedbusiness;
    next({ message: "Allowed Business not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.deleteAllowedBusiness = async (req, res, next) => {
  try {
    await req.allowedbusiness.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneAllowedBusiness = async (req, res, next) => {
  try {
    const allowedbusiness = await req.allowedbusiness;
    res.status(200).json(allowedbusiness);
  } catch (error) {
    next(error);
  }
};

exports.getAllAllowedBusinesses = async (req, res, next) => {
  try {
    const allowedbusiness = await allowedbusiness.find();
    res.status(200).json(allowedbusiness);
  } catch (error) {
    next(error);
  }
};
