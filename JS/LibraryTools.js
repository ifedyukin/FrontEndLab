//Функции для работы с библиотекой
var LibraryTools = (function (DB, Common) {

    "use strict";

    //Формируем код блока книги
    function createBookBlock(id, title, author, image, stars) {
        var headCode = "<div class=\"book bookId" + id + "\">" +
            "<div class=\"book_pic\"><img src=\"books/" + image + "\" alt=\"cover\"></div>" +
            "<div class=\"book_title\">" + title + "</div>" +
            "<div class=\"book_author\">" + author + "</div>" +
            "<div class=\"stars\">";

        var botCode = '';
        var count = 5;
        for (var i = 0; i < (5 - stars); i++) {
            botCode += "<div onclick=\"LibraryTools.star(" + count + "," +
                id + ")\" class=\"stars__star stars__star--zero\"></div>";
            count--;
        }
        for (var i = 0; i < stars; i++) {
            botCode += "<div onclick=\"LibraryTools.star(" + count + "," +
                id + ")\" class=\"stars__star stars__star--full\"></div>";
            count--;
        }

        var code = headCode + botCode + "</div></div>";

        document.getElementById("books").innerHTML += code;
    }

    //Загружаем библиотеку
    function loadLibrary() {
        Common.categoryClick("categoryAll");
        document.getElementById("books").innerHTML = "";
        for (var i = 0; i < DB.library.length; i++) {
            var book = DB.library[i];
            createBookBlock(
                book["id"],
                book["title"],
                book["author"],
                book["image"],
                book["stars"]
            );
        }
    }

    //Поиск
    function search() {
        document.getElementById("books").innerHTML = "";
        var count = 0;
        var search = document.getElementById("search").value.toLowerCase();
        for (var i = 0; i < DB.library.length; i++) {
            var book = DB.library[i];
            var titleSearch = book["title"].toLowerCase().indexOf(search);
            var authorSearch = book["author"].toLowerCase().indexOf(search);
            if (titleSearch != -1 || authorSearch != -1) {
                createBookBlock(
                    book["id"],
                    book["title"],
                    book["author"],
                    book["image"],
                    book["stars"]
                );
                count++;
            }
        }
        if (count == 0) {
            document.getElementById("books").innerHTML = "<h2>Not found!</h2>";
        }
    }

    //Изменение рейтинга
    function updateRating(rating, id) {
        id--;
        if (DB.library[id].stars != rating) {
            DB.library[id].stars = rating;
            var historyId = DB.history.length + 1;
            DB.history.push({
                id: historyId, text: "You rate  <b>" +
                DB.library[id].title + "</b> by <b>" +
                DB.library[id].author + "</b> " + rating + " stars",
                date: {
                    day: Common.currentDate.nowDay,
                    month: Common.currentDate.nowMonth,
                    year: Common.currentDate.nowYear,
                    hour: Common.currentDate.nowHour,
                    minutes: Common.currentDate.nowMinutes
                }
            });
            Main.update();
        }
    }

    //Только популярные
    function mostPopular() {
        Common.categoryClick("categoryPopular");
        document.getElementById("books").innerHTML = "";

        var maxStar = 1;
        for (var i = 0; i < DB.library.length; i++) {
            var book = DB.library[i];
            if (book["stars"] > maxStar) {
                maxStar = book["stars"];
            }
        }

        for (var i = 0; i < DB.library.length; i++) {
            var book = DB.library[i];
            if (book["stars"] == maxStar) {
                createBookBlock(
                    book["id"],
                    book["title"],
                    book["author"],
                    book["image"],
                    book["stars"]
                );
            }
        }
    }

    //Добавление книги
    function addBook() {
        var title = document.getElementById("add_book_title").value;
        var author = document.getElementById("add_book_author").value;

        if (Common.isBlank(title) && Common.isBlank(author)) {
            var bookId = DB.library.length + 1;
            var historyId = DB.history.length + 1;
            if (Common.bookImage == "") {
                Common.bookImage = "books/nocover.jpg";
            }
            DB.library.push({
                id: bookId,
                title: title,
                author: author,
                image: Common.bookImage.substring(6),
                stars: 0
            });
            DB.history.push({
                id: historyId, text: "You added <b>" +
                title + "</b> by <b>" + author + "</b> to your <b>Library</b>",
                date: {
                    day: Common.currentDate.nowDay,
                    month: Common.currentDate.nowMonth,
                    year: Common.currentDate.nowYear,
                    hour: Common.currentDate.nowHour,
                    minutes: Common.currentDate.nowMinutes
                }
            });
            Common.displayAddBlock();
            alert("Book \"" + author + " - " + title + "\" has been added!");
            Main.update();
        } else {
            alert("Blank inputs!");
        }
    }

    return {
        loadLibrary: loadLibrary,
        search: search,
        star: updateRating,
        mostPopular: mostPopular,
        addBook: addBook
    };
} (DB, Common));