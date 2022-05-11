const inquirer = require("inquirer");
const connect = require("..connect/");

const addingRoles = () => {
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

            connect.promise().query(newRole, (err, data) => {
                cons
            })
        })
}