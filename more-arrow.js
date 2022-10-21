const add=(num1,num2)=>num1+num2;
const sum = add(1, 2);


const multiply=(num1,num2,num3)=>num1*num2*num3;
const result=multiply(4,12,2);

const fivetime=(num)=>num*5;
const output=fivetime(10);

const getName=()=>'anita';
const name=getName();

const doMath=(x,y)=>{
    const sum=x+y;
    const sub=x-y;
    const result=sum*sub;
    return result;
}
 
const total1=doMath(5,3)
console.log(total1);