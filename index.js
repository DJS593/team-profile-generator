// modules
const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./src/generateCss")

// Class files
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

// array to store team information
let finalTeamArray = [];

// initilizing the application
startingPrompt = () => {
    inquirer.prompt([
        {
            message: "/////////Welcome to Team Generator 5000! Please write your team name://///////",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

// add the team manager's information (name, id, email and officeNumber)

addManager = () => {
    inquirer.prompt([
      {
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
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

// addTeamMembers() will prompt the user to add an additional employee (Engineer or Intern) or finish the program

addTeamMembers = () => {
    inquirer.prompt([
        {
            type: "list",
            message: 'Would you like to add more team members?',
            choices: ['Yes, add an engineer!', 'Yes, add an intern!', 'No, the team is complete!'],
            name: 'addMemberData'
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add an engineer!":
                    addEngineer();
                    break;

                case "Yes, add an intern!":
                    addIntern();
                    break;
                case "No, the team is complete!":
                    compileTeam();
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
        message: "What is the engineer's name?",
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
          message: "What is the engineer's employee ID?",
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
          message: "What is the engineer's email address?",
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
          message: "What is this engineer's Github username?",
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
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

// AddIntern() allows user to input new Intern's information (name, id, email, school)

addIntern = () => {
    inquirer.prompt([
    {
        // Intern's name
        type: 'input',
        message: "What is the intern's name?",
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
      message: "What is the intern's employee ID?",
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
        message: "What is the intern's email address?",
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
        message: "What is the intern's school?",
        name: 'school',
        validate: internUniversity => {
            if (internUniversity) {
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
            finalTeamArray.push(teamMember)
            console.log(teamMember);
            addTeamMembers()
        });

};

compileTeam = () => {
    console.log('Team Roster complete!')

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>Team Roster</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>Office: ${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile('./dist/team-roster.html', htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()
//addManager()

