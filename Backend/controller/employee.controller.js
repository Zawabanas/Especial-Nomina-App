const EmployeeModel = require("../model/employee.model");

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = new EmployeeModel(req.body);
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};

exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.status(200).json({ message: "Empleado eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
