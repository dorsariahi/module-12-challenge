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
);
db.connect(err => {
    if (err)
        throw (err)
    console.log('Connected to the employee_db database.')
    require("console.table")
})

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "what would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "Change employee role", "Change employe manager"]
        }
    ]).then((input) => {
        const { options } = input;
        if (options === "view all departments") {
            getDepartment();
        }
        if (options === "view all roles") {
            getRoles();
        }
        if (options === "view all employees") {
            getEmployee();
        }
        if (options === "add a department") {
            newDepartment();
        }
        if (options === "add a role") {

        }
        if (options === "add an employee") {

        }
        if (options === "Change employee role") {

        }
        if (options === "Change employe manager") {

        }
    })

}
startApp()

getDepartment = () => {
    const mysql = 'select * form department'
    db.query(mysql, (err, row) => {
        if (err)
            throw err;
        console.table(row);
    })
}

getRoles = () => {
    const mysql = 'SELECT * FROM roles'
    db.query(mysql, (err, row) => {
        if (err)
            throw err;
        console.table(row);
    })
}

