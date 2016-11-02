'use strict';

function isNumber(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}

function isNegative(value) {
	if (isNumber(value)) {
		return (value < 0);
	} else {
		throw new Error('Function argument isn\'t number!');
	}
}

function isPositive(value) {
	if (isNumber(value)) {
		return (value > 0);
	} else {
		throw new Error('Function argument isn\'t number!');
	}
}

function factorial(value) {
	if (isNumber(value)) {
		return (value != 1) ? (value * factorial(value - 1)) : 1;
	} else {
		throw new Error('Function argument isn\'t number!');
	}
}

function isPrime(value) {
	if (isNumber(value)) {
		if (value == 1) { 
			return false; 
		}

		for (var i = 2; i <= Math.sqrt(value); i++) {
			return (value % i != 0);
		}
	} else {
		throw new Error('Function argument isn\'t number!');
	} 
	
	return true;
}