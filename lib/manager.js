const { off } = require('process');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, emali);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Manager;