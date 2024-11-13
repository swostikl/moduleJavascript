'use strict'
const num = parseInt(prompt('Enter an integer :'));
if (isNaN(num) || (num <= 1)) {
    document.write(num + ' is not a prime number');
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(num + ' is a prime number');
    } else {
        document.write(num + ' is not a prime number');
    }
}