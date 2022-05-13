const inquirer = require("inquirer");
const connect = require("../connect");
require('console.table');
const startMenu = require("./startMenu");

viewAllDepartments = () => {
    const sql = `SELECT department.id AS id, 
    department.department_name AS department FROM department`;

    connect.query(sql, (err, table) => {
        if (err) throw err;
        console.table(table);

    });
};

//startMenu();

module.exports = viewAllDepartments;