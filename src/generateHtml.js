// pull in the data for generator.html
  
const generatePage = templateData => {

  // redefine this variable and parameters // let { title, description, installation, usage, contribution, test, email, username, license } = templateData;
  
  // if statement to ensure the correct badge is shown depending on license choic
  
  
  // generator.html file structure and linked data

  return `
  # **${title}**
  ${badge}

  ## Description 
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#questions)
  
  ## Installation Instructions <a name="installation"></a> 
  ${installation}
  
  ## Usage Instructions <a name="usage"></a>
  ${usage}
  
  ## License <a name="license"></a>
  ${license}
  
  ## Contributing <a name="contributing"></a>
  ${contribution}
  
  ## Tests <a name="tests"></a>
  ${test}

  ## Questions <a name="questions"></a>
  http://www.github.com/${username}
  
  Email ${email} with any additional questions. 
  
  `;
};


module.exports = generatePage;

