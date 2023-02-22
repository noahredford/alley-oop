const Employee = require('./Employee') //Imports employee.js

class Intern extends Employee {
    constructor(name, email, id, school) {
    super (name, email, id);  //super - imports the name, id, and email fields we set in employee
    this.school = school;
}

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;
