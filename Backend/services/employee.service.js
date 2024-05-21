const EmployeeModel = require("../models/employee.model");

class EmployeeService {
  static async createEmployee(data) {
    try {
      const employee = new EmployeeModel(data);
      return await employee.save();
    } catch (error) {
      throw error;
    }
  }

  static async getAllEmployees() {
    try {
      return await EmployeeModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async getEmployeeById(id) {
    try {
      return await EmployeeModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async updateEmployee(id, data) {
    try {
      return await EmployeeModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async deleteEmployee(id) {
    try {
      return await EmployeeModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployeeService;
