const Place = require("../../models/Place");

exports.createplace = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path.replace("\\", "/");
    }
    const NewPlace = await Place.create(req.body);
    res.status(200).json(NewPlace);
  } catch (error) {
    next(error);
  }
};

exports.updateplace = async (req, res, next) => {
  try {
    await req.place.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findplace = async (PlaceId, next) => {
  try {
    const place = await Place.findById(PlaceId);
    if (place) return place;
    next({ message: "Recipe not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.deleteplace = async (req, res, next) => {
  try {
    await req.place.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOnePlace = async (req, res, next) => {
  try {
    const place = await req.place;
    res.status(200).json(place);
  } catch (error) {
    next(error);
  }
};

exports.getAllPlaces = async (req, res, next) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
};

exports.addPlaceToUser = async (req, res, next) => {
  try {
    await req.place.updateOne({ $push: { users: req.users } });
    await req.users.updateOne({ $push: { place: req.place } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.addPlaceToBusinessUser = async (req, res, next) => {
  try {
    await req.place.updateOne({ $push: { BusinessUser: req.BusinessUser } });
    await req.BusinessUser.updateOne({ $push: { place: req.place } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
