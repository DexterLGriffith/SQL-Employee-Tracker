SELECT * FROM department;

SELECT role.id, role.title, role.salary, department.department_name, department.id AS department_id
FROM role
LEFT JOIN department AS department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name,
CONCAT(employee2.first_name, " " ,employee2.last_name) AS "manager name" 
FROM employee AS employee
LEFT JOIN role AS role ON employee.role_id = role.id
LEFT JOIN department AS department ON role.department_id = department.id
LEFT JOIN employee AS employee2 on employee.manager_id = employee2.id 

-- INSERT INTO role (role.id, role.title, role.salary, role.department_id)
-- VALUES (?, ?, ?, ?)