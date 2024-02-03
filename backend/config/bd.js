const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, () => {
      console.log("Mongo Connected to the data base");
    });
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
    process.exit();
  }
};

module.exports = connectBD;
