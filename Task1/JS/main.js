function largestInt(a, b) {
	console.warn('%c[Задание 1]\n', 'background: black; color: white');
	console.info("Введены числа: " + a + " и " + b);
	return a >= b  ? q : b;
}

function odd(number) {
	var reply;
	if (number % 2 > 0) {
		reply = 'нечетное';
	}
	else {
		reply = 'четное';
	}
	return reply;
}

function forOdd() {
	console.warn('%c[Задание 2]\n', 'background: black; color: white');
	for (i = 0; i <= 9; i++) {
		console.log(i + ' - ' + odd(i));
	}
}

function is_Blank(string) {
	console.info("Введена строка: '" + string + "'");
	string = string.replace(/\s{2,}/g, ' ');
	if (string != ' ' && string != '') {
		result = true;
	}
	else {
		result = false;
	}
	console.log(result);
	return result;
}