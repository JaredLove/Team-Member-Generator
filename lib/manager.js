// importing Employee constructor 
const Employee = require('./emp');

//library for manager
// manager constructor extends employee constructor 
class Manager extends Employee {
    
    constructor (name, id, email, officeNumber) {

        // calling employee constructor

        super (name, id, email); 

        
        this.officeNumber = officeNumber; 

    }

    //role to manager 

    getRole () {

        return "Manager";

    }
}

// to be exported 
module.exports = Manager; 