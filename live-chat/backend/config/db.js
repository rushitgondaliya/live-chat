const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successfully!!");
  } catch (error) {
    console.log("Database connetion error: ", error);
  }
};

module.exports = connectDB;