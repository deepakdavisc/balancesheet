const { createLoan } = require("../services/loan-services");

module.exports = (app) => {
  app.post("/loan/create", async (req, res, next) => {
    try {
      const { loanType, userId } = req.body;
      console.log("5555555555555");
      const result = await createLoan({ loanType, userId });
      return res.json(result);
    } catch (error) {}
  });
};
