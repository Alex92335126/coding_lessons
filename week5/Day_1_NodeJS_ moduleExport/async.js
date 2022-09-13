let fs = require("fs");
let data = fs.readFile("input.txt", function (err, data) {
  if (err) {
    return err;
  }
  console.log(data);
});
console.log("end");
