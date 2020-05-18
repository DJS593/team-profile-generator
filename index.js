// modules
const inquirer = require('inquirer');
const fs = require('fs');
const styleSheet = require('./src/generateCss');

// Class files
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// array to store employee information
let employeeArray = [];


// prompt the user for the team manager's information (name, id, email and officeNumber)
promptManager = () => {
    inquirer.prompt([  {
      
        // manager's name
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
            }
        }
    },    
    {
        // manager's ID
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID? (Required)",
        validate: managerId => {
            if (managerId) {
                return true;
            } else {
                console.log("Please enter the manager's ID!");
            }
        }
    },      
    {
        // manager's email
        type: 'input',
        name: 'email',
        message: "What is the team manager's email? (Required)",
        validate: managerEmail => {
            if (managerEmail) {
                return true;
            } else {
                console.log("Please enter the manager's email!");
            }
        }
    },    
    {
        // manager's office number
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number? (Required)",
        validate: managerOffice => {
            if (managerOffice) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
            }
        }    
    }
  ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        employeeArray.push(teamMember)
        addEmployee();
    });

}


// addTeamMembers() will prompt the user to add an additional employee (Engineer or Intern) or finish the program
addEmployee = () => {
    inquirer.prompt ([
    {
        type: "list",
        message: 'Would you like to add more team members?',
        choices: ['Yes, add an engineer!', 'Yes, add an intern!', 'No, the team is complete!'],
        name: 'addEmployee'
    }
  ])
    
    // the switch() allows the user to pick the next action; add an employee or produce the HTML
    .then(function (data) {
        switch (data.addEmployee) {
            case "Yes, add an engineer!":
                addEngineer();
                break;

            case "Yes, add an intern!":
                addIntern();
                break;
            case "No, the team is complete!":
                renderHTML();
                break;
        }
    });
}


// add new Engineer's information (name, id, email, github)
addEngineer = () => {
    inquirer.prompt([
    {
        // Engineer's name
        type: 'input',
        message: "What is the engineer's name? (Required)",
        name: 'name',
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log("Please enter the engineer's name!")
            }
        }
    },
    {
        // Engineer's ID
        type: 'input',
        message: "What is the engineer's employee ID? (Required)",
        name: 'id',
        validate: engineerId => {
            if (engineerId) {
                return true;
            } else {
                console.log("Please enter the engineer's employee ID!")
            }
        }
    },  
    {
        // Engineer's email
        type: 'input',
        message: "What is the engineer's email address? (Required)",
        name: 'email',
        validate: engineerEmail => {
            if (engineerEmail) {
                return true;
            } else {
                console.log("Please enter the engineer's email!")
            }
        }
    },
    {
        // Engineer's github username
        type: 'input',
        message: "What is this engineer's Github username? (Required)",
        name: 'github',
        validate: engineerGithub => {
            if (engineerGithub) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username!")
            }
        }
    }
  ])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        employeeArray.push(teamMember)
        
        // loop back to addEmployee() to either add another employee or render the HTML
        addEmployee()
    });

};


// AddIntern() allows user to input new Intern's information (name, id, email, school)
addIntern = () => {
    inquirer.prompt([
    {
        // Intern's name
        type: 'input',
        message: "What is the intern's name? (Required)",
        name: 'name',
        validate: internName => {
            if (internName) {
                return true;
            } else {
                console.log("Please enter the intern's name!")
            }
        }
    },
    {
        // Intern's employee ID
        type: 'input',
        message: "What is the intern's employee ID? (Required)",
        name: 'id',
        validate: internId => {
            if (internId) {
                return true;
            } else {
                console.log("Please enter the intern's employee ID!")
            }
        }   
    },   
    {
        // Intern's email
        type: 'input',
        message: "What is the intern's email address? (Required)",
        name: "email",
        validate: internEmail => {
            if (internEmail) {
                return true;
            } else {
                console.log("Please enter the intern's email address!")
            }
        }
    },
    {
        // Intern's school
        type: 'input',
        message: "What is the intern's school? (Required)",
        name: 'school',
        validate: internSchool => {
            if (internSchool) {
                return true;
            } else {
                console.log("Please enter the intern's university!");
            }
        }
    },      
    
  ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        employeeArray.push(teamMember)
        
        // call addEmployee() to either add another employee or render the HTML
        addEmployee()
    });

};


// The renderHTML() will produce the team-roster.html.  Ideally this would sit in a seperate file and will be moved in a future iteration.
renderHTML = () => {
    console.log('Team Roster complete!')

    const teamRosterArray = []
    const teamRosterBegin = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${styleSheet}
    </style>
    </head>
    <body>
        <div class="banner-bar">
            <h1>Team Roster</h1>
        </div>
        <div class="card-container">
    `
    teamRosterArray.push(teamRosterBegin);

    for (let i = 0; i < employeeArray.length; i++) {
        let html = `
        <div class="member-card">
            <div class="card-top">
                <h2>${employeeArray[i].name}</h2>
                <h2>${employeeArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${employeeArray[i].id}</p>
                <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a>></p>
        `
        if (employeeArray[i].officeNumber) {
            html += `
            <p>Office: ${employeeArray[i].officeNumber}</p>
            `
        }
        if (employeeArray[i].github) {
            html += `
            <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
            `
        }
        if (employeeArray[i].school) {
            html += `
            <p>School: ${employeeArray[i].school}</p>
            `
        }
        html += `
        </div>
        </div>
        `
        teamRosterArray.push(html)
    }

    const teamRosterEnd = `
    </div>
    </body>
    </html>
    `
    teamRosterArray.push(teamRosterEnd);

    // produce the HTML from the above template
    fs.writeFile('./dist/team-roster.html', teamRosterArray.join(""), function (err) {
        
    })
}

// promptManager() will initilize the app
promptManager()