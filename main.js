let userInput = 10

let printFibonacci = (userInput) => {
    let [r, base, next] = [0, 0, 1];
    console.log(`Printing the first ${userInput} Fibonacci Numbers.`);
    console.log(base);
    console.log(next);

    for (let i = 2; i < userInput; i++) {
        r = base + next;
        console.log(r);
        base = next;
        next = r
    }

    console.log("Done");
}

printFibonacci(userInput);