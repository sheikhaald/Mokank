const {
  createAddOns,
  deleteAddOns,
  getAllAddOns,
  getOneAddOns,
} = require("./controllers");

const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

router.get("/", getAllAddOns);
router.get("/", getOneAddOns);
router.post("/", upload.single("image"), createAddOns);
router.delete("/", deleteAddOns);

module.exports = router;
