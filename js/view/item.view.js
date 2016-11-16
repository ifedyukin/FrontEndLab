var ItemView = (function (ItemController, Utils) {

    "use strict;"

    //Генерирует код блока 
    function generate(text, checked, i) {
        var code = '<div class="input-group">' +
            '<div class="input-group-btn">';
        var temp = checked ? '<button type="button" class="btn btn-success" disabled>' :
            '<button type="button" class="btn btn-success" onclick="ItemView.check(' + i + ')">';
        code += temp + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '</button></div>';
        var temp = checked ? '<p class="form-control list-group-item-success">' :
            '<p class="form-control list-group-item">';
        code += temp + text + '</p><div class="input-group-btn">' +
            '<button type="button" class="btn btn-danger" onclick="ItemView.remove(' + i + ')">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></div></div>';
        return code;
    }

    //Подтверждение действия
    function confirmMove(move) {
        return confirm("Are you sure " + move + " ToDO item?");
    }

    //Добавление книги
    function add(){
        var text = window.document.querySelector("#ToDoNewItem").value;
        if (Utils.isBlank(text)) {
            if (confirmMove("add new")) {
                ItemController.add(text);
                load();
            }
        } else {
            alert("Blank input!");
        }
    }

    //Удаление
    function remove(i) {
        if (confirmMove("delete")) {
            ItemController.remove(i);
            load();
        }
    }

    //Выполнение
    function check(i) {
        if (confirmMove("check")) {
            ItemController.check(i);
            load();
        }
    }

    //Поиск
    function search(text){
       clear();
       load(ItemController.search(text.toLowerCase()));
    }

    //Очищает вывод
    function clear() {
        window.document.querySelector("#listItems").innerHTML = "";
        window.document.querySelector("#ToDoNewItem").value = "";
    }

    //Загружает инфрмацию из "storage"
    function load(items) {
        items = items || ItemController.load();
        clear();
        var element = window.document.querySelector("#listItems");
        for (var i = items.length-1; i >= 0; i--) {
            var item = items[i];
            if (item.checked) {
                element.innerHTML = element.innerHTML + generate(item.text, item.checked, item.index);
            } else {
                element.innerHTML = generate(item.text, item.checked, item.index) + element.innerHTML;
            }
        }
    }

    //События
    window.document.querySelector("#AddNewItem").addEventListener("click", function () {
        add();
    });

    window.document.querySelector("#SearchItem").addEventListener("input", function () {
        search(window.document.querySelector("#SearchItem").value);
    });
    

    return {
        load: load,
        confirmMove: confirmMove,
        clear: clear,
        check: check,
        remove: remove,
        add: add
    };

} (ItemController, Utils));