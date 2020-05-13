


// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'




function Employee (name, id) {
    this.name = name;
    this.id = id; 
    this.email = (name + '@fakemail.com');

    this.getName = function () {
      return this.name;
      
    }

  }
    

  
//   getName() {
//     // if (this.health === 0) {
//     //   return false;
//     // }
//     // return true;
//   };

//   getID() {
//     //return `${this.name}'s health is now ${this.health}!`;
//   };

//   getEmail() {
  
//     retun `${this.name}'s email is ${this.email}!`;

//     //   const min = this.strength - 5;
//   // const max = this.strength + 5;

//   // return Math.floor(Math.random() * (max - min) + min);
//   };

//   getRole() {
//   //   this.health -= health;

//   // if (this.health < 0) {
//   //   this.health = 0;
//   // }
//   };

// };


module.exports = Employee;