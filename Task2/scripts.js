function li_1(string) {
	console.warn('%c[Задание 1]\n', 'background: black; color: white');
	console.info('Введена строка "' + string + '"');
	result = true;
	for (i = 1; i <= string.length; i++) {
		if (string[i - 1] != string[string.length - i])
			result = false;
	}
	if (result)
		console.log('Строка - полиндром');
	else
		console.log('Строка - не полиндром');
	return result;
}

function li_2(string) {
	console.warn('%c[Задание 2]\n', 'background: black; color: white');
	console.info('Введена строка "' + string + '"');
	for (i = 0; i <= string.length; i++) {
		for (j = i; j <= string.length; j++) {
			if (j > i)
				console.log(string.substring(i, j));
		}
	}
}

function li_3(string) {
	console.warn('%c[Задание 3]\n', 'background: black; color: white');
	console.info('Введена строка "' + string + '"');
	string = string.replace(/\s/g, '');
	var m = string.split('');
	for (var i = 0; i < 9; i++) {
    var m_min = m[i];
    for (var j = i + 1; j < 10; j++) {
        if (m[j] < m_min) {
            var mm = m[i];
            m_min = m[j];
            m[i] = m_min;
            m[j] = mm;
        }
    	}
	}
	console.info("Строка отсортирована");
	console.log(m);
	return m;
}

function li_4(string) {
	console.warn('%c[Задание 4]\n', 'background: black; color: white');
	console.info('Введена строка "' + string + '"');
	string = string.split(' ');
	var min = string[0];
	for (var i = 1; i < string.length; i++){
		if (string[i].length < min.length)
			min = string[i];
	}
	console.log(min);
}

function li_5(string){
	console.warn('%c[Задание 5]\n', 'background: black; color: white');
	console.info('Введена строка "' + string + '"');
	var str = string.split('');
	for (i = 0; i < str.length; i++){
		for (j = 0; j < str.length; j++){
			if (str[i]==str[j] && i!=j){
				str[j]="";
			}
		}
	}
	str = str.toString().replace(/,/g,"");
	console.log(str);
	return str;
}