// using Engineer constructor 
const Engineer = require('../lib/eng');

// creating engineer object  
test('create engineer', () => {
    const engineer = new Employee('Jay', 10, 'lovejared91@yahoo.com');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets github', () => {
    const engineer = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role', () => {
    const engineer = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(engineer.getRole()).toEqual("Engineer");
});