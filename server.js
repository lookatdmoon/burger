var express = require('express');
var expHBars = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require("./controllers/burger_controller.js");

// Set up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory that will be served
app.use(express.static("./public"));

// Set up Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});