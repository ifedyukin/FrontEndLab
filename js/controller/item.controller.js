var ItemController = (function (Item, ItemStore, ItemView) {

    "use strict;"

    //Добавление нового элемента
    function add() {
        var text = window.document.querySelector("#ToDoNewItem").value;
        if (confirm("Are you sure want to add new ToDO item?")) {
            var newItem = new Item(text);
            ItemStore.push(newItem);
            ItemView.load();
        }
        var text = window.document.querySelector("#ToDoNewItem").value = "";
    }

    //Удаление элемента
    function remove(i) {
        if (confirm("Are you sure delete ToDO item?")) {
            ItemStore.splice(i, 1);
            ItemView.load();
        }
    }

    //Выполнение задачи
    function check(i) {
        if (confirm("Are you sure check ToDO item?")) {
            ItemStore[i].check = true;
            ItemView.load();
        }
    }

    //События
    window.document.querySelector("#AddNewItem").addEventListener("click", function () {
        add();
    });

    return {
        remove: remove,
        check: check
    };

} (Item, ItemStore, ItemView));