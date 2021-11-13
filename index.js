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
function addDepartment(){
    inquirer.prompt([
        {
            message: "What department would you like to add?", 
            type: "input",
            name: "name"
        } 
    ])
    .then((res => {
        return connection.query(`SELECT * FROM department`);
        console.table(res)
    })
    )
}