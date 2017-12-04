// Import Express 
var express = require("express");

// Router for the app
var router = express.Router();

// Import the burger.js 
var burger = require("../models/burger.js");

// Burger Routes!
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hambObj = {
            burgers: data
        };
        console.log(hambObj);
        res.render("index", hambObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create({ burger_name: req.body.burger_name, devoured: false }, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var devouredID = req.params.id;

    console.log("devouredID " + devouredID);

    burger.update({ devoured: true }, "id", devouredID, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export the router
module.exports = router;

