const Sponsorship = require("../../models/Sponsorship");

exports.getAllsponsorships = async (req, res, next) => {
  try {
    const sponsors = await Sponsorship.find();
    res.status(201).json(sponsors);
  } catch (err) {
    next(err);
  }
};
exports.getLasSponsor = async (req, res, next) => {
  try {
    const sponsor = await Sponsorship.findOne().sort({ _id: -1 }).limit(1);
    res.status(201).json(sponsor);
  } catch (err) {
    next(err);
  }
};

exports.sponsorshipFind = async (sponsorId, next) => {
  try {
    const sponsorship = await Sponsorship.findById(sponsorId);
    if (sponsorship) {
      return sponsorship;
    }
    next("not found");
  } catch (error) {
    next(error);
  }
};

exports.sponsorshipCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path.replace("\\", "/");
    }

    const newSponsor = await Sponsorship.create(req.body);
    res.status(201).json(newSponsor);
  } catch (error) {
    if (error.name === "ValidationError") {
      // Handle validation errors
      return res.status(400).json({ error: error.message });
    }
    next(error);
  }
};

exports.sponsorshipDelete = async (req, res, next) => {
  try {
    await req.sponsor.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.sponsorshipUpdate = async (req, res, next) => {
  try {
    await req.sponsor.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
