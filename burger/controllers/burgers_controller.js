var express = require('express');
var burger = require('../models/burger');

// CREATE ROUTER, THEN EXPORT ROUTER

var router = express.Router();


// TYPE EXPLANATIONS

// ROUTES TO HOME PAGE, SELECTS METHOD INSTRUCTIONS FROM BURGER, IMPORTS BURGER DATA AND RENDERS ONTO HANDLEBARS PAGE.
router.get("/", function(req, res){

    burger.selectAll(function(data){
        let burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});




router.post("/create", function(req, res){
    burger.insertOne(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 
    
        function(result){
            res.json({ id: result.insertId });
    });
});




router.put("/api/burgers/:id", function(req, res) { 
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: 1
    }, condition, function(result) {
        if (result.changedRow == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;