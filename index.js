const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const connection = require('./db/connection');
const { connect } = require('./db/connection');
const { EPERM } = require('constants');


function typeOfChoice() {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "type",
            type: "list",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "Quit"
            ],
        }
    ])
    . then(
    function(answer){
        switch(answer.type){
            case "View All Employees":
                allEmployees();
            break;
            case "Add Employee":
                addEmployee();
            break;
            case "Update Employee Role":
                updateRole();
            break;
            case "View All Roles":
                viewRoles();
            break;
            case "Add Role":
                addRole();
            break;
            case "View All Departments":
                viewDepartments();
            break;
            case "Add Department":
                addDepartment();
            break;
            case "Delete Department":
                deleteDepartment();
            break;
            case "Delete Role":
                deleteRole();
            break;
            case "Delete Employee":
                deleteEmployee();
            break;
            case "Quit":
            connection.end();


        }
    })
}
typeOfChoice();
function addDepartment() {
    inquirer.prompt([
        {
            message: "What department would you like to add?",
            type: "input",
            name: "name"
        },
    ])
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?",
                { id: answer.id, department_name: answer.department_name },
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    typeOfChoice();
                });
        })
}
function viewDepartments() {
    connection.query("SELECT * FROM department",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
        });
}
function allEmployees() {
    connection.query("SELECT * FROM employee",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
        });
}
function viewRoles() {
    connection.query("SELECT * FROM role",
        function (err, res) {
            console.table(res);
            typeOfChoice();
        });
}
function addRole() {
    connection.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      const departments = res.map((department) => {
          return {
              name: department.department_name,
              value: department.id,
          };
      })
      inquirer
      .prompt([
        {
          message: "What is the title of the role?",
          name: "title",
          type: "input",
        },
        {
          message: "What is the salary of the role?",
          name: "salary",
          type: "input",
        },
        {
          message: "What is the department for the role?",
          name: "department_id",
          type: "list",
          choices: departments,
        },
      ])
      .then(function (answer) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            id: answer.id,
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id,
          },
          function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
          }
        );
      });
  });   
}
function addDepartment() {
    inquirer.prompt([
        {
            message: "What's the name of the department you want to add?",
            name: "department_name",
            type: "input",
        },
    ])
    .then(function(answer) {
        connection.query("INSERT INTO department SET?", answer,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
        });
    })
}
function addEmployee() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        const roles = res.map((role) => {
            return {
                name: role.title,
                value: roles.id,
            };
        });
    });
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        const employees = res.map((employee) => {
            return {
                name: employee.first_name + " " + employee.last_name, 
                value: employees.id 
            };
        });
    });
    inquirer.prompt([
        {
            message: " What is the first name of the employee?",
            name: "first_name",
            type: "input",
        },
        {
            message: "What is the last name of the employee?",
            name: "last_name",
            type: "input",
        },
        {
            message: "What is the role for the employee?",
            name: "role_id",
            type: "input",
            choices: roles,
        },
        {
            message: "Who is the manager for the employee?",
            name: "manager_id",
            type: "input",
            choices: employees,
        },
    ])
    .then(function(answer){
        connection.query(
            "INSERT INTO employee SET ?",
            {
                id: answer.id,
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
            function (err, res) {
                if (err) throw err;
                console.log(affectionedRows + " role added!");
                typeOfChoice();
            }
        );
    });
}
function deleteDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        const departments = res.map((department) => {
            return {
                name: department.department_name,
                value: department.id,
            };
        });

        inquirer.prompt([
            {
                message: "What is the name of the department you are wanting to delate?",
                name: "id",
                type: "input",
                choices: departments,
            },
        ])
        .then( function (answer) {
            connection.query("DELETE FROM department WHERE ?", {
                id: answer.id,
            },
            function (err, res) {
                if (err) throw err;
                console.table(res);
                typeOfChoice();
            }
            );
        });
    });
}
function deleteRole() {
    inquirer.prompt([
        {
            message: "What is the id of the role you want to delete?",
            name: "id",
            type:"input",
        },
    ])
    .then( function (answer) {
        connection.query("DELETE FROM role WHERE ?", {
            id: answer.id,
        },
        function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
        }
        );
    });

}
function deleteEmployee() {
    inquirer.prompt([
        {
            message: "What is the id of the employee you want to delete?",
            name: "id",
            type:"input",
        },
    ])
    .then( function (answer) {
        connection.query("DELETE FROM employee WHERE ?",
        {
            id: answer.id,
        },
        function (err, res) {
            if (err) throw err;
            console.table(res);
            typeOfChoice();
        }
        );
    });
}