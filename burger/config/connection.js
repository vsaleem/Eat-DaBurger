const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'vsaleem',
    password: "",
    database: ''

});

connection.connect(function(err){
    if (err) throw err;
    console.log("You are connected to mysql on port " + connection.port);
})


module.exports = connection;