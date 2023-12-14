const express = require("express");
const {
  createNotifications,
  getAllNotifications,
  deleteNotifications,
  getOneNotifications,
  findNotifications,
} = require("./controllers");
const router = express.Router();

router.param("NotificationsId", async (req, res, next, NotificationsId) => {
  const notifications = await findNotifications(NotificationsId, next);
  req.notifications = notifications;
  next();
});

router.post("/", createNotifications);
router.get("/", getAllNotifications);
router.delete("/:NotificationsId", deleteNotifications);
router.get("/:NotificationsId", getOneNotifications);

module.exports = router;
