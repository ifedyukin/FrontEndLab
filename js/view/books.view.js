var BooksView = (function () {

    "use strict";

    //Формируем код блока книги
    function createBlock(id, title, author, image, stars) {
        var headCode = "<div class=\"book bookId" + id + "\">" +
            "<div class=\"book_pic\"><img src=\"books/" + image + "\" alt=\"cover\"></div>" +
            "<div class=\"book_title\">" + title + "</div>" +
            "<div class=\"book_author\">" + author + "</div>" +
            "<div class=\"stars\">";

        var botCode = '';
        var count = 5;
        for (var i = 0; i < (5 - stars); i++) {
            botCode += "<div onclick=\"BooksController.star(" + count + "," +
                id + ")\" class=\"stars__star stars__star--zero\"></div>";
            count--;
        }
        for (var i = 0; i < stars; i++) {
            botCode += "<div onclick=\"BooksController.star(" + count + "," +
                id + ")\" class=\"stars__star stars__star--full\"></div>";
            count--;
        }

        var code = headCode + botCode + "</div></div>";

        window.document.querySelector("#books").innerHTML += code;
    }

    //Загружаем библиотеку
    function loadLibrary() {
        Utils.categoryClick("categoryAll");
        window.document.querySelector("#books").innerHTML = "";
        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];
            createBlock(
                book["id"],
                book["title"],
                book["author"],
                book["image"],
                book["stars"]
            );
        }
    }

    return {
        createBlock: createBlock,
        loadLibrary: loadLibrary
    };
} ());