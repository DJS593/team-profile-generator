// The generateCss.js file provides additonal CSS formatting for the HTML page

const styleSheet = 
  `
  html, body {
      max-width: 100% !important;
      overflow-x: hidden !important;
  }
  body {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .banner-bar {
      background-color: lightcoral;
      width: 100%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15vh;
  }
  h1 {
      font-family: source, sans-serif;
      font-size: 40px;
  }
  p {
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      left: 12px;
  }
  h2 {
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      font-size: 18px;
      left: 12px;
  }
  .member-card {
      width: 250px;
      height: 300px;
      margin-bottom: 20px;
      background-color: white;
      box-shadow: 2px 5px 5px black;
      border-radius: 10px;
  }
  .card-container {
      position: absolute;
      top: 25vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 60vw;
  }
  .card-top {
      background-color: lightcoral;
      border: 2px solid lightcoral;
      width: 246px;
      border-radius: 10px;
  }
  .card-bottom {
      display: flex;
      flex-direction: column;
      align-content: center;
      height: 70%;
  }
  `
  
module.exports = styleSheet;