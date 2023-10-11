// Factorial using recursion.

let factorial = function fac(n) {
    return n < 2 ? true : n * fac(n - 1);
}
console.log(factorial(5));


/* Write a JavaScript program to get integers in the range (x, y) using recursion.
 Example : range(2, 9)
 Expected Output : [3, 4, 5, 6, 7, 8] */

let arr = [];
let range = function rangeValues(x, y) {
    if (x === y - 1) {
        return;
    }
    arr.push(x + 1);
    rangeValues(x + 1, y);
    return arr;
}
console.log(range(2, 9));



/* Write a JavaScript program to compute the sum of an array of integers.
 Example : var array = [1, 2, 3, 4, 5, 6]
 Expected Output : 21 */

let sum = function sumValues(arr) {

    if (arr.length === 1) {
        return arr[0];
    }

    arr.splice(0, 2, arr[0] + arr[1]);
    return sumValues(arr);
}
console.log(sum([1, 2, 3, 4, 5, 6]));



/* Write a JavaScript program to check whether a number is even or not. */

function isEvenOrOdd(x) {
    if (x === 0) {
        return 'Given Number is Even.';
    } else if (x === 1) {
        return 'Given number is Odd.';
    }
    return isEvenOrOdd(x % 2);
}
console.log(isEvenOrOdd(15));