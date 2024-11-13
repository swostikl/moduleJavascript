'use strict'
const int1 = prompt("Enter the 1st integer :");
const int2 = prompt("Enter a 2nd integer");
const int3 = prompt("Enter a 3rd integer");

const a = parseInt(int1);
const b = parseInt(int2);
const c = parseInt(int3);
const sum = a + b + c;
const product = a * b * c;
const average = (a + b + c) / 3;
{
    document.write(`Sum: ${sum}, Product: ${product} , Average:${average}`);
}
