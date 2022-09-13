const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
let userSessions = 0;

app.use(
  cookieSession({
    name: "userSession",
    secret: "aHardToGuessString",
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get("/", (req, res) => {
  console.log(req.session);

  if (!req.session.id) {
    req.session.id = "uniqueString" + userSessions;
  }

  console.log(req.session.id);
  userSessions++;

  res.end("Cookie Session");
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});
