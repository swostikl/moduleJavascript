let result = 6

function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
    const rolls = [];
    let roll;
    do {
        roll = dice();
        rolls.push(roll);
        console.log(`Rolled: ${roll}`);
    } while (roll !== result);
    console.log(rolls)
}
rollUntilSix();