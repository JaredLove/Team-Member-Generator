// using Intern constructor 
const Intern = require('../lib/intern');

// creating intern object  
test('create Intern', () => {
    const intern = new Employee('Jay', 10, 'lovejared91@yahoo.com', 'UTSA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets school', () => {
    const intern = new Employee('Jay', 10, 'lovejared91@yahoo.com', 'UTSA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role', () => {
    const intern = new Employee('Jay', 10, 'lovejared91@yahoo.com', 'UTSA');

    expect(intern.getRole()).toEqual("Intern");
}); 