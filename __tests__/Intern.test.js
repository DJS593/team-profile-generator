const Intern = require('../lib/Intern');

// test for the Intern object
test ('creates an Intern object', () => {
  const intern = new Intern('David', 1, 'david@gmail.com');

  expect(intern.name).toBe('David');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
});

// testing that the school is being passed correctly via this.school
test ('Intern school is provided', () => {
  const testSchool = 'OSU';
  const david = new Intern('David', 1, 'david@gmail.com', testSchool);
  expect(david.school).toBe(testSchool);
});

// test that the getSchool() method is providing the correct school
test ("getSchool() will provide the Intern's school", () => {
  const testSchool = 'OSU';
  const david = new Intern('David', 1, 'david@gmail.com', testSchool);
  expect(david.getSchool()).toBe(testSchool);
});

// test that the getRole() method is producing the correct role
test ('getRole() will return the role Intern', () => {
  const testRole = 'Intern';
  const david = new Intern('david', 1, 'david@gmail.com', 'OSU');
  expect(david.getRole()).toBe(testRole);
});

