const fs = require("fs"); // Importing Inbuilt Modules File System
const express = require("express"); // Importing Modules Express JS

const app = express(); // Create Express's Server App's Instance

app.get("/", (req, res) => {
  // GET Route
  res.json({
    httpRequest: "get",
  });
});

app.post("/", (req, res) => {
  // POST Route
  res.json({
    httpRequest: "post",
  });
});

app.put("/", (req, res) => {
  //PUT Route
  res.json({
    httpRequest: "put",
  });
});

app.patch("/", (req, res) => {
  //PATCH Route
  res.json({
    httpRequest: "patch",
  });
});

app.delete("/", (req, res) => {
  //DELETE Route
  res.json({
    httpRequest: "delete",
  });
});

app.listen(8080, () => {
  // Running Port
  console.log("Your App is Running");
});
