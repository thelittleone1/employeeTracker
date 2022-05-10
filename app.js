// Constants
const inquirer = require("inquirer");
//const mysql = require("mysql2");

// Required Files
const startMenuEl = require("./lib/startMenu");

// Need to create Connection to Mysql for Node
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "password",
//     database: "database name"
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log("Connected");
// });

startMenuEl();