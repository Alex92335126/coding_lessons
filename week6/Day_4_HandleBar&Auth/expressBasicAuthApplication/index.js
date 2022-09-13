const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const expressBasic = require("express-basic-auth");
const fs = require("fs");

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  expressBasic({
    authorizer: myAuth,
    challenge: true,
    realm: "My Application",
    authorizeAsync: true,
  })
);

// function myAuth(username, password, callback) {
//   const whiteListedUsers = fs.readFileSync(
//     "./users.json",
//     "utf-8",
//     (err, data) => {
//       if (err) {
//         throw new Error(err);
//       }
//       return data;
//     }
//   );

//   let parsed = JSON.parse(whiteListedUsers);

//   console.log(parsed)
//   let user = parsed.users.filter((user) => user.username == username);
//   if (user[0].username === username && user[0].password === password) {
//     return callback(null, true);
//   } else {
//     return callback(null, false);
//   }
// }

// const users = {
//   user: [
//     { name: "Charles", age: 20 },
//     { name: "Mika", age: 18 },
//     { name: "Ieuen", age: 24 },
//   ],

function myAuth(username, password, callback) {
  const users = fs.readFileSync(__dirname + "/users.json");
  const parsedUser = JSON.parse(users);

  if (parsedUser[username] === password) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

app.get("/", (req, res) => {
  console.log(req.auth);
  res.render("landing", req.auth);
});

app.get("/user", (req, res) => {
  res.render("user", users);
});

app.get("/alt", (req, res) => {
  res.render("landing", { layout: "alt" });
});

app.get("/alt/user", (req, res) => {
  res.render("user", { layout: "alt" });
});

app.listen(8080, () => {
  console.log("application listening to port 8080");
});
