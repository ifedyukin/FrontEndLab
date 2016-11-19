var ItemStore = (function() {

    "use strict";

    //Хрранилище элементов
    function ItemStore() {
        return [
            new Item("Make OOP & MVC lab", false),
            new Item("Write NodeJS server", false),
            new Item("Buy Orange Pi", false),
        ];
    }

    return ItemStore;

} ());