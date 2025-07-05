import mongoose from "mongoose";
import config from "../config/config.js"

function connectToDB() {
  mongoose.connect(config.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
}

export default connectToDB;