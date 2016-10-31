(function () {
	'use strict';


	function isPalindrome(string) {
		console.warn('%c[Задание 1]\n', 'background: black; color: white');
		console.info('Введена строка "' + string + '"');
		var result = true;
		for (i = 1; i <= string.length; i++) {
			if (string[i - 1] != string[string.length - i]) {
				result = false;
			}
		}

		return result;
	}

	console.log(isPalindrome('fdfdf') ? console.log('Строка - полиндром') : console.log('Строка - не полиндром'));

	function genCombinations(string) {
		console.warn('%c[Задание 2]\n', 'background: black; color: white');
		console.info('Введена строка "' + string + '"');

		var reply = [];

		for (i = 0; i <= string.length; i++) {
			for (j = i; j <= string.length; j++) {
				if (j > i) {
					reply.push(string.substring(i, j));
				}
			}
		}

		return reply;
	}

	function sort(string) {
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

	function longestWord(string) {
		console.warn('%c[Задание 4]\n', 'background: black; color: white');
		console.info('Введена строка "' + string + '"');
		string = string.split(' ');
		var max = string[0];
		for (var i = 1; i < string.length; i++) {
			if (string[i].length > max.length) {
				max = string[i];
			}
		}
		return max;
	}

	function extractUnique(string) {
		console.warn('%c[Задание 5]\n', 'background: black; color: white');
		console.info('Введена строка "' + string + '"');
		var str = string.split('');
		for (i = 0; i < str.length; i++) {
			for (j = 0; j < str.length; j++) {
				if (str[i] == str[j] && i != j) {
					str[j] = "";
				}
			}
		}
		str = str.toString().replace(/,/g, "");
		console.log(str);
		return str;
	}
} ());