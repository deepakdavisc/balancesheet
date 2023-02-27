const { CustomerRepository } = require("../repository");
const { GenerateSalt, GeneratePassword, GenerateToken } = require("../utils");

const customerSignUp = async ({ email, password, phone }) => {
  try {
    const salt = await GenerateSalt();

    const userPassword = await GeneratePassword(password, salt);
    const user = CustomerRepository.createCustomer({
      email,
      password: userPassword,
      salt,
      phone,
    });
    console.log(user);
    const token = await GenerateToken({ email, _id: user._id });
    return { _id: user._id, token };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  customerSignUp,
};
