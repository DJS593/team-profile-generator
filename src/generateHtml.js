const cssAttributes = require('./generateCss.js');

const teamComplete = employeeArray => {
  console.log(employeeArray);
}

// pull in the data for generator.html
  
// const teamComplete = employeeArray => {
//   console.log(employeeArray);

//   //let { name, id, email, office } = employeeArray[0];
  
  
  
//   // generator.html file structure and linked data

//   return `
// <!DOCTYPE html>  
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//     />
//     <link
//       rel="stylesheet"
//       href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//       crossorigin="anonymous"
//     />
//     <link
//       href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
//     <link rel="stylesheet" href="./random.css" />
//   <title>Team Generator</title>
// </head>
// <body>
//   <header class="header" id="header">
//     <h1 class="header-title">My Team</h1>
//   </header>

//   <main class="main-container">
//     <div class="container">
//       <div class="row">
        
//         <!-- Manager Card -->
//         <div class="card-deck col-4">
//           <div class="card text-white bg-primary">
//             <div class="card-body employee-info">
//               <h5 class="card-title name"></h5>
//               <p class="card-text role">insert manager role</p>
//               <p class="card-text id">insert manager id</p>
//               <p class="card-text email">insert manager email</p>
//               <p class="card-text other">insert manager office number</p>
//             </div>
//           </div>
//         </div>
        
//         <!-- Employee Card (Engineer or Intern) -->
//         <div class="card-deck col-4">
//           <div class="card text-white bg-primary">
//             <div class="card-body employee-info">
//               <h5 class="card-title name">David Stahl</h5>
//               <p class="card-text role">Role</p>
//               <p class="card-text id">ID</p>
//               <p class="card-text email">Email</p>
//               <p class="card-text other">Other</p>
//             </div>
//           </div>
//         </div>

//         <!-- Employee Card (Engineer or Intern) -->
//         <div class="card-deck col-4">
//           <div class="card text-white bg-primary">
//             <div class="card-body employee-info">
//               <h5 class="card-title name">David Stahl</h5>
//               <p class="card-text role">Role</p>
//               <p class="card-text id">ID</p>
//               <p class="card-text email">Email</p>
//               <p class="card-text other">Other</p>
//             </div>
//           </div>
//         </div>
        
//         <!-- Employee Card (Engineer or Intern) -->
//         <div class="card-deck col-4">
//           <div class="card text-white bg-primary">
//             <div class="card-body employee-info">
//               <h5 class="card-title name">David Stahl</h5>
//               <p class="card-text role">Role</p>
//               <p class="card-text id">ID</p>
//               <p class="card-text email">Email</p>
//               <p class="card-text other">Other</p>
//             </div>
//           </div>
//         </div>
        
//         <!-- Employee Card (Engineer or Intern) -->
//         <div class="card-deck col-4">
//           <div class="card text-white bg-primary">
//             <div class="card-body employee-info">
//               <h5 class="card-title name">David Stahl</h5>
//               <p class="card-text role">Role</p>
//               <p class="card-text id">ID</p>
//               <p class="card-text email">Email</p>
//               <p class="card-text other">Other</p>
//             </div>
//           </div>
//         </div>      
        
//       </div>
//     </div>
    
//   </main>
  
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
//   <script src="https://code.iconify.design/1/1.0.5/iconify.min.js"></script>
//   <script src="../index.js"></script>
// </body>
// </html>
  
//   `;
// };

const teamComplete = employeeArray => {
  console.log(employeeArray);
      
//   const htmlArray = []
//   const htmlBeginning = `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Team Roster</title>
//   <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
//   <style>
//    ${cssAttributes}
//   </style>
// </head>
// <body>
//   <div class="banner-bar">
//       <h1>Team Roster</h1>
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
}

module.exports = teamComplete;