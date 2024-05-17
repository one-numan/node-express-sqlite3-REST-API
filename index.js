const fs = require("fs"); // Importing Inbuilt Modules File System
const express = require("express"); // Importing Modules Express JS

const app = express(); // Create Express's Server App's Instance

/** * API Version 1 */
const v1Router = require("./api/v1/routes/emp");

/* Middle Ware Define */
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v1/emp", v1Router.empRoutes);

/**
 * Routes : Get Route of First Endpoint
 * Resource : `/`
 * EndPoint : `/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.get("/", (req, res) => {
  // GET Route
  res.json({
    httpRequest: "get",
  });
});

/**
 * Routes : Post Route of First Endpoint
 * Resource : `/`
 * EndPoint : `/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.post("/", (req, res) => {
  // POST Route
  res.json({
    httpRequest: "post",
  });
});

/**
 * Routes : Put Route of First Endpoint
 * Resource : `/`
 * EndPoint : `/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.put("/", (req, res) => {
  //PUT Route
  res.json({
    httpRequest: "put",
  });
});

/**
 * Routes : Patch Route of First Endpoint
 * Resource : `/`
 * EndPoint : `/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.patch("/", (req, res) => {
  //PATCH Route
  res.json({
    httpRequest: "patch",
  });
});

/**
 * Routes : Delete Route of First Endpoint
 * Resource : `/`
 * EndPoint : `/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.delete("/", (req, res) => {
  //DELETE Route
  res.json({
    httpRequest: "delete",
  });
});

/**
 * Routes : List Of All Available Api Version and Resouces
 * Resource : `api`
 * EndPoint : `/api/`
 * @param {Object} req The HTTP request Object
 * @param {Object} res The HTTP resource Object
 */
app.get("/api/", (req, res) => {
  console.log(req);
  res.json({
    api_version: `${req.hostname}:8080/api/v1/emp`,
  });
});

app.listen(8080, () => {
  // Running Port
  console.log("Your App is Running");
});
