const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const connection = require('./db/connection');
const { connect } = require('./db/connection');


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

}
function deleteEmployee() {

}