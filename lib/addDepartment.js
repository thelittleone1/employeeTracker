// Required constants
const inquirer = require("inquirer");
const connect = require("../connect");
const viewingDepartments = require("./viewAllDepartments");

// Function to add a dpeartment
addDepartment = () => {
    // Prompt user
    inquirer
        .prompt([
            {
            type: "input",
            message: "What is your deparments name?",
            name: "departmentName"
            }

        ])
        // Gather user input 
        .then(function (answers) {
            // mysql2 feature 
            // Insert row into table
            const sql = `INSERT INTO department (department_name) VALUES (?)`;
            // Using connect to add answers to db
            connect.query(sql, answers.departmentName, (err, result) => {
                if (err) throw err;
                console.log("Added " + answers.departmentName);

                viewingDepartments();
            });
                

        });
};

// Exporting function to Startmenu
module.exports = addDepartment;