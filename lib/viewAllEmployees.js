const connect = require("..connect/");

viewAllEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name,
    role.title, department.department_name AS department, role.salary,
    CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manger_id = managerid`;

    connect.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
};