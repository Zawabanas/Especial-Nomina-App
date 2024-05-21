const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes");
const employeeRoutes = require("./routes/employee.routes");
const payrollRoutes = require("./routes/payroll.routes");

const app = express();

app.use(bodyParser.json());

// Usar rutas de usuario
app.use("/", userRouter);
app.use("/employees", employeeRoutes);
app.use("/payrolls", payrollRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
