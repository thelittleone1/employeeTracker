// Constants
const inquirer = require("inquirer");
const connect = require("../connect");
const viewRoles = require("./viewAllRoles");

// Adding roles function
addingRoles = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
    ])
    // Creating new constance from userinput
    .then((answers) => {
      const params = [answers.role, answers.salary];

      // Selecting rows from db
      const department = `SELECT department_name, id FROM department`;

      // connecting query to push data in
      connect.query(department, (err, data) => {
        if (err) throw err;

        // Transforming array into a new array
        const departmentMap = data.map(({ department_name, id }) => ({
          department_name: department_name,
          value: id,
        }));

        // Gathering info for what role the department is in
        inquirer
          .prompt([
            {
              type: "list",
              name: "department",
              message: "What department is this role in?",
              choices: departmentMap,
            },
          ])
          // gathering userinput and pushing into an array
          .then((departmentChoice) => {
            const newDepartment = departmentChoice.newDepartment;
            params.push(newDepartment);

            // insering a new row with userinputed data into a new row
            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

            // connection to db
            connect.query(sql, params, (err, results) => {
              if (err) throw err;

              console.log("Added Role!");

              viewRoles();
            });
          });
      });
    });
};

module.exports = addingRoles;
