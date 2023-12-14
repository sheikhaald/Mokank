const express = require("express");
const router = express.Router();
<<<<<<< HEAD
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
=======

const {
  findAllowedBusiness,
  createAllowedBusiness,
  getAllAllowedBusinesses,
  updateAllowedBusiness,
  getOneAllowedBusiness,
  deleteAllowedBusiness,
} = require("./controllers");

router.param("AllowedBusinessId", async (req, res, next, AllowedBusinessId) => {
  const allowedBusiness = await findAllowedBusiness(AllowedBusinessId, next);
  req.allowedBusiness = allowedBusiness;
  next();
});

router.post("/", createAllowedBusiness);
router.get("/", getAllAllowedBusinesses);
router.put("/:AllowedBusinessId", updateAllowedBusiness);
router.delete("/:AllowedBusinessId", deleteAllowedBusiness);
router.get("/:AllowedBusinessId", getOneAllowedBusiness);
>>>>>>> origin/main

module.exports = router;
