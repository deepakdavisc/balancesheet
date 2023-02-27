const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  loanType: String,
});

module.exports = mongoose.model("Loan", LoanSchema);
