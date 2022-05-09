const inquirer = require("inquirer");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const employeeQuestions = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is their first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is their last name?"
        }
    ])
        .then(function (answers) {
            const newEmployeeNameInfo = [
                answers.firstName,
                answers.lastName
            ]

            // Grabing Avaible Roles from Table
            const rolesdb = `SELECT role.id, role.title FROM role`;
            
            connection.promise().query(roleSQL, (err, data) => {
                if (err) throw err;

                // Using map function to create new array
                // with new employee title and id
                const rolesMap = data.map((
                    {id, title}
                ) => ({
                    name: title,
                    value: id
                }));

                inquirer
                    .prompt([
                        {
                            type: "list",
                            name: "role",
                            message: "What is their role?",
                            choices: rolesMap
                        }
                    ])
                        .then(function (answers) {
                            const newEmployeeRoleInfo = 
                        })
            })

        });



    inquirer
        .prompt([
        {
            type: "list",
            name: "role",
            message: "What is their role?",
            choices: a
        },
        {
            type: "list",
            name: "managerID",
            message: "What is their manager's ID number?",
            choices: [
                "None",
                ...b
            ],
        }
    ]);
};

function createArrays() {
    const newRole = [];
    // const 
}