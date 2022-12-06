const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "tanvi",
    password: "1234",
    database: "hack"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = con

