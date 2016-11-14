//Главный модуль
var Main = (function (Utils, BooksView, NotificationView) {

    "use strict";

    //Обновление информации
    function update() {
        //Обновляем дату
        Utils.updateDate();
        //Перезагружаем библиотеку и историю
        BooksView.loadLibrary();
        NotificationView.loadHistory();
        //Очистка загруженного изображения
        Utils.bookImage = "";
        window.document.querySelector("#add_image_label").style = "";
        window.document.querySelector("#loaded_image").style = "";
        //Перезагружаем блок добавления
        window.document.querySelector("#add_block").style = "display: none";
        var title = window.document.querySelector("#add_book_title").value = "";
        var author = window.document.querySelector("#add_book_author").value = "";
    }

    //Начало
    update();

    return {
        update: update
    };
} (Utils, BooksView, NotificationView));