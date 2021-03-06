// Required constants
const mysql = require("mysql2");

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
  });
  
  // Throw error if connection is note made
  connection.connect(err => {
    if (err) throw err;
    console.log("Error, did not connect to database");
  });

  module.exports = connection;
  