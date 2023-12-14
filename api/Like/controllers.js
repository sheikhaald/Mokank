const Like = require("../../models/Like");

exports.createLike = async (req, res, next) => {
  try {
    const NewLike = await Like.create(req.body);
    res.status(200).json(NewLike);
  } catch (error) {
    next(error);
  }
};

exports.updateLike = async (req, res, next) => {
  try {
    await req.like.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findLike = async (LikeId, next) => {
  try {
    const like = await Like.findById(LikeId);
    if (like) return like;
    next({ message: "Like not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.deleteLike = async (req, res, next) => {
  try {
    await req.like.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneLike = async (req, res, next) => {
  try {
    const like = await req.like;
    res.status(200).json(like);
  } catch (error) {
    next(error);
  }
};

exports.getAllLikes = async (req, res, next) => {
  try {
    const like = await like.find();
    res.status(200).json(like);
  } catch (error) {
    next(error);
  }
};
