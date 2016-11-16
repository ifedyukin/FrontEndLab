var ItemView = (function (Item, ItemStore) {

    "use strict;"

    //Генерирует код блока 
    function generate(text, checked, i) {
        var code = '<div class="input-group">' +
            '<div class="input-group-btn">';
        var temp = checked ? '<button type="button" class="btn btn-success" disabled>' :
            '<button type="button" class="btn btn-success" onclick="ItemController.check(' + i + ')">';
        code += temp + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '</button></div>';
        var temp = checked ? '<p class="form-control list-group-item-success">' :
            '<p class="form-control list-group-item">';
        code += temp + text + '</p><div class="input-group-btn">' +
            '<button type="button" class="btn btn-danger" onclick="ItemController.remove(' + i + ')">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></div></div>';
        return code;
    }

    //Подтверждение действия
    function confirmMove(move) {
        return confirm("Are you sure " + move + " ToDO item?");
    }

    //Очищает вывод
    function clear() {
        window.document.querySelector("#listItems").innerHTML = "";
        window.document.querySelector("#ToDoNewItem").value = "";
    }

    //Загружает инфрмацию из "storage"
    function load(item) {
        var element = window.document.querySelector("#listItems");
        if (item.checked) {
            element.innerHTML = element.innerHTML + generate(item.text, item.checked, item.index);
        } else {
            element.innerHTML = generate(item.text, item.checked, item.index) + element.innerHTML;
        }
    }
    
    return {
        load: load,
        confirmMove: confirmMove,
        clear: clear
    };

} (Item, ItemStore));