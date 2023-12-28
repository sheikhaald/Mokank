const Notifications = require("../../models/Notifications");

exports.createNotifications = async (req, res, next) => {
  try {
    const NewNotifications = await Notifications.create(req.body);
    res.status(200).json(NewNotifications);
  } catch (error) {
    next(error);
  }
};

exports.getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notifications.find();
    res.status(200).json(notifications);
  } catch (error) {
    next(error);
  }
};

exports.deleteNotifications = async (req, res, next) => {
  try {
    const { NotificationsId } = req.params;
    await Notifications.findByIdAndDelete(NotificationsId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneNotifications = async (req, res, next) => {
  try {
    const notifications = await req.notifications;
    res.status(200).json(notifications);
  } catch (error) {
    next(error);
  }
};

exports.findNotifications = async (NotificationsId) => {
  try {
    const notifications = await Notifications.findById(NotificationsId);
    if (notifications) return notifications;
    next({ message: "Notifications not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.addNotificationToUser = async (req, res, next) => {
  try {
    await req.notifications.updateOne({ $push: { users: req.users } });
    await req.users.updateOne({ $push: { notifications: req.notifications } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
