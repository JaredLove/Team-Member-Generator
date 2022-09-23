// importing Employee constructor 
const Employee = require('./emp');
//library for intern

// intern constructor extends employee constructor 
class Intern extends Employee  {

    constructor (name, id, email, school) {

        // calling employee constructor

        super (name, id, email); 

        this.school = school; 

    }

    // returning school from input 

    getSchool () {

        return this.school;

    }

    //role to intern

    getRole () {

        return "Intern";

    }
}

// to be exported 
module.exports = Intern; 