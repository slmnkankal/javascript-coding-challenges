// Coderbyte https://www.youtube.com/watch?v=SJRaMCSgNWQ

function findUltimateOne(num) {
    let slowPointer = num,
    fastPointer = num

// is there a cycle?
// slowPointer === fastPointer
// return false

// if ther isn't a cycle?
// either slowPointer or fastPointer === 1

while (true) {
    slowPointer = findSquareSum(slowPointer)
    fastPointer = findSquareSum(findSquareSum(fastPointer))

    if (slowPointer === fastPointer) return false

    if (slowPointer === 1 || fastPointer === 1 ) {
        return true
    }
}



}

function findSquareSum(num) {
    let sum = 0

    while (num > 0) {
        digit = num % 10
        sum += digit * digit
        num = Math.floor(num / 10)
    }

    return sum
}


console.log(findUltimateOne(23)) // true
console.log(findUltimateOne(12)) // false