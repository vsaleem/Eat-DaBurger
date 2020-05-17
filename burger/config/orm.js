const connection = require ("./connection");

// FUNCTION TO PUSH "?" INTO ARRAY

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};


// FUNCTION TO PUSH VALUE INTO ARR
function objToSQL(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};


const orm = {

// METHOD THAT SELECTS ALL TABLE INPUT INFO AND CALLBACKS RESULTS
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    // INSERT ONE METHOD
    insertOne: function(table, cols, vals, cb){
        console.log(cols);
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // UPDATE ONE METHOD THAT EXECUTES MYSQL IN CONTROLLER

    updateOne: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;