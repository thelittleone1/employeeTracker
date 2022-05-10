// Const
const inquirer = require("inquirer");

// Required Files
const addingEmployee = require("./addEmployee");

const startMenuOptions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "startMenu",
        choices: [
          "View all Departments",
          "View All Employees",
          "View All Roles",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Role",
          "Quit",
        ],
      },
    ])
    .then(function (answers) {
      console.log(answers);
     // menuChoices(answers);
    });
};

const menuChoices = () => {
  if (startMenuOptions.answers === "Add Employee") {
    addingEmployee();
  }
};

// const menuChoices = () => {
//   if (startMenu.answers === "View all Departments") {
//     return;
//     // Will return to department_db
//   } else if (startMenu.answers === " View All Employees") {
//     return;
//     // Will return to employee_eb
//   } else if (startMenu.answers === "View All Roles") {
//     return;
//     // Will return to roles_db
//   } else if (startMenu.answers === "Add Employee") {
//     addingEmployee();
//   } else if (startMenu.answers === "Add Department") {
//     // Create function to add deparment
//   } else if (startMenu.answers === "Add Role") {
//     // Create function to add role
//   } else if (startMenu.answers === "Update Employee Role") {
//     // Create function/db to update role?
//   } else if (startMenu.answers === "Quit") {
//     // Exit mysql?
//   }
// };

module.exports = startMenuOptions;
