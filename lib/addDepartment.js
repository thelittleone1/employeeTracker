const inquirer = require("inquirer");

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
            const newDepartmentName = answers.departmentName;
            return newDepartmentName;
        })
};

module.exports = addDepartment;