// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// links to generatemarkdown 
const generateMarkdown = require('./src/generatemarkdown');

// library for roles
const Manager = require('./lib/manager');
const Engineer = require('./lib/eng');
const Intern = require('./lib/intern'); 



// team array
const arrayT = []; 


const manager = () => {
    //promt for manager
    return inquirer.prompt ([
        {
              //name
            type: 'input',
            name: 'name',
            message: 'Enter the manager of this team?', 
              //validate name
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            //id
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
            //validate id
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            //email 
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
            validate: email => {
                //validate email input
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email!')
                    return false; 
                }
            }
        },
        {
            //office
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
              //validate number using NaN
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        arrayT.push(manager); 
        console.log(manager); 
    })
};

const employ = () => {
//promt for employee
    return inquirer.prompt ([
        {
            //role
            type: 'list',
            name: 'role',
            message: "Choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            //name
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            //validate input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            //id
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
              //validate input
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            //email
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
              //validate input
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email!')
                    return false; 
                }
            }
        },
        {
            //github
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer",
              //validate input
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter the employee's github username!")
                }
            }
        },
        {
            //school
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
              //validate input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the intern's school!")
                }
            }
        },
        {
            //asking if they would like to add another member
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // employee types 


        let { name, id, email, role, github, school, add } = employeeData; 

        let employee; 


        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } 
        
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }


        
        arrayT.push(employee); 

        
        if (add) {
            return employ(arrayT); 
        } 
        else {
            return arrayT;
        }

    })

};


// function to write to HTML page
const writeFile = data => {

    fs.writeFile('./dist/index.html', data, err => {

        //error 

        if (err) {

            console.log(err);

            return;
        // HTML DONE 

        } else {
            console.log("Your team profile has been created!")
        }
    })
}; 
//starter
manager()
  .then(employ)
  .then(arrayT => {
    return generateMarkdown(arrayT);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });