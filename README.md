# SQL-Employee-Tracker

This is a webpage app that is a SQL based application that allows the user to view as well as add and delete employees, roles, and departments. 

## Description 

SQL- Employee Tracker application, is an application that was made from scratch, using the combined knowledge gained from Node.js, Inquirer, and MySQL. This applicaiton was created to help manage a company's employee database. It allows for the employer to view, Add and delete everything from Departments, to Employees, and roles of the employees. This application takes the information provided and generates tables within the MySQL application which are easy to view, and use for the employer.   

## Tasks Completed

1. Created basic file from Github with a README.md, license and initial index.js file. 
2. Created initial files needed for this project, and folders for organization. 
3. Set up connection.js files and SQL files.  
4. Made index.js file, with inquirer prompt to initialize the mysql application.

    Example:
    
            inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "type",
            type: "list",
            choices: []
5. Used mysql application and the index.js file to change between what you information you wanted to access, or change. 

    Example: 

            function(answer){
        switch(answer.type){
            case "View All Employees":
                allEmployees();
6. Created functions for each of the different available cases of adding, deleting and viewing information. 

    Example:

            function viewRoles() {
        connection.query("SELECT * FROM role",
            function (err, res) {
            console.table(res);
            typeOfChoice();
        });
7. Tested mysql application to ensure proper functionality.
8. Made sure all programs interact as they are intended to, and that you can Quit out of the application. 
9. After making sure the file looked of professional quality, it was uploaded to Github. 

## Installation

1. Download files from the repository.
2. Open Index.js and a command terminal for the folder. 
3. Initialize npm within file terminal.
4. Within terminal, type in node index.js to initialize inquirer prompts. 
5. Follow prompts to add, delete, or change employee roles, as well as other roles. 

## Links 

[Link to the Code Repository](https://github.com/DexterLGriffith/SQL-Employee-Tracker)

[Screencastify]()

## Credits

Dexter Griffith

## References 

1. https://www.npmjs.com/package/console.table 
2. https://docs.microsoft.com/en-us/sql/relational-databases/tables/create-foreign-key-relationships?view=sql-server-ver15 
3. https://stackoverflow.com/questions/15699045/multiple-foreign-keys-in-same-table 
4. https://jasonwatmore.com/post/2020/09/17/sequelize-mysql-create-database-if-it-doesnt-exist 
5. https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/join-a-role?view=sql-server-ver15
