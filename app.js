const express = require("express");
const passport = require("passport");
const connectDB = require("./database");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const localStrategy = require("./middleware/passport");
const likesRouter = require("./api/Like/routes");
const userRouter = require("./api/User/routes");
const placeRouter = require("./api/Place/routes");
const allowedBusiness = require("./api/Allowedbusinesses/routes");
const businessType = require("./api/BusinessType/routes");
const addonsRouter = require("./api/Addons/routes");
const ammenities = require("./api/Ammenities/routes");
const sponsorshipRouter = require("./api/Sponsorship/routes");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Router
// app.use("/place", placeRouter);
// app.use("/user", userRouter);
// app.use("/userbusiness", userbusinessRouter);
// app.use("/addons", addonsRouter);
// app.use("/address", addressRouter);
// app.use("/allowed", allowedRouter);
// app.use("/ammennities", ammennitiesRouter);
// // app.use("/category", categoryRouter);
// app.use("/notifications", notificationsRouter);
// app.use("/chat", chatRouter);
// app.use("/sponsorship", sponsorshipRouter);
// app.use("/like", likeRouter);

passport.use("local", localStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/user", userRouter);
app.use("/place", placeRouter);
app.use("/addons", addonsRouter);
app.use("/sponsorship", sponsorshipRouter);
app.use("/likes", likesRouter);
app.use("/allowedBusiness", allowedBusiness);
app.use("/businessType", businessType);
app.use("/ammenities", ammenities);

// not found path
app.use(NotFound);
// error handle
app.use(ErrorHandler);
// connect to database
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
