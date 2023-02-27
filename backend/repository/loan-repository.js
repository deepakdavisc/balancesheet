const { LoanModel } = require("../database/models");

const createCustomerLoan = async ({ loanType, userId }) => {
  try {
    console.log("Loan Repos", { loanType, userId });
    const Loan = new LoanModel({
      user: userId,
      loanType,
    });

    const loanResult = await Loan.save();
    return loanResult;
  } catch (error) {}
};

module.exports = {
  createCustomerLoan,
};
