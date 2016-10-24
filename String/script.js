function isString(value){
	if (typeof(value)=='string')
		return true;
	else
		return false;
}

function canParseToNumber(value){
	if (isString(value)){
		if (isNaN(parseInt(value)))
			return false;
		else
			return true;
	}
	else
		console.warn('Function argument isn\'t string!');
}

function getStringLength(value){
	if (isString(value)){
		return value.length;
	}
	else
		console.warn('Function argument isn\'t string!');
}

function camelize(value){
	if (isString(value)){
		value = value.split("");
		n = value.length;
		for (var i=0; i<n; i++)
			if (value[i]==' '){
				value[i+1]=value[i+1].toUpperCase();
				delete value[i];
				n = value.length;
			}
		return value.join('');
	}
	else
		console.warn('Function argument isn\'t string!');
}

function capitalize(value){
	if (isString(value)){
		value = value.split("");
		value[0]=value[0].toUpperCase();
		return value.join('');
	}
	else
		console.warn('Function argument isn\'t string!');
}

function findOccurrences(sub, string){
	if (isString(sub) && isString(string)){
		sub = sub.toLowerCase();
		string = string.toLowerCase();
		var n = 0;
		var index = string.indexOf(sub);
		if (sub == '') return n;
		while (index != -1) {
			n++;
			string = string.substring(index+1, string.length);
			index = string.indexOf(sub);
		}
		return n;
	}
	else
		console.warn('Function argument isn\'t string!');
}