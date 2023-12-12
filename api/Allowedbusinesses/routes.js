const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  updateAllowedBusiness,
  getAllAllowedBusinesss,
  createAllowedBusiness,
  findBusiness,
} = require("./controllers");

router.param("BusinessId", async (req, res, next, BusinessId) => {
  const business = await findBusiness(BusinessId, next);
  req.business = business;
  next();
});
router.post("/create", createAllowedBusiness);
router.get("/get", getAllAllowedBusinesss);
router.put("/:BusinessId", updateAllowedBusiness);

module.exports = router;
