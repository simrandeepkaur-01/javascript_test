// question 1
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

// question 2
function arrayDepth(arr) {
    return arr.flat(Infinity);
}


// question 3
function str(val){
    let value = val.split('');
    return value.reduce((accumulator , currentValue ,index) => {
        if(accumulator[currentValue]){
            accumulator[currentValue].push(index);
        }else{
            accumulator[currentValue] = [index];
        }
        return accumulator;
    },{});
}
console.log(str('dodo'));
console.log(str('froggy'));
console.log(str('grapes'));


// question-4
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



//question 5
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



//  question-6
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

let sortFun = function(){
    let sortedNames = person.sort(function(a,b){
        // sort by length
        let lengthComparison = a.lastName.length - b.lastName.length;

        if(lengthComparison === 0 ){
            // sort alphabetically
            return a.lastName.localeCompare(b.lastName)
        }
        return lengthComparison

    })
    console.log(sortedNames);
}
sortFun();