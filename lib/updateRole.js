// Required constants
const inquirer = require("inquirer");
const connect = require("../connect");
//const startMenu = require("./startMenu");

// Function to Update employee
updateEmployee = () => {
  // Query to select all for table employee
  const employeeSQL = `SELECT * FROM employee`;

  // Connect function to db
  connect.query(employeeSQL, (err, data) => {
    if (err) throw err;

    // using .map to caputre employee name and id to be updated
    const employeeMap = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    // Inquirer prompt to select which employee to update
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee are you updating?",
          choices: employeeMap,
        },
      ])
      // gathering user answers into a constant and pushing into an empty array
      .then((updatedEmployee) => {
        const upEmployee = updatedEmployee.name;
        const empArray = [];
        empArray.push(upEmployee);

        // Selecting all from table role
        const roleSQL = `SELECT * FROM role`;

        // Connecting to db
        connect.query(roleSQL, (err, data) => {
          if (err) throw err;

          // similar to LN16 transforming array for chaning employee role
          const upRole = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));

          // Selecting which role to change employee to
          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What is the employee's updated role?",
                choices: upRole,
              },
            ])
            // This is where you need to fix code (add Blockpoint and debug)
            // pushing the userinput into constance and then into the array
            .then((updatedRoleChoice) => {
              const updatedRole = updatedRoleChoice.role;
              empArray.push(updatedRole);
              //console.log(empArray);
              //console.log(updatedRole);

              let employee = empArray[0];
              empArray[0] = updatedRole;
              empArray[1] = employee;
              //console.log(empArray);

              // quering for updated employee role
              const sql = `UPDATED employee SET role_id = ? WHERE id = ?`;

              // Connecting to db
              connect.promise(sql, empArray, (err, results) => {
                if (err) throw err;
                console.log("Employee has been updated");
              });
            });
        });
      });
  });
};

//startMenu();
module.exports = updateEmployee;
