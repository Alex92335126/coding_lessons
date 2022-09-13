let http = require("http");
let fs = require("fs");
const port = 1000;
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
  })
  .listen(`${port}`, () => {
    console.log(`Listening To Port ${port}`);
  });
