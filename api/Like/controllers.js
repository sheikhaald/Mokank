const Like = require("../../models/Like");

exports.getAllLikes = async (req, res, next) => {
  try {
    const likes = await Like.find();
    res.status(201).json(likes);
  } catch (err) {
    next(err);
  }
};

exports.LikesFind = async (LikesId, next) => {
  try {
    const like = await Like.findById(LikesId);
    if (like) {
      return like;
    }
    next("not found");
  } catch (error) {
    next(error);
  }
};

exports.LikesCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path.replace("\\", "/");
    }

    const newLike = await Like.create(req.body);
    res.status(201).json(newLike);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    next(error);
  }
};

exports.LikesDelete = async (req, res, next) => {
  try {
    await req.like.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.LikesUpdate = async (req, res, next) => {
  try {
    await req.like.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
