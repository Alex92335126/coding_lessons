const fs = require("fs");
let http = require("http");
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      if (req.method === "POST" || req.method === "PUT") {
      }
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
  })
  .listen(8080);
