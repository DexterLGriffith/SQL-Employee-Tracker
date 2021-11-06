const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'department_db'
},
connection.connect( function (err){
    if (err) throw err;

console.log(`Connected to the department_db database.`)
}));

module.exports = connection;