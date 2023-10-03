// Q 1. Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".firstRepeat("Isildur") ➞ "-1"
 //Case sensitive "I" not equal to "i"

function firstRepeat(val) {
    let str = {};

    for (i = 0; i < val.length; i++) {
        let char = val[i];

        if (str[char]) {
            return char;
        };

        str[char] = true;
    }
    return -1;
}
console.log(firstRepeat('Isildur'));


// Q 2. JavaScript Program to Check Whether a Number is Palindrome or Not? Using operators

function palindrome(num) {
    let numToCheck = String(num);

    let reversedNum = numToCheck.split('').reverse().join('');

    if (numToCheck === reversedNum) {
        console.log('Value is Palindrome');
    } else {
        console.log('Entered value is not Palindrome');
    }
}

palindrome(123454321);


// Q 3. JavaScript Program to Check Whether a Number is Armstrong or Not? Using operators.

let num = 153;
let numToStr = String(num);
let numCount = numToStr.split('').length;
sum = 0;

for (i = 0; i < numToStr.length; i++) {
    sum += numToStr[i] ** numCount;
}

if (num === sum) {
    console.log(`${num} is an Armstrong Number`);
} else {
    console.log(`${num} is not an Armstrong Number`);
}


// Q 4.Write a single line of code using the ternary operator to check if a variable value is defined(not undefined)
//  and has a truthy value.If it does, store the result in a variable 'isValid'.

let a = 5;
let isValid = a ? a : undefined;

console.log(isValid);


// Q 5. Write a code to swap the values of two variables a and b without using a temporary variable.
let x = 10;
let y = 5;

// [x,y] = [y,x];
console.log(x, y);


// Q 6. Write a function that checks if a given year is a leap year (divisible by 4 and not divisible by 100,
// except when it's divisible by 400) using only relational operators.

function year(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("It's a Leap Year");
        return false;
    }
    console.log("It's not a Leap Year");
    return;
}

year(2020);
