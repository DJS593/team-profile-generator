var inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHtml.js');
const generateCSS = require('./src/generateCss.js');

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
};




promptUser()
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
