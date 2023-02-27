const { LoanRepository } = require("../repository");

const createLoan = async ({ loanType, userId }) => {
  console.log("Loan Services", { loanType, userId });
  const loan = await LoanRepository.createCustomerLoan({ loanType, userId });
  console.log("Loan created", loan);
  return loan;
};

module.exports = {
  createLoan,
};
