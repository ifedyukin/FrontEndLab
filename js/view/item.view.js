var ItemView = (function() {

    "use strict";

    function ItemView(ItemController, Utils) {

        //Контекст "ItemView"
        var contextItemView = this;

        //Генератор кода блока элемента
        this.generate = function(text, checked, i) {
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
        this.confirmMove = function(move) {
            return confirm("Are you sure " + move + " ToDO item?");
        }

        //Добавление элемента
        this.add = function() {
            var text = window.document.querySelector("#ToDoNewItem").value;

            if (Utils.isBlank(text)) {
                if (this.confirmMove("add new")) {
                    this.load(ItemController.add(text));
                }
            } else {
                alert("Blank input!");
            }
        }

        //Удаление элемента
        this.remove = function(i) {
            if (this.confirmMove("delete")) {
                this.load(ItemController.remove(i));
            }
        }

        //Отметить элемент как выполненный
        this.check = function(i) {
            if (this.confirmMove("check")) {
                this.load(ItemController.check(i));
            }
        }

        //Поиск по элементам
        this.search = function(text) {
            this.clear();
            this.load(ItemController.search(text.toLowerCase()));
        }

        //Очищает вывод
        this.clear = function() {
            window.document.querySelector("#listItems").innerHTML = "";
            window.document.querySelector("#ToDoNewItem").value = "";
        }

        //Загружает информацию из "storage"
        this.load = function(items) {
            items = items || ItemController.load();

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
            $('.btn-success').click(function(event) {
                contextItemView.check(event.target.className[4]);
            });

            //Переназначаем событие клика по кнопке "Удалить"          
            $('.btn-danger').click(function(event) {
                contextItemView.remove(event.target.className[4]);
            });

        }

        //Обработка нажатия кнопки "Добавить"
        window.document.querySelector("#AddNewItem").addEventListener("click", function() {
            contextItemView.add();
        });

        //Обработка нажатия "Enter" в поле добавления
        window.document.querySelector("#ToDoNewItem").addEventListener("keyup", function(event){
            if (event.keyCode == 13){
                contextItemView.add();
            }
        });

        //Обработка ввода текста в поле "Поиск"
        window.document.querySelector("#SearchItem").addEventListener("input", function() {
            contextItemView.search(window.document.querySelector("#SearchItem").value);
        });

    };

    return ItemView;

} ());