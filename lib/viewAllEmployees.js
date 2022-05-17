// Required constant
const connect = require("../connect");

// Function to view all employees
viewAllEmployees = () => {
  // Quering for employee name, id, and managers name
  // Must concat names to view correclty
  // Also quering for their roles
  const sql = `SELECT employee.id, employee.first_name, employee.last_name,
        role.title, department.department_name AS department, role.salary,
        CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  // Connecint to db
  connect.query(sql, (err, table) => {
    if (err) throw err;
    console.table(table);
  });
};

// Exporting function
module.exports = viewAllEmployees;
