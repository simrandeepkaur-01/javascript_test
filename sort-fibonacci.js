// Fibonacci Series

function fibonacci(val) {
    let num1 = val;
    let num2 = val + 1;
    let num3 = num1 + num2;
    console.log(`${num1} \n${num2} \n${num3}`);

    for (let num1 = 0; num1 <= 100; num1++) {
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
        console.log(`${num3}`);
    }
}

fibonacci(0);


//Sort an array without using sort().

// let arr = [3, 1, 2];
// let newVal = [];

// for (let i = 0; i < arr.length; i++) {
//     values = (arr[i]);
//     console.log(values);

//     if (values > newVal) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }