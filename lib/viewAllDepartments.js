const inquirer = require("inquirer");
const connect = require("..connect/");

viewAllDepartments = () => {
    const sql = `SELECT department.id AS id, 
    department.department_name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
};