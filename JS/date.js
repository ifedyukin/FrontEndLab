'use strict';

var date1 = new Date("9/30/2016");
var date2 = new Date("10/12/2016");

function difference(date1, date2) { //1
	return Math.abs(date2.getTime() - date1.getTime());
}

function current() { //2
	var now = new Date();
	return formatDate(now);
}

function formatDate(date) {
	var month = Number(date.getMonth())+1;
	return date.getDate() + '-' + month + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function getNow() { //3
	var now = new Date();
	return now.toString();
}

function differenceInDays(date1, date2) { //4
	var days = Math.ceil(difference(date1, date2) / (1000 * 3600 * 24));
	return days;
}