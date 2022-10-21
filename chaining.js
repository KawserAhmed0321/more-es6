//declare variable base on the name of an object property
 const myObject={x:2,y:3,z:40,a:1,b:12,c:90};

 const{x,b}=myObject;
 console.log(x);

 //destructuring array

 const [p,q]=[12,13];
 console.log(p,q);

 //chaining 
const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuska' },
    web: {
        work: 'web-site', empoly: 22, farmwork: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
console.log(company?.web?.empoly?.first?.work);