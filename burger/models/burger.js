const orm = require('../config/orm');


// CREATE CODE THAT CALLS THE ORM FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE ORM.
// VARIABLE THAT CONTAINS METHODS TO OPERATE MYSQL CONTROLLERS - OBJECT RELATIONAL MAPPING
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(vals, condition, cb){
        orm.updateOne("burgers", vals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
