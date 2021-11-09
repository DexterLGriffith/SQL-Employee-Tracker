const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');



const questionChoice = []
function typeOfChoice() {
    return inquirer.prompt([
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
                "View All Employees",
                "Quit"
            ],
        }
    ])
}