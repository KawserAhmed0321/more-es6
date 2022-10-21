function add(num1,num2 = 0)
{
    console.log(num1,num2);

    //option-1
    // if(num2==undefined)
    // {
    //     num2=0;
    // }

    // Option-2

    // num2=num2 || 0;
    const total = num1 + num2;
    return total;
}
const result=add(12);
console.log(result);