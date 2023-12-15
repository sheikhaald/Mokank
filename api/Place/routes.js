const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const {
  findplace,
  createplace,
  getAllPlaces,
  updateplace,
  getOnePlace,
  deleteplace,
} = require("./controllers");

router.param("PlaceId", async (req, res, next, PlaceId) => {
  const place = await findplace(PlaceId, next);
  req.place = place;
  next();
});

router.get("/", getAllPlaces);
router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }, { name: "placeImages" }]),
  createplace
);
router.put("/:PlaceId", updateplace);
router.delete("/:PlaceId", deleteplace);
router.get("/:PlaceId", getOnePlace);

module.exports = router;
