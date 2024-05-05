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

empRoutes.get("/", empController.listUsers);

empRoutes.get("/all", empController.empGetAll);

exports.empRoutes = empRoutes;
