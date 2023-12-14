const Place = require("../../models/Place");

exports.createplace = async (req, res, next) => {
  try {
    if (req.file) {
      console.log(req.file);
      req.body.image = req.file.path.replace("\\", "/");
    }

    req.body = {
      image: req.body.info.image,
      placeImages: req.body.info.placeImages,
      PlaceName: req.body.info.Title,
      RentPrice: req.body.info.Price,
      Description: req.body.info.Description,
      DayFrom: req.body.info.selectedDates.selectedStartDate,
      DayTo: req.body.info.selectedDates.selectedEndDate,
    };

    const NewPlace = await Place.create(req.body);
    res.status(200).json(NewPlace);
  } catch (error) {
    console.log(error);
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

exports.detetplace = async (req, res, next) => {
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
