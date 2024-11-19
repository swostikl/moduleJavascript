function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
function rollMax(sides) {
    const rolls = [];
    let roll;
    do {
        roll = rollDice(sides);
        rolls.push(roll);
        console.log(`Rolled: ${roll}`);
    } while (roll !== sides);

    console.log("Final rolls:", rolls);
}
const sides = parseInt(prompt("Enter the number of sides on the dice:"));

if (sides > 0) {
    rollMax(sides);
} else {
    alert("Please enter a valid number for the number of sides.");
}