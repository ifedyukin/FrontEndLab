var ItemController = (function () {

    "use strict";

    function ItemController(ItemStore, Item) {

        //Передаём данные в загрузку
        this.load = function () {
            return ItemStore;
        }

        //Добавление нового элемента
        this.add = function (text) {
            var newItem = new Item(text);

            ItemStore.push(newItem);

            return ItemStore;
        }

        //Удаление элемента
        this.remove = function (i) {
            ItemStore.splice(i, 1);

            return ItemStore;
        }

        //Поиск по элементам
        this.search = function (text) {
            var result = [];

            for (var i = 0; i < ItemStore.length; i++) {
                var item = ItemStore[i];
                var searchItems = item["text"].toLowerCase().indexOf(text);

                if (searchItems != -1) {
                    result.push({ text: item["text"], checked: item["checked"], index: i });
                }
            }

            return result;
        }

        //Отметить элемент как выполненный
        this.check = function (i) {
            var text = ItemStore[i].text;
            ItemStore.splice(i, 1);

            var newItem = new Item(text, true);
            ItemStore.push(newItem);

            return ItemStore;
        }

    };

    return ItemController;

} ());