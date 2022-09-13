let fs = require("fs");
fs.readFile(__dirname + "/demofile.txt", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(__dirname);
    console.log(data.toString());
  }
});
