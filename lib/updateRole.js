const inquirer = require("inquirer");
const connect = require("../connect");

updateEmployee = () => {
    const employeeSQL = `SELECT * FROM employee`;

    connect.query(employeeSQL, (err, data) => {
        if (err) throw err;

        const employeeMap = data.map(
            (
                {id, first_name, last_name}
            ) => 
            (
                {name: first_name + " " + last_name, value: id}
            )
        );

        inquirer
            .prompt([
                {
                    type: "list",
                    name: "name",
                    message: "Which employee are you updating?",
                    choices: employeeMap
                }
            ])
            .then(updatedEmployee => {
                const upEmployee = updateEmployee.name;
                const empArray = [];
                empArray.push(upEmployee);

                const roleSQL = `SELECT * FROM role`;

                connect.query(roleSQL, (err, data) => {
                    if (err) throw err;

                    const upRole = data.map(
                        (
                            {
                                id, title
                            }
                        ) => (
                            {
                                name: title, value: id
                            }
                        )
                    );

                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "role",
                                message: "What is the employee's updated role?",
                                choices: upRole
                            }
                        ])
                        .then(updatedRoleChoice => {
                            const updatedRole = updatedRoleChoice.role;
                            empArray.push(updatedRole);

                            let employee = empArray[0];
                            empArray[0] = updatedRole;
                            empArray[1] = employee;

                            const sql = `UPDATED employee SET role_id = ? WHERE id = ?`;

                            connect.promise(sql, empArray, (err, results) => {
                                if (err) throw err;
                                console.log("Employee has been updated");
                            });
                        });
                });
            });
    });
};

module.exports = updateEmployee;