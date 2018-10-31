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


// Shop route
app.get("/shop", function (req, res) {
    var products = [{
            name: "Macbook",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO3IKBg9PvWvJxNntYShQmhA1YMQECAXcDm2R4Hknq4y4MSGkiw",
            price: 1000
        },
        {
            name: "Camera",
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: 800
        },
        {
            name: "PS4",
            image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4504502b4cf705b085bd0f123aef3b3e&auto=format&fit=crop&w=1050&q=80",
            price: 400
        },
        {
            name: "Camera",
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: 800
        },
        {
            name: "Camera",
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: 800
        },
        {
            name: "Camera",
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: 800
        },

    ];

    res.render("shop", {
        products: products
    });

});


app.listen(3001, function (req, res) {
    console.log("Server listening on port 3001");
});