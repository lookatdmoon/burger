
// Setup code to connect Node to MySQL

var mysql = require("mysql");
var connection;

// var connection = mysql.createConnection({
//     port: 8080,
//     host: "localhost",
//     user: "root",
//     password: "ItsNotFriday!",
//     database: "burgers_db"
// });

// Hooking Project with JawsDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ItsNotFriday!",
        database: "burgers_db"
    });
};

// Make a connection
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;