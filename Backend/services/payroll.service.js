const PayrollModel = require("../models/payroll.model");

class PayrollService {
  static async createPayroll(data) {
    try {
      const payroll = new PayrollModel(data);
      return await payroll.save();
    } catch (error) {
      throw error;
    }
  }

  static async getAllPayrolls() {
    try {
      return await PayrollModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async getPayrollById(id) {
    try {
      return await PayrollModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  static async updatePayroll(id, data) {
    try {
      return await PayrollModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async deletePayroll(id) {
    try {
      return await PayrollModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PayrollService;
