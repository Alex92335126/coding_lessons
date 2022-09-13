const express = require('express');
const path = require("path");
const app = express ();
const fileUpload = require('express-fileupload');

app.use(express.urlencoded({extend:false}));
app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/login", (req, res) => {
    console.log(req.body);
    console.log(req.files.profile); 
    res.send("Login Information Received");
});

app.listen(8080);