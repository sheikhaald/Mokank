const express = require("express");
const passport = require("passport");
const connectDB = require("./database");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const localStrategy = require("./middleware/passport");
const userRouter = require("./api/User/routes");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);

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
