'use strict'
document.addEventListener("DOMContentLoaded",()=>{
    const operation=document.getElementById("calculation");
    const calculate=document.getElementById("start");
    const resultParagraph=document.getElementById("result");

    calculate.addEventListener("click",()=>{
        const calculation=operation.value.trim();
        let result;

        if(calculation.includes("+")){
            const[num1,num2]=calculation.split("+").map(Number);
            result= num1 + num2;
        }else if (calculation.includes("-")){
            const[num1,num2]=calculation.split("-").map(Number);
            result=num1-num2;
        }else if (calculation.includes("*")){
            const[num1,num2]=calculation.split("*").map(Number);
            result=num1 * num2 ;
        }else if (calculation.includes("/")){
            const[num1,num2]=calculation.split("/").map(Number);
            if(num2!==0){
                result=num1/num2;
            }else {
                result="can not divided by zero";
            }
        }else {
            result="invalid calculation";
        }
        resultParagraph.textContent=`Result: ${result}`;
    })
});