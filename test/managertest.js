// using Manager constructor 
const Manager = require('../lib/manager');

// creating manager object  
test('create manager', () => {
    const manager = new Manager('Jay', 10, 'lovejared91@yahoo.com');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role', () => {
    const manager = new Manager('Jay', 10, 'lovejared91@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 