class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id; 
    this.email = email;

    this.role = 'Employee';
  }

    
  getName() {
      return this.name = name; 
    
  };
  
  getId() {
      return this.id = id;
  };

  getEmail() {
      return this.email = email;
  };

  getRole() {
      return this.role;
  };

};

module.exports = Employee;