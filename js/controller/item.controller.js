var ItemController = (function () {

    "use strict";

    function ItemController(ItemStore, Item) {
        this._itemStore = ItemStore;
        this._item = Item;
    };

    //Передаём данные в загрузку
    ItemController.prototype.load = function () {
        return this._itemStore;
    }

    //Добавление нового элемента
    ItemController.prototype.add = function (text) {
        var newItem = new Item(text);

        this._itemStore.push(newItem);

        return this._itemStore;
    }

    //Удаление элемента
    ItemController.prototype.remove = function (i) {
        this._itemStore.splice(i, 1);

        return this._itemStore;
    }

    //Поиск по элементам
    ItemController.prototype.search = function (text) {
        var result = [];

        for (var i = 0; i < this._itemStore.length; i++) {
            var item = this._itemStore[i];
            var searchItems = item["text"].toLowerCase().indexOf(text);

            if (searchItems != -1) {
                result.push({ text: item["text"], checked: item["checked"], index: i });
            }
        }

        return result;
    }

    //Отметить элемент как выполненный
    ItemController.prototype.check = function (i) {
        var text = this._itemStore[i].text;
        this._itemStore.splice(i, 1);

        var newItem = new Item(text, true);
        this._itemStore.push(newItem);

        return this._itemStore;
    }

    return ItemController;

} ());