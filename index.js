var inquirer = require('inquirer');
const fs = require('fs');
// use the generatePage function from module 9 and point to the correct file
//const generatePage = require('./util/generateMarkdown.js');

const promptUser = () => { 
  return inquirer.prompt([
  
    // list of questions about each position
    // all questions require an answer
    {
      // manager's name
      type: 'input',
      name: 'manager name',
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
      name: 'manager ID',
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
      name: 'manager email',
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
      name: 'manager office number',
      message: "What is the team manager's email? (Required)",
      validate: managerOffice => {
        if (managerOffice) {
          return true;
        } else {
          console.log("Please enter the manager's office number!");
        }
      }
    }
  ])
};

promptUser()
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
    .catch(err => {
    console.log(err);
  }); 
  
  
// print user input to a generator.html so team info can be displayed

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generator.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};