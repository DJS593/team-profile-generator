const Manager = require("../lib/Manager");


// test for the Manager object
test ('creates an Manager object', () => {
  const manager = new Manager ('David', 1, "david@gmail.com");

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
});

// test that the office number is being correctly passed to the constructor function
test ('Office number is being passed as an argument', () => {
  const testOfficeNumber = 20;
  const david = new Manager('David', 1, 'david@gmail.com', testOfficeNumber);
  expect(david.officeNumber).toBe(testOfficeNumber);
});

// test that the getOffice() method provides the manager's office number
test('getOffice() will provide the manager offic number', () => {
  const testOfficeNumber = 20;
  const david = new Manager('david', 1, 'david@gmail.com', testOfficeNumber);
  expect(david.getOfficeNumber()).toBe(testOfficeNumber);
});


// Test that getRole() method is providing the correct role
test('getRole() will provide manager', () => {
  const testRole = 'Manager';
  const david = new Manager('David', 1, 'david@gmail.com', 20);
  expect(david.getRole()).toBe(testRole);
});

