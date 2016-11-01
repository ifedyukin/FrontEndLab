'use strict';

function isNumber(value) {
	return (typeof (value) == 'number') ? true : false;
}

function isNegative(value) {
	if (isNumber(value)) {
		return (value < 0) ? true : false;
	} else {
		console.warn('Function argument isn\'t number!');
	}
}

function isPositive(value) {
	if (isNumber(value)) {
		return (value > 0) ? true : false;
	} else {
		console.warn('Function argument isn\'t number!');
	}
}

function factorial(value) {
	if (isNumber(value)) {
		return (value != 1) ? (value * factorial(value - 1)) : 1;
	} else {
		console.warn('Function argument isn\'t number!');
	}
}

function isPrime(value) {
	if (isNumber(value)) {
		if (value == 1) { return false; }
		for (var i = 2; i <= Math.sqrt(value); i++)
			if (value % i == 0) {
				return false;
			}
	} else {
		console.warn('Function argument isn\'t number!');
	} return true;
}