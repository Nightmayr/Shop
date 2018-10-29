var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


// Index route
app.get("/", function (req, res) {
    res.render("index");
});




app.listen(3001, function (req, res) {
    console.log("Server listening on port 3001");
});