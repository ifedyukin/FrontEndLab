var Utils = (function () {

    "use strict";

    function Utils() {
        //constructor
    };

    Utils.prototype.isBlank = function (string) {
        string = string.replace(/\s{2,}/g, ' ');
        return (string != ' ' && string != '');
    }

    return Utils;

} ());