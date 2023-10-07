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

// let arr = [12, 1, 2, 44, 3, 8];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         // console.log(`i is : ${i}`);
//         // console.log(`j is : ${j}`);
//         if (arr[i] > arr[j]) {
//             console.log(arr[j]);
//             let swap = arr[i];
//             arr[i] = arr[j];
//             arr[j] = swap;
//         }
//     }
// }