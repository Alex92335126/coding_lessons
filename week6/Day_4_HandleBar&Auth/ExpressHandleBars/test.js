const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
//
app.use(express.static("public"));
//
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", function (request, response) {
  response.render("home", {
    // blog: {
    //   title: "My Summer In France",
    //   blogPost: "It Was Beautiful",
    //   author: "James Daniel",
    // },
    blog: [
      {
        title: "my summer in france",
        blogPost: "it was beautiful",
        author: "Bibek",
      },
      {
        title: "my summer in Italy",
        blogPost: "it was amazing",
        author: "Anson",
      },
      {
        title: "my summer in Hong Kong",
        blogPost: "it was amazing",
        author: "Asis",
      },
    ],
  });
  // response.render("home", {
  //   blog: {
  //     title: "my summer in france",
  //     blogPost: "it was beautiful",
  //   },
  // });
});

app.get("/engineers", (req, res) => {
  res.render("engineers", {
    engineer: {
      firstName: "Bibek",
      lastName: "Rajbhandari",
    },
  });
});

app.get("/about", function (request, response) {
  response.render("about");
});
app.listen(3000, () => {
  console.log(`Application is running on port 3000`);
});
