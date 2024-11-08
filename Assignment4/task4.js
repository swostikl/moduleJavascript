'use strict'
const name = prompt(" Enter the student name");
const room = Math.floor(Math.random() * 4) + 1;
if (room === 1) {
    alert(name + ' you are Gryffindor.');
} else {
    if (room === 2) {
        alert(name + ' you are Slytherin.');
    } else {
        if (room === 3) {
            alert(name + ' you are Hufflepuff.');
        } else {
            if (room===4){

            alert(name + ' you are Ravenclaw.');
            }
        }
    }
}