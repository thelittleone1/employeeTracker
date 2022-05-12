const inquirer = require("inquirer");
const connect = require("../connect");
const viewingDepartments = require("./viewAllDepartments");

addDepartment = () => {
    inquirer
        .prompt([
            {
            type: "input",
            message: "What is your deparments name?",
            name: "departmentName"
            }

        ])
        .then(function (answers) {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            connect.query(sql, answers.departmentName, (err, result) =>{
                if (err) throw err;
                console.log("Added " + answers.departmentName )

                viewingDepartments();
            });
                

        });
};

module.exports = addDepartment;