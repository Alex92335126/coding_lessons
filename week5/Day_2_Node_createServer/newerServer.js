const fs = require("fs");
let http = require("http");
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      if (req.method === "POST" || req.method === "PUT") {
      }
      res.writeHead(200);
      res.write("Successfully Connected");
      res.end();
    }
  })
  .listen(8080);
