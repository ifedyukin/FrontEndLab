var date1 = new Date("9/30/2016");
var date2 = new Date("10/12/2016");

function difference(date1, date2){ //1
	var diff = Math.abs(date2.getTime() - date1.getTime());
	return diff; 
}

function current(){ //2
	var now = new Date();
    var month = Number(now.getMonth())+1;
	var current = now.getDate()+'-'+month+'-'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
	console.log(current);
	return current;
}

function getNow(){ //3
	var now = new Date();
	return now.toString();
}

function differenceInDays(date1, date2){ //4
	var days = Math.ceil(difference(date1, date2) / (1000 * 3600 * 24));
	return days; 
}