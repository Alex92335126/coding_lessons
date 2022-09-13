const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/profile", (req, res) => {
  res.json("Profile Info from the backend");
});

app.listen(8080, () => console.log("Listening to port 8080"));
