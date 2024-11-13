 const numbers = []
    // loop to prompt five numbers
    for (let i = 0; i < 5; i++) {
        let num = prompt(`Enter number ${i + 1}`);
        numbers.push(num);
        console.log(numbers[i])
    }
    // loop to print reverse order
    console.log("The numbers in reverse order : ");
    for (let i = numbers.length - 1; i >= 0; i--)
    {
        console.log(numbers[i])
    }


