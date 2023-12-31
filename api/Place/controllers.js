const Place = require("../../models/Place");

exports.bookPlace = async (req, res, next) => {
  try {
    const { placeId } = req.params;
    const place = await Place.findById(placeId);
    await req.user.updateOne({ $push: { bookedPlaces: place._id } });
    await place.updateOne({ bookedBy: req.user._id, booked: true });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.createplace = async (req, res, next) => {
  try {
    if (req.files) {
      for (let key in req.files) {
        if (key == "image")
          req.body[key] = req.files[key][0].path.replace("\\", "/");
        else
          req.body[key] = req.files[key].map((a) => a.path.replace("\\", "/"));
      }
      // req.body.image = req.file.path.replace("\\", "/");
    }

    // console.log(req.body);
    const NewPlace = await Place.create(req.body);

    await req.user.updateOne({ $push: { createdPlaces: NewPlace._id } });
    await NewPlace.updateOne({
      businessUser: req.user._id,
      allowedBusiness: req.body.selectedAllowedBusinesses,
      businessType: req.body.selectedType,
      placeAmmenities: req.body.selectedAmenities,
    });

    // req.body.selectedAllowedBusinesses.forEach((element) => {
    //   NewPlace.updateOne({
    //     $push: {
    //       allowedBusiness: element,
    //     },
    //   });
    // });
    // req.body.selectedType.forEach((element) => {
    //   NewPlace.updateOne({
    //     $push: {
    //       businessType: element,
    //     },
    //   });
    // });
    // req.body.selectedAmenities.forEach((element) => {
    //   NewPlace.updateOne({
    //     $push: {
    //       placeAmmenities: element,
    //     },
    //   });
    // });

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
    const places = await Place.find().populate("businessType");
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
};
exports.getPlaceDetails = async (req, res, next) => {
  try {
    const { placeId } = req.params;
    const place = await Place.findById(placeId).populate(
      "allowedBusiness placeAmmenities businessType"
    );
    res.status(200).json(place);
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
