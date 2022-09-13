const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/people", (req, res) => {
  let sam = {
    firstName: "Sam",
    lastName: "O'Shaughnessy",
    email: "sam.o@xccelerate.co",
  };
  res.status(201).json({ person: sam });
});
app.listen(2000, () => {
  console.log("app is running on port 2000");
});
module.exports = app;
