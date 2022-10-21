class Support {
    name;
    designation = 'support web dev';
    address='BD';
    constructor(name,address)
    {
        this.name = name;
        this.address=address;
    }
    startSession(name) {
        console.log(this.name,'start a support session');
    }
}
const ammir = new Support('ammir', 'nuyakhali');
const anita=new Support('anita','borisal');
ammir.startSession()
//console.log(ammir,anita);