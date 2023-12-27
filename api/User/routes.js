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
  register_token,
  getMyNotification,
} = require("./controllers");

router.param("UserId", async (req, res, next, UserId) => {
  const user = await findUser(UserId, next);
  req.foundUser = user;
  next();
});
router.post("/register", upload.single("profileImage"), register); //Register

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
router.post(
  "/register/token",
  passport.authenticate("jwt", { session: false }),
  register_token
);

router.get(
  "/my-notifications",
  passport.authenticate("jwt", { session: false }),
  getMyNotification
);
module.exports = router;
