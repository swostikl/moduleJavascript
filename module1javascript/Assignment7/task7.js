'use strict'
const dice_roll = parseInt(prompt('Enter the number of dice roll:'));
let sum = 0;
for (let i = 0; i < dice_roll; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll
}
console.log('The number of dice rolls is ' + dice_roll);
console.log('Sum of dice rolls is ' + sum)