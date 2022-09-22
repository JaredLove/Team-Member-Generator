class Emp {
    constructor (name, id, email) {

        this.name = name;

        this.id = id;

        this.email = email 

    }

    
    // return name

    getName () {

        return this.name;

    }

    
    // return ID 

    getId () {

        return this.id;

    }   


    // return email 

    getEmail () {

        return this.email;

    }

    
    // return type 

    getRole () {

        return 'Employee'; 

    }
};

// to be exported 
module.exports = Emp; 