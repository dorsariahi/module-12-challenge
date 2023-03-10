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
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "Change employee role", "Change employe manager", "Finish"]
        }
    ]).then((input) => {
        const options = input.mainMenu;
        console.log(input.mainMenu)
        if (options === "view all departments") {
            console.log("test")
            getDepartment();
        }
        if (options === "view all roles") {
            getRole();
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
        if (options === "Finish") {
            console.log('closing applicaton')
            process.exit()
        }
    })
}

getDepartment = () => {
    const mysql = 'select * from department'
    db.query(mysql, (err, row) => {
        if (err)
            throw err;
        console.table(row);
        startApp()
    })
}

getRole = () => {
    const mysql = 'select * from role'
    db.query(mysql, (err, row) => {
        if (err)
            throw err;
        console.table(row);
        startApp()
    })
}

getEmployee = () => {
    const mysql = 'select * from employee'
    db.query(mysql, (err, row) => {
        if (err)
            throw err;
        console.table(row);
        startApp()
    })
}

newDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'Name your department',
            validate: newDepartment => {
                if (!newDepartment) {
                    console.log('enter the name please')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(input => {
        const mysql = `Insert into department (name) VALUES ('${input.newDepartment}');`
        db.query(mysql, input.newDepartment, (err, results) => {
            if (err)
                throw err;
            startApp()
        })
    })

}
startApp()