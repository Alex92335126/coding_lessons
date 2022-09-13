let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
p.then((message) => {
  //resolves
  console.log("This is in the then " + message);
}).catch((message) => {
  //rejects or fails
  console.log("This in the catch " + message);
});
