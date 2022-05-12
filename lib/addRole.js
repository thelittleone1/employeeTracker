const inquirer = require("inquirer");
const connect = require("../connect");

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
                message: "What is the salary for this role?"
            }
        ])
        .then(answers => {
            const newRole = 
            [
                answers.role,
                answers.salary
            ];

            const department = `SELECT name, id FROM department`;

            connect.query(newRole, (err, data) => {
                if (err) throw err;

                const departmentMap = data.map(
                    (
                        {name, id}
                    ) =>
                    (
                        {name: name, value: id}
                    )
                );

                inquirer
                    .prompt([
                        {
                            type: "list",
                            name: "department",
                            message: "What department is this role in?",
                            choices: departmentMap
                        }
                    ])
                    .then(departmentChoice => {
                        const newDepartment = departmentChoice.newDepartment
                        newRole.push(newDepartment);

                        const sql = `INSERT INTO role (title, salary, department_id) VALUES (a, b, c)`;

                        connect.query(sql, newRole, (err, results) => {
                            if (err) throw err;

                        });
                    });
            });
        });
};

module.exports = addingRoles;