const express = require("express");
const app = express();
app.get("/setCookie", (req, res) => {
  res.cookie("username", "anson");
  res.send("works");
});
app.listen(3000, () => {
  console.log("App Listening To Port 3000");
});
