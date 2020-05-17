const Employee = require('../lib/Employee.js');


// test for the Employee object
test ('creates an Employee object', () => {
  const employee = new Employee('David', 1, 'david@gmail.com');

  expect(employee.name).toBe('David');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test that "name" is passed correctly
test('Name passed into method will be produced', () => {
  const testName = 'David';
  const david = new Employee(testName);
  expect(david.name).toBe(testName);
});

// test that "id" is passed correctly
test('ID passed into method will be produced', () => {
  const testId = 1;
  const david = new Employee('David', testId, "david@gmail.com");
  expect(david.id).toBe(testId);
});

// test that "email" is passed correctly
test('Email passed into method will be produced', () => {
  const testEmail = 'david@gmail.com';
  const david = new Employee('David', 1, testEmail);
  expect(david.email).toBe(testEmail);
});

// test that getName() method will produce the name of the employee

// test('getName() will produce employee name', () => {
//   const testName = 'David';
//   const david = new Employee(testName, 1, 'david@gmail.com');
//   expect(david.getName()).toBe(testName);
// });

// test that getId() method is producing the correct employee ID number 

// test('getId() will produce the employee ID', () => {
//   const testId = 1;
//   const david = new Employee('David', testId, "david@gmail.com");
//   expect(david.getId()).toBe(testId);
// });

// Test that getEmail() method is producing the correct email

// test('getEmail() will produce the employee email', () => {
//   const testEmail = 'david@gmail.com';
//   const david = new Employee('David', 1, testEmail);
//   expect(david.getEmail()).toBe(testEmail);
// });

// Test that getRole() method is providing the correct role
test('getRole() will return Employee', () => {
  const testRole = 'Employee';
  const david = new Employee('David', 1, 'david@gmail.com');
  expect(david.getRole()).toBe(testRole);
});
