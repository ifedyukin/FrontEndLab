function li_1 (a, b){
	console.warn('%c[Задание 1]\n', 'background: black; color: white');
	console.info("Введены числа: " + a + " и " + b);
	if (a >=b )
		console.log(a);
	else
		console.log(b);
}

function li_2(){
	console.warn('%c[Задание 2]\n', 'background: black; color: white');
	for (i = 0; i <= 9; i++){
		if (i % 2 > 0)
			console.log(i + " - нечетное")
		else 
			console.log(i + " - четное")
	}
}

function li_3(string){
	console.info("Введена строка: '" + string + "'");
	string = string.replace(/\s{2,}/g, ' ');
	if (string != ' ' && string != '')
		result = true;
	else 
		result = false;
	console.log(result);
	return result;
}