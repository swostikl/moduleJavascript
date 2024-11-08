'use strict'
const year = parseInt(prompt('Enter a year: '));
if ((year % 4 === 0) && (year % 100 !== 0) || year % 400 === 0) {
    alert(year + ' is Leap year!')
} else {
    alert(year + " is not a leap year!")
}