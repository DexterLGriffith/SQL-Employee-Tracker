const express = require('express');
//import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


//middleware express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// database connect
const db = mysql.createConnection(
    {
        //sets up user and pass for mysql...
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'department_db'
    },

console.log(`Connected to the department_db database.`)
// verification of connection to movie_db database.
);
//query posts..



//end query posts. 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    //lets user know the port its running off of.
});