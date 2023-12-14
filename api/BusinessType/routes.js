const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  updateBusinessType,
  getAllBusinessTypes,
  createBusinessType,
  addTypeToPlace,
} = require("./controllers");

router.post("/create", createBusinessType);
router.get("/get", getAllBusinessTypes);
router.put("/add-to-place", addTypeToPlace);
router.put("/update/:BusinessId", updateBusinessType);

module.exports = router;
