/**********************************************
 * Handlebars!
 * ==================================
 * 1. cd into the folder
 * 2. npm init (initialize npm)
 * 3. Always, always look at documentation first
 * 4. Install the required packages: express, express-handlebars
 * 5.
 ***********************************************/

const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

app.use(express.static("public"));
// set handlebars engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", function (request, response) {
  response.render("newhome", {
    posts: [
      {
        title: "Life is hard",
        author: "Lesley",
      },
      {
        title: "C'est la vie",
        author: "Sam",
      },
      {
        title: "Coding is fun",
        author: "Bibek",
      },
    ],
  });
});

app.get("/about", function (request, response) {
  response.render("about", { layout: "alternateLayout" });
});

app.listen(3000);
