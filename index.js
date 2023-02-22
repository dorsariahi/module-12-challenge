const inquirer = require("inquirer");
const mysql = require("mysql2")
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Dorsariahi1!',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

require("console.table")

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "what would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ]).then(function(response){
        console.log(response)
        process.exit();

    })

}
startApp()

