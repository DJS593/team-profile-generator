class Employee {
    constructor (name, id) {
    this.name = name;
    this.id = id; 
    this.email = (name + '@fakemail.com');
  }
    
  getName() {
      this.name = name; 
    
  };
  
  getID() {
      this.id = id;
  };

  getEmail() {
      this.email = (name + '@fakemail.com');
  };

  getRole() {
      // returns 'employee'
  };

};

module.exports = Employee;