const express = require("express");
const empRoutes = express.Router();

// Controller
const empController = require("../controller/emp");
 
empRoutes.get("/", (req, res) => {
  res.send(empController.empGet());
});

exports.empRoutes = empRoutes;
