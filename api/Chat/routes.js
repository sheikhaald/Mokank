const express = require("express");
const router = express.Router();
const {
  findChat,
  createChat,
  getAllChats,
  updateChat,
  getOneChat,
  deleteChat,
} = require("./controllers");

router.param("ChatId", async (req, res, next, ChatId) => {
  const chat = await findChat(ChatId, next);
  req.chat = chat;
  next();
});

router.post("/", createChat);
router.get("/", getAllChats);
router.put("/:ChatId", updateChat);
router.delete("/:ChatId", deleteChat);
router.get("/:ChatId", getOneChat);

module.exports = router;
