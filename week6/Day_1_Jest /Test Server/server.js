const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", function (req, res) {
  res.status(200).send("Hello World!");
});
app.post("/post", function (req, res) {
  let data = req.body;
  res.json(data);
});
app.listen(3000, () => {
  console.log("Listening To 3000");
});
