const express = require("express");
const router = express.Router();

const {
  findAddress,
  createAddress,
  getAllAddresses,
  updateAddress,
  getOneAddress,
  deleteAddress,
} = require("./controllers");

router.param("AddressId", async (req, res, next, AddressId) => {
  const address = await findAddress(AddressId, next);
  req.address = address;
  next();
});
router.post("/", createAddress);
router.get("/", getAllAddresses);
router.put("/:AddressId", updateAddress);
router.delete("/:AddressId", deleteAddress);
router.get("/:AddressId", getOneAddress);

module.exports = router;
