const express = require("express");
const {
  createAmmenities,
  getAllAmmenities,
  updateAmmenities,
  deleteAmmenities,
  getOneAmmenities,
  findAmmenities,
} = require("./controllers");
const router = express.Router();

router.param("AmmenitiesId", async (req, res, next, AmmenitiesId) => {
  const ammenities = await findAmmenities(AmmenitiesId, next);
  req.ammenities = ammenities;
  next();
});

router.post("/", createAmmenities);
router.get("/", getAllAmmenities);
router.put("/:AmmenitiesId", updateAmmenities);
router.delete("/:AmmenitiesId", deleteAmmenities);
router.get("/:AmmenitiesId", getOneAmmenities);

module.exports = router;
