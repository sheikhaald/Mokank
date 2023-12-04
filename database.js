const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connectToDB = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log(`Mongo connected: ${connectToDB.connection.host}`);
  } catch (error) {
    console.log(`Somthing went wrong while connecting to DataBase `, error);
  }
};

module.exports = connectDB;
