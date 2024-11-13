'use strict'
    const participate = parseInt(prompt("Enter number of participates : "));
    const names=[]
    for (let i = 0; i < participate; i++) {
        names.push(`<li>${prompt("Enter a user name : ")} </li>`)
    }
    // sorting names in alphabetical order
    names.sort()
    // printing names is ordered list
    document.write(`<ol>${names.join('\n')} </ol>`);