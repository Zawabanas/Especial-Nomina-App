const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const payrollSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  deductions: {
    type: Number,
    default: 0,
  },
  bonus: {
    type: Number,
    default: 0,
  },
  // Otros campos relevantes para la nómina, como vacaciones, beneficios, etc.
});

const PayrollModel = db.model("Payroll", payrollSchema);

module.exports = PayrollModel;
