'use strict'
const year = parseInt(prompt('Enter a year: '));
if ((year % 4 === 0) && (year % 100 !== 0) || year % 400 === 0) {
    document.write(year + ' is Leap year!')
} else {
    document.write(year + " is not a leap year!")
}