// Required constants
const connect = require("../connect");

// Function to view all roles
viewAllRoles = () => {
  // Quering for roles and department
  const sql = `SELECT role.id, role.title, department.department_name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id`;

  //Connecint to db
  connect.query(sql, (err, table) => {
    if (err) throw err;
    console.table(table);
  });
};

// Exporting function
module.exports = viewAllRoles;
