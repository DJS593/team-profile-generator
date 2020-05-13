var inquirer = require('inquirer');


const promptUser = () => { 
  return inquirer.prompt([
  
    // list of questions about each position
    // all questions require an answer
    {
      // project title
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the project title!');
        }
      }
    },    