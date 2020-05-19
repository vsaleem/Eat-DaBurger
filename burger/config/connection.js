const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: '',
        password: "",
        database: 'burgers_db'
    });
};

connection.connect(function(err){
    if (err) throw err;
    console.log("You are connected to MySql on port " + connection.port);
})


module.exports = connection;