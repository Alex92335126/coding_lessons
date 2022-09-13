let http = require("http");
let fs = require("fs");
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/home.html").pipe(res);
    } else if (req.url === "/gallery") {
      fs.createReadStream(__dirname + "/gallery.html").pipe(res);
    } else if (req.url === "/gallery.css") {
      fs.createReadStream(__dirname + "/gallery.css").pipe(res);
    } else if (req.url === "/login") {
      fs.createReadStream(__dirname + "/login.html").pipe(res);
    } else if (req.url === "/login.css") {
      fs.createReadStream(__dirname + "/login.css").pipe(res);
    }
  })
  .listen(2000, () => {
    console.log("Listening To Port 2000");
  });
