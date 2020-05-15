


class Employee {
    constructor (name, id) {
    this.name = name;
    this.id = id; 
    this.email = (name + '@fakemail.com');
  }
    
  getName() {
    return {
      potions: this.name  
    };
  };
  
  getID() {
  
  };

  getEmail() {
    return `${this.name}'s email is ${this.email}!`;
  };

  getRole() {
    // returns 'employee'
  };

};

module.exports = Employee;