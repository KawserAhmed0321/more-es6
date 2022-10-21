class Team {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends Team {

    groupsupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupsupportTime = time;
    }

    startSession(name) {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare {
    name;
    designation = 'student care dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildAroutin(student) {
        console.log(this.name, 'Build a routin for', student);
    }
}




const ammir = new Support('ammir', 'nuyakhali', 11);
const anita = new Support('anita', 'borisal',112);
ammir.startSession()


const alia = new StudentCare('alia bart', 'mumbai');
console.log(ammir);