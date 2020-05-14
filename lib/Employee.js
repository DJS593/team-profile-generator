


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
    
Employee.prototype.getName = function() {
  return {
    potions: this.name
    
  };
};
  
Employee.prototype.getID = function() {
  
};

Employee.prototype.getEmail = function() {
  return `${this.name}'s email is ${this.email}!`;
};

Employee.prototype.getRole = function() {

};

  

module.exports = Employee;