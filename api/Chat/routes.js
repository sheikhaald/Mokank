const express = require("express");
const router = express.Router();
const {
  getAllMyChats,
  createChat,
  getChat,
  sendMsg,
} = require("./controllers");
const passport = require("passport");
const msg = require("../../models/Msg");

router.get(
  "/myChats",
  passport.authenticate("jwt", { session: false }),
  getAllMyChats
);

router.post(
  "/create-chat/:userId",
  passport.authenticate("jwt", { session: false }),
  createChat
);

router.get(
  "/chat/:chatId",
  passport.authenticate("jwt", { session: false }),
  getChat
);

router.get("/test", async (req, res, next) => {
  return await msg.find();
});

router.post(
  "/sendMsg/:chatId",
  passport.authenticate("jwt", { session: false }),
  sendMsg
);
module.exports = router;
