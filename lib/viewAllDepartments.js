// Required constants
const inquirer = require("inquirer");
const connect = require("../connect");
require("console.table");

// Function to view all departments
viewAllDepartments = () => {
  // Quering the db for department name
  const sql = `SELECT department.id AS id, 
    department.department_name AS department FROM department`;

  // connecting to db
  connect.query(sql, (err, table) => {
    if (err) throw err;
    console.table(table);
  });
};

// Exporing function
module.exports = viewAllDepartments;
