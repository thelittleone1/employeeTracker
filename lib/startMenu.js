// Const
const inquirer = require("inquirer");

// Required Files
const addingEmployee = require("./addEmployee");
const viewingDepartments = require("./viewAllDepartments");
const viewingEmployees = require("./viewAllEmployees");
const viewingRoles = require("./viewAllRoles");
const addingRole = require("./addRole");
const addingDepartmentsEl = require("./addDepartment")
const updatingRolesEl = require("./updateRole");

// Function to start application
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
      menuChoices(answers);
    });
};

// Function to call helper functions
const menuChoices = (argument) => {
  // console.log(argument);
  if (argument.startMenu === "Add Employee") {
    addingEmployee();
  } else if (argument.startMenu === "View all Departments") {
    viewingDepartments();
  } else if (argument.startMenu === "View All Employees") {
    viewingEmployees();
  } else if (argument.startMenu === "View All Roles") {
    viewingRoles();
  } else if (argument.startMenu === "Add Role") {
    addingRole();
  } else if (argument.startMenu === "Add Department") {
    addingDepartmentsEl();
  } else if (argument.startMenu === "Update Employee Role") {
    updatingRolesEl();
  }
};

// Exporting startMenu functions
module.exports = startMenuOptions;
