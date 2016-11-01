(function () {
	'use strict';


	function isPalindrome(string) {
		var result = true;
		for (var i = 1; i <= string.length; i++) {
			if (string[i - 1] != string[string.length - i]) {
				result = false;
			}
		}

		return result;
	}

	console.log(isPalindrome('lalal') ? console.log('Строка - полиндром') : console.log('Строка - не полиндром'));

	function genCombinations(string) {
		var reply = [];

		for (var i = 0; i <= string.length; i++) {
			for (var j = i; j <= string.length; j++) {
				if (j > i) {
					reply.push(string.substring(i, j));
				}
			}
		}

		return reply;
	}

	console.log(genCombinations("dog"));

	function sort(string) {
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
		return m;
	}

	console.log(sort("lorem ipsum dolor"));

	function longestWord(string) {
		string = string.split(' ');
		var max = string[0];
		for (var i = 1; i < string.length; i++) {
			if (string[i].length > max.length) {
				max = string[i];
			}
		}
		return max;
	}

	console.log(longestWord("lorem lor em"));

	function extractUnique(string) {
		var str = string.split('');
		for (var i = 0; i < str.length; i++) {
			for (var j = 0; j < str.length; j++) {
				if (str[i] == str[j] && i != j) {
					str[j] = "";
				}
			}
		}
		str = str.toString().replace(/,/g, "");
		return str;
	}

	console.log(extractUnique("rreqrwerfdsfefrwefdfweerew"));

} ());