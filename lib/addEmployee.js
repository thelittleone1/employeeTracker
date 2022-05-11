const inquirer = require("inquirer");
const connect = require("..connect/");

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

      // Gather data from roles
      const roledb = `SELECT role.id, role.title FROM role`;

      connection.promise().query(roledb, (err, data) => {
        if (err) throw err;

        const roleMap = data.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "role",
              message: "What is the employee's role?",
              choices: roleMap,
            },
          ])
          .then((newEmployeeRole) => {
            const newRole = newEmployeeRole.newRole;
            newEmployeeNameInfo.push(newRole);

            const managerdb = `SELECT * FROM employee`;

            connection.promise().query(managerdb, (err, data) => {
              const managerMap = data.map(({ id, first_name, last_name }) => ({
                name: first_name + " " + last_name,
                value: id,
              }));

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "manager",
                    message: "Who is the employee's manager?",
                    choices: managerMap,
                  },
                ])
                .then((newEmployeeManager) => {
                  const newManager = newEmployeeManager;
                  newEmployeeNameInfo.push(newManager);

                  const employeedb = `INSERT INTO employee (first_name, last_name, role_id, manager_id) Values (a, b, c, d)`;

                  connection.query(
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