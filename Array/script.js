function isArray(value){ //1
	if (typeof(value)=='object')
		return true;
	else
		return false;
}

function removeBad(value){ //2
	if (isArray(value)){
		n = value.length;
		for (var i = 0; i < n; i++) {
			if (value[i]==null || value[i]==0 || value[i]==false || value[i]=="undefined" || isNaN(value[i])){
				value.splice(i,1);
				n = value.length;
			}
		}
		return value;
	}
	else
		console.warn('Function argument isn\'t array!');
}

function highestOfArray(value){ //3
	if (isArray(value)){
		var high = 0;
		for (var i = 0; i < value.length; i++) {
			if (value[i]>value[high])
				high = i;
		}
		return value[high];
	}
	else
		console.warn('Function argument isn\'t array!');
}

function lowestOfArray(value){ //4
	if (isArray(value)){
		var low = 0;
		for (var i = 0; i < value.length; i++) {
			if (value[i]<value[low])
				low = i;
		}
		return value[low];
	}
	else
		console.warn('Function argument isn\'t array!');
}

function splitString(string){ //5
	var n = 0;
	var words =[];
	var index = string.indexOf(" ");
	words[n] = string.slice(0, index);
	while (index != -1) {
		n++;
		string = string.substring(index+1, string.length);
		index = string.indexOf(" ");
		if (index !=-1)
			words[n] = string.slice(0, index);
		else
			words[n] = string.slice(0, string.length);
	}
	return words;
}

function mostFreq(value){ //6
	if (isArray(value)){
		var most = 0;
		var count = 0;
		var max = 0;
		for (var i = 0; i < value.length; i++) {
			for (var j = 0; j < value.length; j++) {
				if (value[i]==value[j])
					count++;
			}
			if (count > max){
				max = count;
				most = i;
			}
			count = 0;
		}
		return value[most];
	}
	else
		console.warn('Function argument isn\'t array!');
}

function clone(value){ //7
	if (isArray(value)){
		var cloned;
		cloned = value.slice();
		return cloned;
	}
	else
		console.warn('Function argument isn\'t array!');
}

function removeDuplicate(value){ //8
	if (isArray(value)){
		var count;
		for (var i = 0; i < value.length; i++) 
			for (var j = 0; j < value.length; j++)
				if (value[i]==value[j] && i!=j)
					value.splice(j,1);
		return value;
	}
	else
		console.warn('Function argument isn\'t array!');
}

function merge(value1, value2){ //9
	if (isArray(value1) && isArray(value2)){
		var n = value1.length;
		for (var i = 0; i < value2.length; i++) {
			value1[n+i]=value2[i];
		}
		removeDuplicate(value1);
		return value1;
	}
	else
		console.warn('Function argument isn\'t array!');
}

function deleteElement(array, value){ //10
	if (isArray(array)){
		for (var i = 0; i < array.length; i++)
			if (array[i]==value)
				array.splice(i,1);
		return array;
	}
	else
		console.warn('Function argument isn\'t array!');
}

function sortLibrary(){ //11
	var library = [ 
		{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
		{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
		{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of \
			The Hunger Games', libraryID: 3245}
	];
	function titleSort(){  
    	function book(element)  
     	{  
       		return (element['title']);  
     	}
        return function (a, b) {  
        	return a = book(a), b = book(b), ((a > b) - (b > a));  
        }  
    } 
	return library.sort(titleSort());
}