const express = require("express");
const upload = require("../../middleware/multer");

const router = express.Router();
const {
  getAllLikes,
  LikesUpdate,
  LikesDelete,
  LikesCreate,
  LikesFind,
} = require("./controllers");

router.param("LikesId", async (req, res, next, LikesId) => {
  const like = await LikesFind(LikesId, next);
  req.like = like;
  next();
});

router.get("/", getAllLikes);

router.post("/", upload.single("image"), LikesCreate);

router.delete("/:LikesId", LikesDelete);

router.put("/:LikesId", LikesUpdate);

module.exports = router;
