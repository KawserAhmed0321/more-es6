const  x=[1,2,3,4];
const output=x.map(x=>x+1);
//console.log(output);


const names=['anita','banita','fanita','sanita'];
const fanita=names.map(name=>name.length);
//console.log(fanita);

const products=[
    {name:'water-bottle',price:40,color:'red'},
    {name:'mobile',price:40,color:'red'},
    {name:'watch',price:40,color:'red'},
    {name:'note',price:40,color:'red'},
    {name:'glass',price:40,color:'red'}
]
const productName=products.map(product=>product.name);
const productprice=products.map(product=>product.price);
console.log(productprice);