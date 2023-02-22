const Employee = require("./Employee") //this enables us to bring in the employee.js file to build off of

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;