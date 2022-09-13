function greeting(name) {
  console.log("Hello " + name);
}
function processUserInput(callback) {
  var name = "Siddarth";
  callback(name);
}
processUserInput(greeting);
