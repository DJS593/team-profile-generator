const Employee = require('../lib/Employee.js');


// test for the Employee object
test ('creates an Employee object', () => {
  const employee = new Employee('David', 1);

  expect(employee.name).toBe('David');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});


// test for getName()

test ("get employee's name", () => {
  const employee = new Employee('David');

  expect(employee.getName()).toHaveProperty(name);
  // not sure I need to add the 'name' property 

});