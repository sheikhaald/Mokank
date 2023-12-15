const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../../middleware/multer");
const {
  register,
  login,
  getAllUsers,
  updateUser,
  getProfile,
} = require("./controllers");

router.param("UserId", async (req, res, next, UserId) => {
  const user = await findUser(UserId, next);
  req.user = user;
  next();
});
router.post("/register", upload.single("profileimage"), register); //Register

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
router.get("/get", getAllUsers);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);
router.put("/UserId", updateUser);

module.exports = router;
