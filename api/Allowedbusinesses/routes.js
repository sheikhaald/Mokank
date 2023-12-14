const express = require("express");
const router = express.Router();

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

module.exports = router;
