const Chat = require("../../models/Chat");

exports.createChat = async (req, res, next) => {
  try {
    const NewChat = await Chat.create(req.body);
    res.status(200).json(NewChat);
  } catch (error) {
    next(error);
  }
};

exports.updateChat = async (req, res, next) => {
  try {
    await req.chat.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findChat = async (ChatId, next) => {
  try {
    const chat = await Chat.findById(ChatId);
    if (chat) return chat;
    next({ message: "Chat not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.deleteChat = async (req, res, next) => {
  try {
    await req.chat.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneChat = async (req, res, next) => {
  try {
    const chat = await req.chat;
    res.status(200).json(chat);
  } catch (error) {
    next(error);
  }
};

exports.getAllChats = async (req, res, next) => {
  try {
    const chat = await chat.find();
    res.status(200).json(chat);
  } catch (error) {
    next(error);
  }
};
