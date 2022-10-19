// Coderbyte https://www.youtube.com/watch?v=TLiWieBQwUs
// numbers in range 1...n

function cyclicSort(arr) {
  let i = 0;

  while (i < arr.length) {
    const toSort = arr[i];
    const newSpot = toSort - 1;

    // check that they are not already sorted
    if (toSort !== arr[newSpot]) {
      // swap en
      const swapWith = arr[newSpot];
      arr[newSpot] = toSort;
      arr[i] = swapWith;
    } else {
      // increment i until you find unsorted numbers
      i++;
    }
  }

  return arr;
}

console.log(cyclicSort([3, 1, 5, 4, 2])); // [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])); // [1, 2, 3, 4, 5, 6]
console.log(cyclicSort([1, 5, 6, 4, 3, 2])); // [1, 2, 3, 4, 5, 6]

// Find missing number coding challenge
// Coderbyte https://www.youtube.com/watch?v=QSFzQ9y-Ecg&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=15
// numbers in range 0...n

function findMissingNumber(array) {
  let i = 0;

while (i < array.length) {
    const newSpott = array[i];
    // swap the elements
    if (newSpott !== i && newSpott < array.length) {
      const toSwap = array[newSpott];
      array[newSpott] = newSpott;
      array[i] = toSwap;
    } else {
      // or increment i
      i++;
    }
}
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== j) {
        return j;
      }
    }

    return array.length;
    
}

console.log(findMissingNumber([4, 0, 3, 1])); // 2
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 1, 0])); // 7
console.log(findMissingNumber([3, 5, 2, 6, 0, 1])); // 4
console.log(findMissingNumber([3, 5, 2, 4, 0, 1])); // 6
