//Общие Функции
var Utils = (function() {

    "use strict";

    //Дата
    
    //Текущая дата
    function updateDate() {
        var nowDate = new Date();
        var nowHour;
    var nowMinutes;
    var nowDay;
    var nowMonth;
    var nowYear;

        nowHour = nowDate.getHours();
        nowMinutes = nowDate.getMinutes();
        nowDay = nowDate.getDate();
        nowMonth = nowDate.getMonth();
        nowYear = nowDate.getFullYear();

        return {
            nowDay: nowDay,
            nowMonth: nowMonth,
            nowYear: nowYear,
            nowHour: nowHour,
            nowMinutes: nowMinutes
        };
    }
    
    updateDate();

    //Пустая ли строка
    function isBlank(string) {
        string = string.replace(/\s{2,}/g, ' ');

        return string != ' ' && string != '';
    }

    return {
        updateDate: updateDate,
        isBlank: isBlank
    };
} ());