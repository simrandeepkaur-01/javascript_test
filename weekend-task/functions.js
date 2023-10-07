/* Q1: Create a function that will work as the modulus operator % without using the modulus operator.The modulus operator
  is a way to determine the remainder of a division operation.Instead of returning the result of the division, the modulo 
  operation returns the whole number remainder. */


function modulus(dividend, divisor) {

    for (let i = 1; i <= 100; i++) {
        let arrOfTable = divisor * i;

        if (arrOfTable > dividend) {
            let previousValue = arrOfTable - divisor;
            return dividend - previousValue;
        }
    }
}
console.log(modulus(5, 3));


/* Q2: Create a function that takes three collections of arguments and returns the sum of the product of numbers.
 Add the result of the first digit in each collection multiplied together to the result of the second digit in each
  collection multiplied together to get the final solution.*/

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3.

function outer(a1, b1) {
    return function inner(a2, b2) {
        return function innerMost(a3, b3) {
            return a1 * a2 * a3 + b1 * b2 * b3;
        }
    }
}
console.log(outer(1, 2)(1, 1)(2, 3));


/* Q3: Create a function which takes an array arr of integers as an argument. This function must return another function,
 which takes a single integer as an argument and returns a new array. */

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples: 
// multiply([4, 6, 5])(10) ➞ [40, 60, 50]

function product(arr) {
    return function multiple(multipleVal) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * multipleVal;
        }
        return arr;
    }
}
console.log(product([4, 6, 5])(10));

/* Q4: Create a function which takes a parameter n and returns a function such that it, when called n times, returns 
the string "HelloWorld". */


function first(number) {

    if (isNaN(number) || number < 0) {
        return 'Enter a Positive Integer.';
    }

    lambdaDepth();
    return function second() {
        lambdaDepth();
        return function third() {
            return second();
        }
    }
}

function lambdaDepth() {
    return console.log('Hello World');
}

console.log(typeof (first(5)()));