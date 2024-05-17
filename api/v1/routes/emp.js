const express = require("express");

/**
 * `empRoutes` is Router Object
 * @resouces `/api/v1/emp/`
 */
const empRoutes = express.Router();

/**
 * `empController` contains Bussiness Logic Of Employees Operation
 */
const empController = require("../controller/emp");

// Completed
empRoutes.get("/", empController.get_10_emp);
empRoutes.get("/:id", empController.get_one);
empRoutes.get("/all", empController.empGetAll);

// Under Construction
empRoutes.post("/", empController.addEmp);

exports.empRoutes = empRoutes;
