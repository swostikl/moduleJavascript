'use strict'
// get number of candidates
const can_number = parseInt(prompt("Enter a number of candidates"));
const candidate_names = []
// get candidate name and initialize their vote count
for (let i = 0; i < can_number; i++) {
    const name = prompt(`Name for candidate${i + 1}`);
    candidate_names.push({
        name: name,
        votes: 0
    });
}
const vote_num = parseInt(prompt("Enter number of voters:"));
for (let j = 0; j < vote_num; j++) {
    const vote = prompt(`Vote${j + 1} , enter the name of candidate you vote`);
    if (vote.trim() !== "") {
        const candidate = candidate_names.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes += 1;
        } else {
            console.log(`Invalid vote"${vote}"`);
        }
    } else {
        console.log("Empty vote submitted");
    }
}
// sorting candidate by vote in desc order
candidate_names.sort((a, b) => b.votes - a.votes);
// winner
const winner = candidate_names[0];

// result announce
console.log((`winner is ${winner.name} with ${winner.votes} votes.`));
for (let i = 0; i < candidate_names.length; i++) {
    console.log(`${candidate_names[i].name}: ${candidate_names[i].votes}votes`)
}