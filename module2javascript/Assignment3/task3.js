'use strict'
    const dogNames=[]
    for (let i=0; i<6; i++){
        let names=prompt(`Enter a dog name ${i + 1}`);
        if(names){
            dogNames.push(names)
        }else{
            alert("Invalid input, enter correct input");
            i--;
        }
    }

// sorting names in reverse alphabetical order
dogNames.sort().reverse()
    let output="<ul>"
    for (let names of dogNames) {
        output +=`<li>${names}</li>`;
    }
    output+="<ul";
    document.body.innerHTML=output;