const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'vsaleem',
    password: "",
    database: ''

});

module.exports = connection;