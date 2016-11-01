function largestInt(a, b) {
	return a >= b  ? a : b;
}

function odd(number) {
	return (number % 2 > 0) ? false : true;
}

function forOdd() {
	for (i = 0; i <= 9; i++) {
		console.log(i + ' - ' + odd(i));
	}
}

function is_Blank(string) {
	string = string.replace(/\s{2,}/g, ' ');
	return (string != ' ' && string != '') ? true : false;
}