const inquirer = require("inquirer");

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
                            const newEmployeeRoleInfo = answers.role;
                            newEmployeeNameInfo.push(newEmployeeRoleInfo);

                            const managerSQL = `SELECT * FROM employee`;

                            connection.promise().query(managerSQL, (err, data) => {
                                if (err) throw err;

                                const newEmployeeManagerInfo = data.map((
                                    {id, 
                                    first_name,
                                    last_name}
                                ) => 
                                {name: first_name + " "+ last_name, 
                                value: id
                                }));
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