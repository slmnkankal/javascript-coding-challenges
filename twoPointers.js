// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.
// Given array must be sorted.

function isPairSum(A, N, X)
{
    // represents first pointer
    var i = 0;
 
    // represents second pointer
    var j = N - 1;
 
    while (i < j) {
 
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
 
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
 
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}
 
    // array declaration
    var arr = [ 2, 3, 5, 8, 9, 10, 11 ];
     
    // value to search
    var val = 17;
     
    // size of the array
    var arrSize =7;
     
    // Function call
    document.write("arr: ",isPairSum(arr, arrSize, val));
    // returns true on screen

    var arrTwo = [ 4, 8, 9, 13, 15, 18];
    var valTwo = 14;
    var arrTwoSize = 6;
    document.write("--arrTwo: ",isPairSum(arrTwo, arrTwoSize, valTwo));
    // returns false on screen
