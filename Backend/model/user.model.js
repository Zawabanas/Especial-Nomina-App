const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    lowercase: true,
    required: true,
    unique: false,
  },
});

userSchema.pre("save", async function (next) {
  try {
    // Solo ejecutar el cifrado de la contraseña si es un nuevo usuario o la contraseña ha cambiado
    if (this.isNew || this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(this.password, salt);

      this.password = hashpass;
    }

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

const UserModel = db.model("user", userSchema);

module.exports = UserModel;
