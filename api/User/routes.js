const express = require("express");
const { getAllUsers, createUser, updateUser, login } = require("./controllers");
const router = express.Router();
const passport = require("passport");
const upload = require("../../middleware/multer");
router.post("/Register", upload.single("image"), createUser); //Register
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
router.get("/", getAllUsers);
router.put("/", updateUser);

module.exports = router;
