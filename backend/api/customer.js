const { customerSignUp } = require("../services/customer-services");

module.exports = (app) => {
  app.post("/customer/signup", async (req, res, next) => {
    try {
      const { email, phone, password } = req.body;
      const result = await customerSignUp({
        email,
        phone,
        password,
      });
      console.log(result);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  });

  app.post("/customer/login", (req, res) => {});
};
