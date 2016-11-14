//Главный модуль
var Main = (function (Common, LibraryTools, HistoryTools) {

    "use strict";

    //Обновление информации
    function update() {
        //Обновляем дату
        Common.updateDate();
        //Перезагружаем библиотеку и историю
        LibraryTools.loadLibrary();
        HistoryTools.loadHistory();
        //Очистка загруженного изображения
        Common.bookImage = "";
        document.getElementById("add_image_label").style = "";
        document.getElementById("loaded_image").style = "";
        //Перезагружаем блок добавления
        document.getElementById("add_block").style = "display: none";
        var title = document.getElementById("add_book_title").value = "";
        var author = document.getElementById("add_book_author").value = "";
    }

    return {
        update: update
    };
} (Common, LibraryTools, HistoryTools));

Main.update();