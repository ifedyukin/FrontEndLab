var ItemView = (function(Item, ItemStore) {

    "use strict;"

    //Генерирует код блока 
    function generate(text, check, i) {
        var code = '<div class="input-group">' +
            '<div class="input-group-btn">';
        var temp = check ? '<button type="button" class="btn btn-success" disabled>' :
            '<button type="button" class="btn btn-success" onclick="ItemController.check(' + i + ')">';
        code += temp + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '</button></div>';
        var temp = check ? '<p class="form-control list-group-item-success">' :
            '<p class="form-control list-group-item">';
        code += temp + text + '</p><div class="input-group-btn">' +
            '<button type="button" class="btn btn-danger" onclick="ItemController.remove(' + i + ')">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></div></div>';
        return code;
    } 

    //Загружает инфрмацию из "storage"
    function load() {
        var code = "";
        var checked = "";
        for (var i = ItemStore.length - 1; i >= 0; i--) {
            if (ItemStore[i].check) {
                checked += generate(ItemStore[i].text, ItemStore[i].check, i);
            } else {
                code += generate(ItemStore[i].text, ItemStore[i].check, i);
            }
        }
        window.document.querySelector("#listItems").innerHTML = code + checked;
    }

    return {
        load: load
    };

} (Item, ItemStore));