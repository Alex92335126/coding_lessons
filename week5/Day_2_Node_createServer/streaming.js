let fs = require("fs");
let readFromThis = fs.createReadStream(__dirname + "/bigData.txt");
let writeToThis = fs.createWriteStream(__dirname + "/copybigData.txt");
readFromThis.on("data", function (chunk) {
  console.log("Creating Read Stream");
  console.log("Getting Chunk Length");
  console.log(chunk.length);
  writeToThis.write(chunk);
});
