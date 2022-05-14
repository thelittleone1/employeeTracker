const inquirer = require("inquirer");
const connect = require("../connect");

// Gather New Employee first and last name
employeeQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is employee's last name?",
      },
    ])
    // Gather answers
    .then((answers) => {
      const newEmployeeNameInfo = [answers.firstName, answers.lastName];

      // Inserting rows in db
      const roledb = `SELECT role.id, role.title FROM role`;

      // Connection to database and pushing data in
      connect.query(roledb, (err, data) => {
        if (err) throw err;

        const roleMap = data.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        // Gathering more info for adding employee
        inquirer
          .prompt([
            {
              type: "list",
              name: "role",
              message: "What is the employee's role?",
              choices: roleMap,
            },
          ])
          // Gathering userInput for new role to push into an array
          .then((newEmployeeRole) => {
            const newRole = newEmployeeRole.newRole;
            newEmployeeNameInfo.push(newRole);

            // Selecting all employees
            const managerdb = `SELECT * FROM employee`;

            // Accessing db to push new role in
            connect.query(managerdb, (err, data) => {
              const managerMap = data.map(({ id, first_name, last_name }) => ({
                name: first_name + " " + last_name,
                value: id,
              }));

              // Updating employee manager
              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "manager",
                    message: "Who is the employee's manager?",
                    choices: managerMap,
                  },
                ])
                // gathing info from userinput the  pushing into an array
                .then((newEmployeeManager) => {
                  const newManager = newEmployeeManager;
                  newEmployeeNameInfo.push(newManager);
                
                  // Inserting row into db with new information
                  const employeedb = `INSERT INTO employee (first_name, last_name, role_id, manager_id) Values (?, ?, ?, ?)`;

                  // connecing to db
                  connect.query(
                    employeedb,
                    newEmployeeNameInfo,
                    (err, newEmployeeResults) => {
                      console.log("New Employee Added!");
                    }
                  );
                });
            });
          });
      });
    });
};

// employeeQuestions();

module.exports = employeeQuestions;