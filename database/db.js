import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const UserName = process.env.Db_username;
const PassWord = process.env.Db_password;

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established Successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
