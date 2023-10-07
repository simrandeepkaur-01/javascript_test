/* Q. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
 get(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }*/

function arrtoObj(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++;
        } else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, {});
}

/* Q. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
[1, [2, 3]]
2 elements, number 1 and array [2, 3] */

function arrayDepth(arr) {
    return arr.flat(Infinity);
}


/* Q. Given a word, create an object that stores the indexes of each letter in an array.
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] } */

function str(val) {
    let value = val.split('');
    return value.reduce((accumulator, currentValue, index) => {
        if (accumulator[currentValue]) {
            accumulator[currentValue].push(index);
        } else {
            accumulator[currentValue] = [index];
        }
        return accumulator;
    }, {});
}
console.log(str('dodo'));
console.log(str('froggy'));
console.log(str('grapes'));


// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

function mostExpensiveJewellery(mostExpensive) {

    let highestprice = 0;
    let jewelleryName = '';

    for (let jewellery in mostExpensive) {

        if (mostExpensive[jewellery] > highestprice) {
            highestprice = mostExpensive[jewellery];
            jewelleryName = jewellery;
        }
    }
    return `The most expensive one is the ${jewelleryName}`
}

let mostExpensive = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
};

let result = mostExpensiveJewellery(mostExpensive);
console.log(result);



// Q. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

function sum(val) {
    let sumOfDigits = val.reduce((accum, currentVal) => accum + currentVal, 0);
    // console.log(sumOfDigits);

    let sum = sumOfDigits;

    while (sum >= 10) {
        let stringToArray = Array.from(String(sum), Number);
        // console.log(stringToArray);

        sum = stringToArray.reduce((accum, currentVal) => accum * currentVal, 1)
    }

    return sum;

}
const result2 = sum([16, 28]);
console.log(result2)



// Q. Create a function that takes an array of names in the format "First Name Last Name" (e.g. "SIMRAN kAUR"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name

let person = [
    {
        firstName: 'John',
        lastName: 'Doe'
    }, {
        firstName: 'Steve',
        lastName: 'Jobs'
    }, {
        firstName: 'Michael',
        lastName: 'Jordan'
    }, {
        firstName: 'Bill',
        lastName: 'Gates'
    }, {
        firstName: 'Henry',
        lastName: 'Ford'
    }, {
        firstName: 'Will',
        lastName: 'Smith'
    }
];

let sortFun = function () {
    let sortedNames = person.sort(function (a, b) {
        // sort by length
        let lengthComparison = a.lastName.length - b.lastName.length;

        if (lengthComparison === 0) {
            // sort alphabetically
            return a.lastName.localeCompare(b.lastName)
        }
        return lengthComparison

    })
    console.log(sortedNames);
}
sortFun();