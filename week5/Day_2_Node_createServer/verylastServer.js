const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    let object = {
      marchClass: ["Viola", "Charles", "James", "Henry", "Roger"],
    };
    response.end(JSON.stringify(object));
  })
  .listen(8080, () => {
    console.log("Server running at 8080");
  });
