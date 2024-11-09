'use strict'
const name = prompt(" Enter the student name");
const room = Math.floor(Math.random() * 4) + 1;
if (room === 1) {
    document.write(name + ' you are Gryffindor.');
} else {
    if (room === 2) {
        document.write(name + ' you are Slytherin.');
    } else {
        if (room === 3) {
            document.write(name + ' you are Hufflepuff.');
        } else {
            if (room === 4) {

                document.write(name + ' you are Ravenclaw.');
            }
        }
    }
}