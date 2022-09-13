const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/setCookie", (req, res) => {
  res.cookie("username", "asis");
  res.cookie("theme", "light");
  res.send("works");
});
app.get("/getCookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});
app.listen(3000, () => {
  console.log("App Listening To Port 3000");
});
