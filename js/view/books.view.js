var BooksView = (function (BooksController) {

    "use strict";

    //Формируем код блока книги
    function createBlock(id, title, author, image, stars, searchResult) {
        var searchResult = searchResult || 1;
        if (searchResult != 0) {
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
    }

    //Ресультат не поиска
    function noResult(){
        window.document.querySelector("#books").innerHTML = "<h2>Not found!</h2>";
    }

    //Загружаем библиотеку
    function loadLibrary() {
        categoryClick("categoryAll");
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

    //Загружаемая фотография
    var bookImage;

    //Отображение блока добавления
    function displayAddBlock() {
        if (window.document.querySelector("#add_block").style.display == "block") {
            window.document.querySelector("#add_block").style.display = "none";
        } else {
            window.window.document.querySelector("#add_block").style.display = "block";
        }
    }

    //Загрузка фотографии
    function imageLoaded() {
        window.document.querySelector("#add_image_label").style = "background-color: #16A3F9";
        bookImage = window.document.querySelector("#add_book_image").value;
        bookImage = bookImage.substring(12);
        bookImage = "books/" + bookImage;
        window.document.querySelector("#loaded_image").style = "background-image: url(\"" +
            bookImage + "\"); display: block;";
    }

    //Выбор категории
    function categoryClick(category) {
        window.document.querySelector("#books").innerHTML = "";
        window.document.querySelector("#categoryAll").style = "";
        window.document.querySelector("#categoryPopular").style = "";
        document.getElementById(category).style =
            "color: white !important;" +
            "background-color: #95b6d5;" +
            "padding: 5px;" +
            "padding-left: 10px;" +
            "padding-right: 10px;" +
            "border-radius: 7px;";
    }

    //События
    window.document.querySelector("#add_book_display_button").addEventListener("click", function () {
        displayAddBlock();
    });
    window.document.querySelector("#add_book_image").addEventListener("change", function () {
        imageLoaded();
    });

    return {
        displayAddBlock: displayAddBlock,
        categoryClick: categoryClick,
        noResult: noResult,
        imageLoaded: imageLoaded,
        bookImage: bookImage,
        createBlock: createBlock,
        loadLibrary: loadLibrary
    };
} (BooksController));