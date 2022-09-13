const axios = require("axios").default;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(res));
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      console.log(res.data)
    );
  res.send("success");
});

app.listen(3000, () => console.log("Listening to port 3000"));