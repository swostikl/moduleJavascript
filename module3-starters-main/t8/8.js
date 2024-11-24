'use strict'
document.addEventListener("DOMContentLoaded",()=>{
    const number1=document.getElementById("num1");
    const number2=document.getElementById("num2");
    const operationCalculate=document.getElementById("operation");
    const start=document.getElementById("start");
    const calculate=document.getElementById("result");

    start.addEventListener("click",()=>{
        const num1=parseFloat(number1.value);
        const num2=parseFloat(number2.value);
        const operation=operationCalculate.value
        let result;

        switch(operation){
            case 'add':
                result=num1+num2;
                break;
            case 'sub':
                result=num1-num2;
                break;
            case 'multi':
                result=num1*num2;
                break;
            case 'div':
                if(num2 !== 0){
                    result=num1/num2;
                }else {
                    result='cannot divide'
                }
                break;
            default:
                result="unknown operation";
                break;
        }
        calculate.textContent=`Result:${result}`

    })
});