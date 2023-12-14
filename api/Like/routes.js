const express = require("express");
const router = express.Router();
const {
  findLike,
  createLike,
  getAllLikes,
  updateLike,
  getOneLike,
  deleteLike,
} = require("./controllers");

router.param("LikeId", async (req, res, next, LikeId) => {
  const like = await findLike(LikeId, next);
  req.like = like;
  next();
});

router.get("/", getAllLikes);
router.put("/:LikeId", updateLike);
router.delete("/:LikeId", deleteLike);
router.get("/:LikeId", getOneLike);

module.exports = router;
