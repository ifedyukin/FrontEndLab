var Utils = (function () {

    "use strict";

    function Utils() {

        //Пустая ли строка
        this.isBlank = function (string) {
            string = string.replace(/\s{2,}/g, ' ');
            return (string != ' ' && string != '');
        }

    };

    return Utils;

} ());