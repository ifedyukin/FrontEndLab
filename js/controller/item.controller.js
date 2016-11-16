var ItemController = (function (Item, ItemStore, ItemView, Utils) {

    "use strict;"

    //Передаём данные в загрузку
    function load() {
        ItemView.clear();
        for (var i = ItemStore.length - 1; i >= 0; i--) {
            var item = {
                text: ItemStore[i].text,
                checked: ItemStore[i].checked,
                index: i
            };
            ItemView.load(item);
        }
    }

    //Добавление нового элемента
    function add() {
        var text = window.document.querySelector("#ToDoNewItem").value;
        if (Utils.isBlank(text)) {
            if (ItemView.confirmMove("add new")) {
                var newItem = new Item(text);
                ItemStore.push(newItem);
                load();
            }
        } else {
            alert("Blank input!");
        }
    }

    //Удаление элемента
    function remove(i) {
        if (ItemView.confirmMove("delete")) {
            ItemStore.splice(i, 1);
            load();
        }
    }

    //Выполнение задачи
    function check(i) {
        if (ItemView.confirmMove("check")) {
            var text = ItemStore[i].text;
            ItemStore.splice(i,1);
            var newItem = new Item(text, true);
            ItemStore.push(newItem);
            console.log(newItem);
            load();
        }
    }

    //События
    window.document.querySelector("#AddNewItem").addEventListener("click", function () {
        add();
    });

    return {
        check: check,
        remove: remove,
        load: load
    }

} (Item, ItemStore, ItemView, Utils));