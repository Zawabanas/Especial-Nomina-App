const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  salary: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  // Otros campos relevantes, como dirección, fecha de nacimiento, etc.
});

const EmployeeModel = db.model("Employee", employeeSchema);

module.exports = EmployeeModel;
