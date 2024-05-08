const express = require("express");
const empRoutes = express.Router();

// Controller
const empController = require("../controller/emp");

/**
 * 
empRoutes.get("/", async (req, res) => {
  data = await empController.empGetAll();
  // console.log("Data Found");
  res.send(data);
});
* 
*/

// Completed
empRoutes.get("/", empController.listUsers);
empRoutes.get("/:id", empController.getUser);
empRoutes.get("/all", empController.empGetAll);

// Under Construction
empRoutes.post("/", empController.listUsers);

exports.empRoutes = empRoutes;
