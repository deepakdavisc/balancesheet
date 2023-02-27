const mongoose = require("mongoose");

const { DB_URL } = require("../config");

module.exports = async () => {
  console.log(DB_URL);
  try {
    await mongoose.connect(DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error in connecting with DB" + error);
  }
};
