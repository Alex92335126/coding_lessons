var add = function (x, y) {
  return new Promise((success, failure) => {
    if (typeof x != "number" || typeof y != "number") {
      failure(Error("Could not add the two values!"));
    } else {
      var sum = x + y;
      success(sum);
    }
  });
};

var subtract = function (x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x != "number" || typeof y != "number") {
      reject(Error("Could not add the two values!"));
    } else {
      var sum = x - y;
      resolve(sum);
    }
  });
};

// Starting promise chain
add(2, 2)
  .then((added) => {
    // added = 4
    console.log(added);
    return subtract(added, 3);
  })
  .then((subtracted) => {
    // subtracted = 1
    console.log(subtracted);
    return add(subtracted, 5);
  })
  .then((added) => {
    // added = 6
    return added * 2;
  })
  .then((result) => {
    // result = 12
    console.log("My result is ", result);
  })
  .catch((err) => {
    // If any part of the chain is rejected, print the error message.
    console.log(err);
  });
