const inquirer = require("inquirer");

const employeeQuestions = (a, b) => {
    return[
        {
            type: "input",
            name: "firstName",
            message: "What is their first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is their last name?"
        },
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
    ];
};

function createArrays() {
    const newRole = [];
    // const 
}