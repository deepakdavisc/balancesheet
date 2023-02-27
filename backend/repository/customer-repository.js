const { CustomerModel } = require("../database/models");

const createCustomer = async ({ email, password, salt, phone }) => {
  try {
    console.log({ email, password, salt, phone });
    const customer = new CustomerModel({
      email,
      password,
      salt,
      phone,
    });
    const res = await customer.save();
    return res;
  } catch (error) {}
};

module.exports = {
  createCustomer,
};
