var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.listen(5000, () => {
  console.log("Your Server is Created and Running Successfully!");
});
