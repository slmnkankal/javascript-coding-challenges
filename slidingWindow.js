//Sliging Window Algorithm

function maxSumArr(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;

    for(let i = 0; i < num; i++) {
       tempSum += arr[i];
    }
    maxSum = tempSum;

    for(let i = num; i < arr.length; i++) {
       tempSum = tempSum - arr[i- num] + arr[i];
       maxSum = Math.max(tempSum, maxSum);
       }      
       return maxSum;
}

let array = [16, 12, 9, 19, 11, 8];
let number = 3;

console.log(maxSumArr(array, number))

let arrayTwo = [12, 24, 16, 6, 42, 50];
let numberTwo = 2;

console.log(maxSumArr(arrayTwo, numberTwo))

