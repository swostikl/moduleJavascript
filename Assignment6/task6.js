'use strict'
const print = confirm('Should I calculate the square root?');
if (print) {
        const number = parseInt(prompt('Enter a number :'));
        if (isNaN(number)) {
            document.write('Invalid input! Enter valid number');
        } else if (number < 0) {
            document.write('Square root of negative number is not defined.');
        } else{
            const square_root = Math.sqrt(number);
            {
                document.write('The square root is : ' + square_root);
            }
        }

}else{
    document.write('Square root is not calculated.')
}