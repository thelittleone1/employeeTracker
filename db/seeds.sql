

INSERT INTO department (department_name) VALUES
-- department_id = 1
("Sales"), 
-- department_id = 2
("Engineering"), 
-- department_id = 3
("Finance"),
-- deparment_id = 4
("Legal");

INSERT INTO role (title, salary, department_id) VALUES
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
-- Salesperson
("Jeff", "Winger", 1, NULL),
-- Lead Engineer
("Abed", "Nadir", 2, NULL),
-- Software Engineer
("Annie", "Edison", 3, 2),
-- Account Manager
("Britta", "Perry", 4, NULL),
-- Accountant
("Troy", "Barnes", 5, 4),
-- Legal Team Lead
("Pierce", "Hawthorne", 6, NULL),
-- Lawyer
("Shirley", "Bennet", 7, 6);
