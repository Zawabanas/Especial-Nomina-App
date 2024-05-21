const UserServices = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserServices.registerUser(email, password);

    res.json({ status: true, success: "User Registered Successfully" });
  } catch (error) {
    next(error); // Pass the error to the Express error handler
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("--------user---------", password);

    const user = await UserServices.checkuser(email);
    console.log("-----------------", user);

    if (!user) {
      throw new Error("Usuario no existe");
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch === false) {
      throw new Error("Contraseña incorrecta");
    }

    let tokenData = { _id: user._id, email: user.email };

    const token = await UserServices.generateToken(
      tokenData,
      "secretKey",
      "1h"
    );

    res.status(200).json({ status: true, token: token });
  } catch (error) {
    next(error); // Pass the error to the Express error handler
  }
};
