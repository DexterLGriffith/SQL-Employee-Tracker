const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const connection = require('./db/connection')


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
function addDepartment(){
    inquirer.prompt([
        {
            message: "What department would you like to add?", 
            type: "input",
            name: "name"
        }, 
    ])
    .then(function(answer){
        connection.query("INSERT INTO department SET ?",
        {id: answer.id, department_name: answer.department_name},
        function(err, res){
            if (err) throw err;
             console.table(res);
        typeOfChoice();
        });
    })
}
function viewDepartments(){
    connection.query("SELECT * FROM department",
    function(err, res) {
        if (err) throw err;
        console.table(res);
    typeOfChoice();
    });
}
