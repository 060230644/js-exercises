function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum(x) {
	let i;
	let sum = 0;
	for (i = 0; i < x.length; i++) {
		sum += x[i];
	}
	return sum;
}

function multiply(x) {
	let i;
	let sum = 1;
	for (i = 0; i < x.length; i++) {
		sum *= x[i];
	}
	return sum;
}

function power(x, y) {
	let i;
	let sum = 1;
	for (i = 0; i < y; i++) {
		sum *= x;
	}
	return sum;
}
function factorial(x) {
	let i;
	let sum = 1;
	for (i = 1; i <= x; i++) {
		sum *= i;
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
