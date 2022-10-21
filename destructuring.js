const fish={
    id:58,
    name:'king elish',
    price:800,
    phone:'0198765',
    addresh:'chanpur',
    dress:'silver'
};

//const{id,name,phone,addresh,dress}=fish;
//console.log(id);

const company={
    name:'gp',
    ceo:{id:1,name:'ajmol',food:'fuska'},
    web:{work:'web-site',empoly:22,        farmwork:'react',
        tech:{
            first:'html',
            second:'css',
            third:'js'
             }
}

};

const{name,ceo,web}=company;
const{id,food}=company.ceo;
const{work,empoly,farmwork}=company.web;
const{first,second,third}=company.web.tech;
console.log(work,farmwork,name,second);