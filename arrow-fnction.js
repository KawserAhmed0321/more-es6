//function declearation
function add(num1,num2){
    return num1+num2;
}

//fuction expression
const add2=function add2(num1,num2)
{
    return num1+num2;
}


//fuction expression (annonymous)
const add3 = function(num1, num2) {
    return num1 + num2;
}

const sum3 = add3(11, 11);
console.log(sum3);



//fuction expression
const sum2=add2(10,10);
console.log(sum2);
const sum1=add(12,18);
console.log(sum1);

//arrow function
const add4=(num1,num2)=>num1+num2;
const sum4 = add4(2, 1);
console.log(sum4);