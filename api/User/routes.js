const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../../middleware/multer");
const { register, login, getAllUsers, updateUser } = require("./controllers");

router.param("UserId", async (req, res, next, UserId) => {
  const user = await findRecipe(UserId, next);
  req.user = user;
  next();
});
router.post("/register", upload.single("image"), register); //Register

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
router.get("/get", getAllUsers);
router.put("/UserId", updateUser);

module.exports = router;
