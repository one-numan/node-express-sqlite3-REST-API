const fs = require("fs"); // Importing Inbuilt Modules File System
const express = require("express"); // Importing Modules Express JS

const app = express(); // Create Express's Server App's Instance

app.get("/", (req, res) => {
  //   res.send("GET");
  //   res.status(404);
  res.json({
    httpRequest: "get",
  });
});

app.post("/", (req, res) => {
  res.json({
    httpRequest: "post",
  });
});

app.put("/", (req, res) => {
  res.json({
    httpRequest: "put",
  });
});

app.patch("/", (req, res) => {
  res.json({
    httpRequest: "patch",
  });
});

app.delete("/", (req, res) => {
  res.json({
    httpRequest: "delete",
  });
});

app.listen(8080, () => {
  console.log("Your App is Running");
}); // Running Port
