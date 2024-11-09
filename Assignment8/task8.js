'use strict'
const start_year = parseInt(prompt('Enter a start year :'))
const end_year = parseInt(prompt('Enter a end year :'))
if (isNaN(start_year) || isNaN(end_year) || start_year > end_year) {
    document.write('Invalid Input! Enter valid years.')
} else {
    let leapYearList = '<ul>';
    for (let year = start_year; year <= end_year; year++) {
        // Check if the current year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYearList += `<li>${year}</li>`;
        }
    }

    leapYearList += "</ul>";
    document.write(leapYearList);

}