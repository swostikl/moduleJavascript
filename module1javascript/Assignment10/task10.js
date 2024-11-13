'use strict'

function diceRoll(numberDice) {
    let sum = 0;
    for (let i = 0; i < numberDice; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    return sum;
}

function calculateProbability() {
    const numberDice = parseInt(document.getElementById('numberDice').value);
    const sumEyes = parseInt(document.getElementById('sumEyes').value);
    const numSimulations = 10000;
    let count = 0;

    for (let i = 0; i < numSimulations; i++) {
        if (diceRoll(numberDice) === sumEyes) {
            count++;
        }
    }
    const probability = (count / numSimulations) * 100;
    document.getElementById('result').innerHTML = `Probability to get sum ${sumEyes} with ${numberDice} dice is ${probability.toFixed(2)}%`;
}