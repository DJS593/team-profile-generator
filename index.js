var inquirer = require('inquirer');
const fs = require('fs');
const teamComplete = require('./src/generateHtml.js');
//const generateCSS = require('./src/generateCss.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// begin questions //

const employeeArray = [];

const promptManager = () => { 
  return inquirer.prompt([
  
    // list of questions about each position
    // all questions require an answer
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
    .then(data => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamMember = new Manager(name, id, email, officeNumber)
      employeeArray.push(teamMember)
      promptAddEmployee();
  });
};    
 

const promptAddEmployee = () => {
  inquirer.prompt([
      {
          type: "list",
          message: "Would you like to add more team members?",
          choices: ["Yes, add an engineer!", "Yes, add an intern!", "No, the team is complete!"],
          name: "addEmployeeData"
      }
  ])

      .then(data => {

          switch (data.addEmployeeData) {
              case "Yes, add an engineer!":
                  promptAddEngineer();
                  break;

              case "Yes, add an intern!":
                  promptAddIntern();
                  break;
              case "No, the team is complete!":
                  console.log(employeeArray);
                  teamComplete(employeeArray);
                  break;
          }
      });
};

promptAddEngineer = () => {
  inquirer.prompt([
      {
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
          employeeArray.push(teamMember)
          promptAddEmployee()
      });

};

function promptAddIntern() {
  inquirer.prompt([
      {
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
          
          employeeArray.push(teamMember)
          
          promptAddEmployee();
          
      });

};
  
// function produceHtml () {
//     console.log(employeeArray);

//}

promptManager()

// promptManager()
//   .then(employeeArray => {
//     return teamComplete(employeeArray);
//   })
//   .then(generateHTML => {
//     return writeFileHTML (generateHTML)
//   })
//   .catch(err => {
//     console.log(err);
//     });

//The promptManager() begins the process of building the team roster.   
// portfolioData

// promptManager()
//   .then(employeeArray => {
//     return teamComplete(employeeArray);
//   })
//   .then(generateHTML => {
//     return writeFileHTML(generateHTML);
//   });
  // .then(writeFileHTMLResponse => {
  //   console.log(writeFileHTMLResponse);
  // })
  // .then(portfolioData => {
  //   return generateCSS(data);
  // })
  // .then(generateCSS => {
  //   return writeFileCSS(generateCSS);
  // })
  // .then(writeFileCSSResponse => {
  //   console.log(writeFileCSSResponse);
  // })
  // .catch(err => {
  // console.log(err);
  // });
  

// // print user input to generator.html so team info can be displayed

const writeFileHTML = teamComplete => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generator.html', teamComplete, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'HTML File Created!'
      });
    });
  });
}; 
  

// // create CSS file to format generator.html

// 





// function teamComplete() {
      
//   const htmlArray = []
//   const htmlBeginning = `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>${employeeArray[0]}</title>
//   <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
//   <style>
//    ${style}
//   </style>
// </head>
// <body>
//   <div class="banner-bar">
//       <h1>${employeeArray[0]}</h1>
//   </div>
//   <div class="card-container">
//   `
//   htmlArray.push(htmlBeginning);

//   for (let i = 1; i < employeeArray.length; i++) {
//       let object = `
//       <div class="member-card">
//           <div class="card-top">
//               <h2>${employeeArray[i].name}</h2>
//               <h2>${employeeArray[i].title}</h2>
//           </div>
//           <div class="card-bottom">
//               <p>Employee ID: ${employeeArray[i].id}</p>
//               <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a>></p>
//       `
//       if (employeeArray[i].officeNumber) {
//           object += `
//           <p>${employeeArray[i].officeNumber}</p>
//           `
//       }
//       if (employeeArray[i].github) {
//           object += `
//           <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
//           `
//       }
//       if (employeeArray[i].school) {
//           object += `
//           <p>School: ${employeeArray[i].school}</p>
//           `
//       }
//       object += `
//       </div>
//       </div>
//       `
//       htmlArray.push(object)
//   }

//   const htmlEnd = `
//   </div>
//   </body>
//   </html>
//   `
//   htmlArray.push(htmlEnd);

//   fs.writeFile(`./dist/generator.html/${employeeArray[0]}.html`, htmlArray.join(""), function (err) {
      
//   })
// }

// promptManager()