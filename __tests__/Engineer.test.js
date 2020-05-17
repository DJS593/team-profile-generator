const Engineer = require('../lib/Engineer');

// test for the Engineer object
test ('creates an Engineer object', () => {
  const engineer = new Engineer ('David', 1, "david@gmail.com");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

// test that getGithub() returns the github username of the engineer
test ('GetGithub() will provide the GitHub username', () => {
  const testGithub = 'GitHubUsername';
  const david = new Engineer('David', 1, 'david@gmail.com', testGithub);
  expect(david.getGithub()).toBe(testGithub);
});

// test ("getRole() will return the role "Engineer"

test ('getRole() will return Engineer', () => {
  const testRole = 'Engineer';
  const david = new Engineer('David', 1, 'david@gmail.com', 'GitHubUsername');
  expect(david.getRole()).toBe(testRole);
});