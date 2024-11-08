'use strict'
const print = prompt('Should I calculate the square root?(ok/cancel)');
switch (print) {
    case 'ok':
        const number = parseInt(prompt('Enter a number :'));
        if (isNaN(number)) {
            alert('Invalid input!, Enter valid number');
        } else if (number < 0) {
            alert('Square root of negative number is not defined.');
        } else {
            const square_root = Math.sqrt(number);
            {
                alert('The square root is : ' + square_root);
            }
        }
        break;
    case 'cancel':
        alert('The square root is not calculated.');
        break;
}