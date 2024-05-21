const express = require("express");
const router = express.Router();
const PayrollController = require("../controller/payroll.controller");

// Rutas para nóminas
router.post("/create", PayrollController.createPayroll);
router.get("/get", PayrollController.getPayrolls);
router.get("/:id", PayrollController.getPayrollById);
router.put("/:id", PayrollController.updatePayroll);
router.delete("/:id", PayrollController.deletePayroll);

module.exports = router;
