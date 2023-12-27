const Chat = require("../../models/Chat");
const Member = require("../../models/Member");
const User = require("../../models/User");
const Msg = require("../../models/Msg");
const { sendNotification } = require("../../utils/sendNotification");

exports.getAllMyChats = async (req, res, next) => {
  try {
    const user = await req.user.populate({
      path: "chats",
      populate: [
        {
          path: "members",
          populate: "user",
        },
        {
          path: "msgs",
        },
      ],
    });

    const chats = user.chats;
    res.status(200).json(chats);
  } catch (error) {
    next(error);
  }
};

exports.createChat = async (req, res, next) => {
  try {
    const requester = req.user;
    const otherUser = req.params.userId;
    const otherUserObj = await User.findById(otherUser);

    if (!otherUserObj) return next({ status: 404, message: "User not found!" });

    let memberRequester = await Member.findOne({
      user: requester._id,
    });
    let memberOtherUser = await Member.findOne({
      user: otherUserObj._id,
    });

    if (!memberRequester) {
      memberRequester = await Member.create({
        user: requester._id,
      });
    }
    if (!memberOtherUser) {
      memberOtherUser = await Member.create({
        user: otherUserObj._id,
      });
    }

    const chats = await Chat.find().populate("members");
    let chat = chats.find((chat) => {
      const chatMemberOneFound = chat.members.some((m) => {
        return m.user.toString() == requester._id.toString();
      });

      const chatMemberTwoFound = chat.members.some((m) => {
        return m.user.toString() == otherUserObj._id.toString();
      });
      if (chatMemberOneFound && chatMemberTwoFound) {
        return chat;
      }
    });

    if (!chat) {
      chat = await Chat.create({
        members: [memberRequester, memberOtherUser],
      });

      await req.user.updateOne({
        $push: { chats: chat },
      });

      await otherUserObj.updateOne({
        $push: { chats: chat },
      });
    }

    res.status(201).json(chat);
  } catch (error) {
    next(error);
  }
};

exports.getChat = async (req, res, next) => {
  try {
    const chat = await Chat.findById(req.params.chatId)
      .populate({
        path: "members",
        populate: "user",
      })
      .populate({
        path: "msgs",
        populate: "from",
      });

    return res.status(200).json(chat);
  } catch (error) {
    next(error);
  }
};

exports.sendMsg = async (req, res, next) => {
  try {
    const msg = await Msg.create({
      from: req.user._id,
      chat: req.params.chatId,
      text: req.body.text,
    });

    const chat = await Chat.findByIdAndUpdate(req.params.chatId, {
      $push: { msgs: msg },
    }).populate({
      path: "members",
      populate: "user",
    });
    const otherUser = chat.members.find((member) => {
      return member.user._id.toString() != req.user._id.toString();
    });

    await sendNotification({
      user: otherUser,
      title: "user",
      body: req.body.text,
      from: req.user.username,
    });

    return res.status(201).json(msg);
  } catch (error) {
    next(error);
  }
};
