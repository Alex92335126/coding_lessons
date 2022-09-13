const fs = require("fs");
fs.readFile("abc.txt", { "Content-Type": "plain/text" }, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
