const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'vsaleem',
    password: "vsaleem11!!5",
    database: 'burgers_db'

});

connection.connect(function(err){
    if (err) throw err;
    console.log("You are connected to MySql on port " + connection.port);
})


module.exports = connection;