const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUPUT_DIR, team.html)
const generateTeam = require('./src/template.js')

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
}