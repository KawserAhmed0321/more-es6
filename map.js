const numbers=[4,6,70,81];
const output2=[];


// function dobleold(num)
// {
//     return num*2;
// }

const doubleIt=(num)=>num*2;


// for(const number of numbers)
// {
//     //const result=number*2;
//     const result=doubleIt(number);
//     output2.push(result);
// }
//console.log(output);

// 1.loop 
// 2.element deya function call korsi 
// 3.result array ty push korsi


const output=numbers.map(x=>x*2);

const squere=numbers.map(x=>x*x);

console.log(output,squere);