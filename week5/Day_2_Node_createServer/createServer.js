let http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
    let random = Math.floor(Math.random() * greetings.length);
    let randomItem = greetings[random];
    res.write("Here is a random greeting: " + randomItem);
    res.end();
  })
  .listen(8080);
console.log("We are running at 8080");
