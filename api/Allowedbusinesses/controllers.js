const AllowedBusiness = require("../../models/AllowedBusinesses");

exports.findBusiness = async (BusinessId, next) => {
  try {
    const business = await AllowedBusiness.findById(BusinessId);
    if (business) return business;
    next({ message: "Recipe not found", status: 404 });
  } catch (error) {
    next(error);
  }
};
const createAllowedBusiness = async (req, res, next) => {
  try {
    const newAllowedBusiness = await AllowedBusiness.create(req.body);
    res.status(201).json(newAllowedBusiness);
  } catch (error) {
    next(error);
  }
};

const getAllAllowedBusinesss = async (req, res, next) => {
  try {
    const business = await AllowedBusiness.find();
    res.status(200).json(business);
  } catch (error) {
    next(error);
  }
};

const updateAllowedBusiness = async (req, res, next) => {
  try {
    await req.business.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateAllowedBusiness,
  getAllAllowedBusinesss,
  createAllowedBusiness,
};
