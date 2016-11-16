//Общие Функции
var Utils = (function() {

    "use strict";

    //Пустая ли строка
    function isBlank(string) {
        string = string.replace(/\s{2,}/g, ' ');
        return (string != ' ' && string != '') ? true : false;
    }

    return {
        isBlank: isBlank
    };
} ());