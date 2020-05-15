class Intern extends Employee {
  constructor (school) {
  super (name, id);

  this.school = school;
}

  getSchool() {
    school = this.school;
  };

  getRole(intern) {
    role = intern.role;
    // this will not work

  };
};



module.exports = Intern;