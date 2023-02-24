const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUPUT_DIR, 'team.html')
const generateTeam = require('./src/template.js');
const { create } = require('domain');

teamArray = [];

function App () {
    function createTeam () {
        inquirer.prompt([{
            type: 'list',
            message: 'What kind of employee would you like to add to your team today?',
            name: 'addEmployeePrompt',
            choices: ['Manager', 'Engineer', "Intern", "All finished!"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt){
                case 'Manager':
                    addManager();
                    break;
                case 'Enigineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    htmlBuilder()
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What is the name of the Engineer?"
            },

            {
                type: "input",
                name: "engineerID",
                message: "What is the employee ID for this Engineer?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email adress?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Github username for this enigneer?"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    function addIntern () {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "What is the name of the Intern?"
            },

            {
                type: "input",
                name: "internID",
                message: "What is the ID number for this intern?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does this intern attend?"
            }

        ]).then(answers => {
            const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern); //pushes responses to the array we set up on line 13
            createTeam();
        });


    }

    function addManager() {
        inquirer.prompt ([

            {
                type: "input",
                name: "managerName",
                message: "What is the name of the Manager?"
            },

            {
                type: "input",
                name: "managerID",
                message: "What is the employee ID for this Manager?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is this Manager's email?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }


    function htmlBuilder () {
        console.log("Your new team has been created!")

        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }

    createTeam();

}

App();