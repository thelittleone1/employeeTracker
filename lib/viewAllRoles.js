const connect = require("../connect");

viewAllRoles = () => {
    const sql = `SELECT role.id, role.title, department.department_name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id`;

    connect.promise().query(sql, (err, rows) => {
        if (err) throw err;
    });
};