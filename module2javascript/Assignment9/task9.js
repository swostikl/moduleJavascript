function even(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}
const originalArray = [2, 7, 4];
const evenArray = even(originalArray);
console.log("Original array:",originalArray);
console.log("Array of even numbers:",evenArray);