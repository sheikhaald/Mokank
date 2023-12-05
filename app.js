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
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(passport.initialize());
app.use(express.json());

app.use("/media", express.static(path.join(__dirname, "media")));
app.use(passport.initialize());
app.use("/place", placeRouter);
app.use("/addons", addonsRouter);

app.use("/", userRouter);
app.use("/sponsorship", sponsorshipRouter);
app.use("/likes", likesRouter);
passport.use("local", localStrategy);
// not found path
app.use(NotFound);
// error handle
app.use(ErrorHandler);
// connect to database
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
