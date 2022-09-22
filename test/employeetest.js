// using Employee constructor 
const Employee = require('../lib/emp');

// creates employee object 
test('create employee', () => {
    const employee = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets name', () => {
    const employee = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets ID', () => {
    const employee = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets email', () => {
    const employee = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role', () => {
    const employee = new Employee('Jay', 10, 'lovejared91@yahoo.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
