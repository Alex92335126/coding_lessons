/**********************************************
 * Debugging APIs
 * ==================================
 ***********************************************/
/**********************************************
 * Example of API
 * ==================================
 ***********************************************/
var express = require("express");
let app = express();
//body parser for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// temporary store for `restaurant` in memory
var restaurantStore = [];
//GET all restaurants
app.get("/restaurant", function (req, res) {
  res.json(restaurantStore);
});
//GET the restaurant with specified id
app.get("/restaurant/:id", function (req, res) {
  res.status(200).json(restaurantStore[req.params.id]);
});

//POST new restaurant
app.post("/restaurant", function (req, res) {
  restaurantStore.push(req.body);
  res.json(req.body);
});
//PUT edited restaurant in-place of restaurant with specified id
app.put("/restaurant/:id", function (req, res) {
  restaurantStore[req.params.id] = req.body;
  res.json(req.body);
});
//DELETE restaurant with specified id
app.delete("/restaurant/:id", function (req, res) {
  restaurantStore.splice(req.params.id, 1);
  res.json(req.body);
});
//START app
app.listen(3000, function () {
  console.log("app running");
});
