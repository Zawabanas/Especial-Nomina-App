const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://localhost:27017/comunicartec")
  .on("open", () => {
    console.log("Connection Succes");
  })
  .on("error", () => {
    console.log("Connection error");
  });

module.exports = connection;
