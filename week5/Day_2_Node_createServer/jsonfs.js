let fs = require("fs");
let newUser = {
  name: "Akash",
  country: "India",
  age: 35,
};
let stringed = JSON.stringify(newUser);
fs.writeFile(__dirname + "/newObj.json", stringed, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("Data Successful");
  }
});
