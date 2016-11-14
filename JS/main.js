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
         window.document.querySelector("#add_image_label").style = "";
         window.document.querySelector("#loaded_image").style = "";
        //Перезагружаем блок добавления
         window.document.querySelector("#add_block").style = "display: none";
        var title =  window.document.querySelector("#add_book_title").value = "";
        var author =  window.document.querySelector("#add_book_author").value = "";
    }

    return {
        update: update
    };
} (Common, LibraryTools, HistoryTools));

Main.update();