const response  = require("express");
const express = require("express");
const app = express()

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/images /statue_of_liberty  2.jpeg");
});

app.listen(3000,() => {
    console.log("App is listening on port 3000"); 
}); 