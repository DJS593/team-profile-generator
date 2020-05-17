var inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHtml.js');
const generateCSS = require('./src/generateCss.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// begin questions //

const employees = [];

const promptManager = () => { 
  return inquirer.prompt([
  
    // list of questions about each position
    // all questions require an answer
    {
      // manager's name
      type: 'input',
      name: 'managerName',
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
      name: 'managerId',
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
      name: 'managerEmail',
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
      name: 'managerOffice',
      message: "What is the team manager's office number? (Required)",
      validate: managerOffice => {
        if (managerOffice) {
          return true;
        } else {
          console.log("Please enter the manager's office number!");
        }
      }    
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add more employees?',
      choices: ['yes', 'no']
    } 
  ])
    .then(addEmployee => {
      if ({addEmployee} === 'yes') {
        console.log({addEmployee});
        addEmployee();
    } else {
      teamComplete();
    }
});
    
};

function addEmployee() {

}
function teamComplete() {

}
    
    
    // REMEMBER THIS CHANGE
      // testing roleinfo, but may want to make this more unique to myself
      // .then(role => {
      //   //let roleInfo = '';
      //   if (role === "Engineer") {
      //     roleInfo = "Github username";
      //   } else if (role === "Intern") {
      //     roleInfo = "school";
      //   } else {
      //     roleInfo = "office phone number";
      //   }
      //   inquirer.prompt([{
      //     type: 'input',
      //     message: `Enter employee ${roleInfo}`,
      //     name: 'roleInfo'
      //   },
      //   {
      //     type: 'list',
      //     name: 'addEmployee',
      //     message: 'Would you like to add more employees?',
      //     choices: ['yes', 'no']
      //   }
      //   ])
      //   .then(add => {
      //     let newEmployee;
      //     if (role==='Engineer') {
      //       newEmployee = new Engineer(name, id, email);            
      //     } else {
      //       newEmployee = new Intern(name, id, email);
      //     }
      //     employees.push(newEmployee);
      //     console.log(employees);
      //     if (addEmployee === 'yes') {
      //       promptUser();
      //     } else {
      //       teamComplete();
      //     }
      //   });
        
        
   
    // const teamDone = () => {
    //   if (({{team}}) === "Yes, add an engineer")

    // }

    

// const promptEngineer = () => { 
//   return inquirer.prompt([
       
    
//     {
//       // engineer's name
//       type: 'input',
//       name: 'engineer name',
//       message: "What is the engineer's name? (Required)",
//       validate: engineerName => {
//         if (engineerName) {
//           return true;
//         } else {
//           console.log("Please enter the engineer's name!");
//         }
//       }
//     },
//     {
//       // engineer's ID
//       type: 'input',
//       name: 'engineer ID',
//       message: "What is the engineer's ID? (Required)",
//       validate: engineerId => {
//         if (engineerId) {
//           return true;
//         } else {
//           console.log("Please enter the engineer's ID!");
//         }
//       }
//     },      
//     {
//       // engineer's email
//       type: 'input',
//       name: 'engineer email',
//       message: "What is the engineer's email? (Required)",
//       validate: engineerEmail => {
//         if (engineerEmail) {
//           return true;
//         } else {
//           console.log("Please enter the engineer's email!");
//         }
//       }
//     },      
//     {
//       // engineer's GitHub account
//       type: 'input',
//       name: 'engineer GitHub',
//       message: "What is the engineer's GitHub account? (Required)",
//       validate: engineerGithub => {
//         if (engineerGithub) {
//           return true;
//         } else {
//           console.log("Please enter the engineer's GitHub account!");
//         }
//       }
//     },      
//     {
//       // intern's name
//       type: 'input',
//       name: 'intern name',
//       message: "What is the intern's name? (Required)",
//       validate: internName => {
//         if (internName) {
//           return true;
//         } else {
//           console.log("Please enter the intern's name!");
//         }
//       }
//     },
//     {
//       // intern's ID
//       type: 'input',
//       name: 'intern ID',
//       message: "What is the intern's ID? (Required)",
//       validate: internId => {
//         if (internId) {
//           return true;
//         } else {
//           console.log("Please enter the intern's ID!");
//         }
//       }
//     },      
//     {
//       // intern's email
//       type: 'input',
//       name: 'intern email',
//       message: "What is the engineer's email? (Required)",
//       validate: internEmail => {
//         if (internEmail) {
//           return true;
//         } else {
//           console.log("Please enter the intern's email!");
//         }
//       }
//     },      
//     {
//       // intern's university
//       type: 'input',
//       name: 'university',
//       message: "What is the intern's university? (Required)",
//       validate: internUniversity => {
//         if (internUniversity) {
//           return true;
//         } else {
//           console.log("Please enter the intern's university!");
//         }
//       }
//     },      
  
  
//   ])
// };




promptManager()
  .then(portfolioData => {
    return generateHTML(portfolioData);
  })
  .then(generateHTML => {
    return writeFileHTML(generateHTML);
  })
  .then(writeFileHTMLResponse => {
    console.log(writeFileHTMLResponse);
  })
  .then(portfolioData => {
    return generateCSS(portfolioData);
  })
  .then(generateCSS => {
    return writeFileCSS(generateCSS);
  })
  .then(writeFileCSSResponse => {
    console.log(writeFileCSSResponse);
  })
  .catch(err => {
  console.log(err);
  });
  
  // promptEngineer()
  // .then(portfolioData => {
  //   return generateHTML(portfolioData);
  // });
  


// print user input to generator.html so team info can be displayed

const writeFileHTML = generateHTML => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generator.html', generateHTML, err => {
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
  
// create CSS file to format generator.html

const writeFileCSS = generateCSS => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generator.css', generateCSS, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'CSS File Created!'
      });
    });
  });
};   
