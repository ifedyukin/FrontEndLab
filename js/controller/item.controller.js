var ItemController = (function (Item, ItemStore) {

    "use strict;"

    //Передаём данные в загрузку
    function load() {
        var reply = [];
        for (var i = ItemStore.length - 1; i >= 0; i--) {
            var item = {
                text: ItemStore[i].text,
                checked: ItemStore[i].checked,
                index: i
            };
            reply.push(item);
        }
        return reply;
    }

    //Добавление нового элемента
    function add(text) {
        var newItem = new Item(text);

        ItemStore.push(newItem);
    }

    //Удаление элемента
    function remove(i) {
        ItemStore.splice(i, 1);
    }

    //Поиск
    function search(text) {
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

    //Выполнение задачи
    function check(i) {
        var text = ItemStore[i].text;
        ItemStore.splice(i, 1);
        var newItem = new Item(text, true);
        ItemStore.push(newItem);
    }

    return {
        check: check,
        remove: remove,
        load: load,
        add: add,
        search: search
    }

} (Item, ItemStore));