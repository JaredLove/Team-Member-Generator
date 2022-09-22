// importing Employee 
const Employee = require("./emp");


// engineer constructor extends employee constructor 
class Engineer extends Employee {

    constructor (name, id, email, github) {

        // calling employee constructor 

        super (name, id, email);


        this.github = github;

    }

    // return github 

    getGithub () {

        return this.github;

    }

     //role to engineer

    getRole () {

        return "Engineer";

    }

}

// to be exported 
module.exports = Engineer; 