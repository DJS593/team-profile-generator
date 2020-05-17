// generateCSS provides the template for the CSS file
  
const generateCSS = data => {

  // redefine this variable and parameters // let { title, description, installation, usage, contribution, test, email, username, license } = templateData;
  
  
  
  // generator.css file structure and linked data

  return `
  .main-container { 
    height: 600px;
    background-color: lightblue;
  }
  
  .header {
    background-color: red;
    color: white;
    text-align: center;
    height: 100px;
  }
  
  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .container {
    height: 100%;
  }
  
  .row {
    display: flex;
    justify-content: space-evenly;
  }
  
  .span {
    width: 100%;
    color: black;
  }
  
  .list-group-item {
    padding: 0px;
  }
    
  .employee-info {
    list-style: none;
    padding-left: none;
  }
  `;
};


module.exports = generateCSS;