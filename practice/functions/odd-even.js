//will throw an error 
function test(items) {

	for (let index = 0; index < items.length; index++) {
		items[index] = checkEvenOdd(items[index]);
	}
	
	let checkEvenOdd = function(val) {
		return val % 2 === 0 ? `${val} is even` : `${val} is odd`;
	}
	return items;
}

console.log(test([1, 4, 3, 6,28]));