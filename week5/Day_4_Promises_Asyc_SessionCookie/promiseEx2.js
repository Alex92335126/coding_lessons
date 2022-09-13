let c = new Promise((resolve, reject) => {
  let c = "Egg" + "Cheese";
  if (c == "EggCheese") {
    resolve("We made Egg + Cheese Sandwich");
  } else {
    reject("We couldnt make our sandwich");
  }
});
c.then((message) => {
  console.log("Customer ordered an Egg x Cheese Sandwich");
}).catch((message) => {
  console.log("Customer couldn't order a sandwich");
});
