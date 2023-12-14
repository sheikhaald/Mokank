const Address = require("../../models/Address");

exports.createAddress = async (req, res, next) => {
  try {
    const NewAddress = await Address.create(req.body);
    res.status(200).json(NewAddress);
  } catch (error) {
    next(error);
  }
};

exports.updateAddress = async (req, res, next) => {
  try {
    await req.address.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findAddress = async (AddressId, next) => {
  try {
    const address = await Address.findById(AddressId);
    if (address) return address;
    next({ message: "Address not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.deleteAddress = async (req, res, next) => {
  try {
    await req.address.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneAddress = async (req, res, next) => {
  try {
    const address = await req.address;
    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};

exports.getAllAddresses = async (req, res, next) => {
  try {
    const address = await address.find();
    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};
