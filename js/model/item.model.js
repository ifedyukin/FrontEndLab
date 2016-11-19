var Item = (function() {

    "use strict";

    //Новый элемент
    function Item(text, checked) {
        this.text = text;
        this.checked = checked || false;
    }

    return Item;

} ());