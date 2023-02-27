const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  email: String,
  password: String,
  salt: String,
  phone: String,
});

module.exports = mongoose.model("Custmoer", CustomerSchema);
