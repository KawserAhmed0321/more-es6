const numbers=[12,1,3,5,6,22,23,45,67];
const bignumber=numbers.filter(number=>number >20);
//console.log(bignumber);

const smallnumber=numbers.filter(number=>number <10);
//console.log(smallnumber)

const products = [
    { name: 'water-bottle', price: 140, color: 'red' },
    { name: 'mobile', price: 240, color: 'red' },
    { name: 'watch', price: 40, color: 'red' },
    { name: 'note', price: 430, color: 'black' },
    { name: 'glass', price: 440, color: 'pink' }
]

const price=products.filter(product=>product.price > 400);
console.log(price);