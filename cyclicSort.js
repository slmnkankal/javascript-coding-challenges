// Coderbyte https://www.youtube.com/watch?v=TLiWieBQwUs
// numbers in range 1...n

function cyclicSort (arr) {

    let i = 0;

    while (i < arr.length) {

        const toSort = arr[i]
        const newSpot = toSort - 1

        // check that they are not already sorted
        if (toSort !== arr[newSpot]) {
            // swap en
            const swapWith = arr[newSpot]
            arr[newSpot] = toSort
            arr[i] = swapWith
        } else {
            // increment i until you find unsorted numbers
            i++
        }
    }

    return arr

}

console.log(cyclicSort([3, 1, 5, 4, 2])) // [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])) // [1, 2, 3, 4, 5, 6]
console.log(cyclicSort([1, 5, 6, 4, 3, 2])) // [1, 2, 3, 4, 5, 6]