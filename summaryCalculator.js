// You are making a program to calculate the sum of any number of values.
// Complete the given function so that it takes as parameters as many numbers as needed and returns the sum.

// Use the rest parameter as an argument.

function Add(...args){
    let sum = 0;
    for (let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(Add(1,2,3));
console.log(Add(4,14,5,9,14));
console.log(Add(2,36));