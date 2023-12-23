const express = require("express");
const passport = require("passport");
const connectDB = require("./database");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const likesRouter = require("./api/Like/routes");
const userRouter = require("./api/User/routes");
const placeRouter = require("./api/Place/routes");
const allowedBusiness = require("./api/Allowedbusinesses/routes");
const businessType = require("./api/BusinessType/routes");
const addonsRouter = require("./api/Addons/routes");
const ammenities = require("./api/Ammenities/routes");
const sponsorshipRouter = require("./api/Sponsorship/routes");
const chatRouter = require("./api/Chat/routes");
const path = require("path");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use(jwtStrategy);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/", userRouter);
app.use("/place", placeRouter);
app.use("/addons", addonsRouter);
app.use("/sponsorship", sponsorshipRouter);
app.use("/likes", likesRouter);
app.use("/allowedBusiness", allowedBusiness);
app.use("/businessType", businessType);
app.use("/ammenities", ammenities);
app.use("/chats", chatRouter);

// not found path
app.use(NotFound);
// error handle
app.use(ErrorHandler);
// connect to database

// SOCKET IO
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("Chat", (msg) => {
    console.log(msg);
    io.emit("Chat", msg);
  });
});
// END SOCKET
connectDB();

server.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
