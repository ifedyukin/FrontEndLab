function printVariables() {
	console.warn('%c[Задание 1]\n', 'background: black; color: white');
	var a = "1 variable";
	var b = "2 variable";
	var reply = a + " and " + b;
	console.info(reply);
	return reply;
}

function sTriangle(a, h) {
	console.warn('%c[Задание 2]\n', 'background: black; color: white');
	var s = a * h / 2;
	console.info("Площадь треугольника с основанием " + a + " и высотой " + h + " равная " + s);
	return s;
}

function invert() {
	console.warn('%c[Задание 3]\n', 'background: black; color: white');

	var arr = [5, 4, 3, 2, 1];
	var work = 0;

	console.info("Исходный массив: ");

	for (i = 0; i <= 4; i++) {
		console.log(arr[i]);
	}

	console.info("Инвертируем массив через for: ");

	for (i = 0; i <= 2; i++) {
		work = arr[4 - i];
		arr[4 - i] = arr[i];
		arr[i] = work;
	}

	for (i = 0; i <= 4; i++) {
		console.log(arr[i]);
	}

	console.info("Инвертируем массив через while: ");

	i = 0;
	while (i <= 2) {
		work = arr[4 - i];
		arr[4 - i] = arr[i];
		arr[i] = work;
		i++;
	}
	for (i = 0; i <= 4; i++)
		console.log(arr[i]);
	console.info("Инвертируем массив через do-while: ");
	i = 0;
	do {
		work = arr[4 - i];
		arr[4 - i] = arr[i];
		arr[i] = work;
		i++;
	} while (i <= 2)
	for (i = 0; i <= 4; i++) {
		console.log(arr[i]);
	}
	return arr;
}

function prepost() {
	console.warn('%c[Задание 4]\n', 'background: black; color: white');
	console.info("i++");
	var reply = [];
	var i = 0;
	while (i < 5) {
		console.log(i++)
	};
	console.info("++i");
	var j = 0;
	while (j < 5) {
		console.log(++j)
	};
	reply.push(i);
	reply.push(j);
	return reply;
}

function argValue(arg) {
	console.warn('%c[Задание 5]\n', 'background: black; color: white');
	var reply;
	if (arg == 0) {
		reply = "Аргумент функции равен нулю";
	}
	else if (arg < 0) {
		reply = "Аргумент функции отрицательный";
	}
	else if (arg > 0) {
		reply = "Аргумент функции положительный";
	}
	else {
		reply = "Ошибка!";
	}
	return reply;
}

function whatsName() {
	console.warn('%c[Задание 6]\n', 'background: black; color: white');
	var name = prompt('Как тебя зовут?', '');
	alert('Привет, ' + name);
	console.info("Введено имя: " + name);
	return name;
}

function factorial(num) {
	console.warn('%c[Задание 7]\n', 'background: black; color: white');
	k = 1;
	for (i = 1; i <= num; i++)
		k *= i;
	console.info("Факториал " + num + " равен " + k);
	return k;
}