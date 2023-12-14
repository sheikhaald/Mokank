const {
  getAllAmmenities,
  createAmmenity,
  updateAmmenity,
  ammenityDelete,
} = require("./controllers");
const express = require("express");
const router = express.Router();

router.get("/get", getAllAmmenities);
router.post("/create", createAmmenity);
router.put("/update/:ammenitie_Id", updateAmmenity);
router.delete("/:ammenitie_Id", ammenityDelete);

module.exports = router;
