let fs = require("fs");
let readFromThis = fs.createReadStream(__dirname + "/bigData.txt");
let pipeToThis = fs.createWriteStream(__dirname + "/writeHere.txt");
readFromThis.pipe(pipeToThis);
