var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("index");
});


app.listen(3000, function (req, res) {
    console.log("Server listening on port 3000");
});