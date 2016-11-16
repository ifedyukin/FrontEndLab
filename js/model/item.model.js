var Item = (function () {

    "use strict;"

    function Item(text, checked) {
        this.text = text;
        this.checked  = checked || false;
    }

    return Item;

} ());