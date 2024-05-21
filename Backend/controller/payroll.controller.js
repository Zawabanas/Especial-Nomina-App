const PayrollModel = require("../model/payroll.model");

exports.createPayroll = async (req, res, next) => {
  try {
    const payroll = new PayrollModel(req.body);
    const newPayroll = await payroll.save();
    res.status(201).json(newPayroll);
  } catch (error) {
    next(error);
  }
};

exports.getPayrolls = async (req, res, next) => {
  try {
    const payrolls = await PayrollModel.find();
    res.status(200).json(payrolls);
  } catch (error) {
    next(error);
  }
};

exports.getPayrollById = async (req, res, next) => {
  try {
    const payroll = await PayrollModel.findById(req.params.id);
    if (!payroll) {
      return res.status(404).json({ message: "Nómina no encontrada" });
    }
    res.status(200).json(payroll);
  } catch (error) {
    next(error);
  }
};

exports.updatePayroll = async (req, res, next) => {
  try {
    const updatedPayroll = await PayrollModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPayroll) {
      return res.status(404).json({ message: "Nómina no encontrada" });
    }
    res.status(200).json(updatedPayroll);
  } catch (error) {
    next(error);
  }
};

exports.deletePayroll = async (req, res, next) => {
  try {
    const deletedPayroll = await PayrollModel.findByIdAndDelete(req.params.id);
    if (!deletedPayroll) {
      return res.status(404).json({ message: "Nómina no encontrada" });
    }
    res.status(200).json({ message: "Nómina eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
