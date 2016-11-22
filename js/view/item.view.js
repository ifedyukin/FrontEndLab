var ItemView = (function () {

    "use strict";

    var context;

    function ItemView(ItemController, Utils) {
        context = this;
        this._itemController = ItemController;
        this._utils = Utils;
    };

    //Генератор кода блока элемента
    ItemView.prototype.generate = function (text, checked, i) {
        var code = '<div class="input-group">' +
            '<div class="input-group-btn">';
        var temp = checked ? '<button type="button" class="btn btn-success" disabled>' :
            '<button type="button" class="item' + i + ' btn btn-success">';
        code += temp + '<span class="item' + i + ' glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '</button></div>';
        var temp = checked ? '<p class="form-control list-group-item-success">' :
            '<p class="form-control list-group-item">';
        code += temp + text + '</p><div class="input-group-btn">' +
            '<button type="button" class="item' + i + ' btn btn-danger">' +
            '<span class="item' + i + ' glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></div></div>';

        return code;
    }

    //Подтверждение действия
    ItemView.prototype.confirmMove = function (move) {
        return confirm("Are you sure " + move + " ToDO item?");
    }

    //Добавление элемента
    ItemView.prototype.add = function () {
        var text = window.document.querySelector("#ToDoNewItem").value;

        if (this._utils.isBlank(text)) {
            if (this.confirmMove("add new")) {
                this.load(this._itemController.add(text));
            }
        } else {
            alert("Blank input!");
        }
    }

    //Удаление элемента
    ItemView.prototype.remove = function (i) {
        if (this.confirmMove("delete")) {
            this.load(this._itemController.remove(i));
        }
    }

    //Отметить элемент как выполненный
    ItemView.prototype.check = function (i) {
        if (this.confirmMove("check")) {
            this.load(this._itemController.check(i));
        }
    }

    //Поиск по элементам
    ItemView.prototype.search = function (text) {
        this.clear();
        this.load(this._itemController.search(text.toLowerCase()));
    }

    //Очищает вывод
    ItemView.prototype.clear = function () {
        window.document.querySelector("#listItems").innerHTML = "";
        window.document.querySelector("#ToDoNewItem").value = "";
    }

    //Загружает информацию из "storage"
    ItemView.prototype.load = function (items) {
        items = items || this._itemController.load();

        this.clear();
        var element = window.document.querySelector("#listItems");
        var uncheckedCode = "";
        var checkedCode = "";

        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];

            //Порядок вывода записей
            if (item.checked) {
                checkedCode = this.generate(item.text, item.checked, i) + checkedCode;
            } else {
                uncheckedCode += this.generate(item.text, item.checked, i);
            }

            element.innerHTML = uncheckedCode + checkedCode;
        }

        //Переназначаем событие клика по кнопке "Выполнить"
        $('.btn-success').click(function (event) {
            context.check(event.target.className[4]);
        });

        //Переназначаем событие клика по кнопке "Удалить"          
        $('.btn-danger').click(function (event) {
            context.remove(event.target.className[4]);
        });

    }

    var onAdd = function () {
        context.add();
    }

    var onEnter = function () {
        if (event.keyCode == 13) {
            context.add();
        }
    }

    var onSearch = function () {
        context.search(window.document.querySelector("#SearchItem").value)
    }

    //Обработка нажатия кнопки "Добавить"
    window.document.querySelector("#AddNewItem").addEventListener("click", onAdd);

    //Обработка нажатия "Enter" в поле добавления
    window.document.querySelector("#ToDoNewItem").addEventListener("keyup", onEnter);

    //Обработка ввода текста в поле "Поиск"
    window.document.querySelector("#SearchItem").addEventListener("input", onSearch);

    return ItemView;

} ());