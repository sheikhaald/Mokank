const express = require("express");
const passport = require("passport");
const connectDB = require("./database");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const localStrategy = require("./middleware/passport");
const sponsorshipRouter = require("./api/Sponsorship/routes");
const likesRouter = require("./api/Like/routes");
const userRouter = require("./api/User/routes");
const placeRouter = require("./api/Place/routes");
const addonsRouter = require("./api/Addons/routes");
const addressRouter = require("./api/Address/routes");
const allowedRouter = require("./api/Allowedbusinesses/routes");
const ammennitiesRouter = require("./api/Ammenities/routes");
const categoryRouter = require("./api/Category/routes");
const notificationsRouter = require("./api/Notifications/routes");
const chatRouter = require("./api/Chat/routes");
const sponsorshipRouter = require("./api/Sponsorship/routes");
const likeRouter = require("./api/Like/routes");
const userbusinessRouter = require("./api/Userbusiness/routes");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Router
app.use("/place", placeRouter);
app.use("/user", userRouter);
app.use("/userbusiness", userbusinessRouter);
app.use("/addons", addonsRouter);
app.use("/address", addressRouter);
app.use("/allowed", allowedRouter);
app.use("/ammennities", ammennitiesRouter);
app.use("/category", categoryRouter);
app.use("/notifications", notificationsRouter);
app.use("/chat", chatRouter);
app.use("/sponsorship", sponsorshipRouter);
app.use("/like", likeRouter);

passport.use("local", localStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/", userRouter);
app.use("/place", placeRouter);
app.use("/addons", addonsRouter);
app.use("/sponsorship", sponsorshipRouter);
app.use("/likes", likesRouter);
// not found path
app.use(NotFound);
// error handle
app.use(ErrorHandler);
// connect to database
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
