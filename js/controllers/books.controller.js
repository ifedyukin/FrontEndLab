//Функции для работы с библиотекой
var BooksController = (function (BooksStore, Utils, NotificationsStore, Book) {

    "use strict";

    //Поиск
    function search() {
        window.document.querySelector("#books").innerHTML = "";
        var count = 0;
        var reply = [];
        var search = window.document.querySelector("#search").value.toLowerCase();

        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];
            var titleSearch = book["title"].toLowerCase().indexOf(search);
            var authorSearch = book["author"].toLowerCase().indexOf(search);
            if (titleSearch != -1 || authorSearch != -1) {
                reply.push({
                    id: book["id"],
                    title: book["title"],
                    author: book["author"],
                    image: book["image"],
                    stars: book["stars"]
                });
                count++;
            }
        }
        if (count == 0) {
            var reply = 0;
        }

        return reply;
    }

    //Изменение рейтинга
    function updateRating(rating, id) {
        id--;
        if (BooksStore[id].stars != rating) {
            BooksStore[id].stars = rating;
            var historyId = BooksStore.length + 1;
            NotificationsController.addNotification("You rate  <b>" +
                BooksStore[id].title + "</b> by <b>" +
                BooksStore[id].author + "</b> " + rating + " stars");
            Main.update();
        }
    }

    //Только популярные
    function mostPopular() {
        var maxStar = 1;
        var reply = [];
        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];
            if (book["stars"] > maxStar) {
                maxStar = book["stars"];
            }
        }

        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];
            if (book["stars"] == maxStar) {
                reply.push({
                    id: book["id"],
                    title: book["title"],
                    author: book["author"],
                    image: book["image"],
                    stars: book["stars"]
                });
            }
        }
        return reply;
    }

    //Добавление книги
    function addBook() {
        var title = window.document.querySelector("#add_book_title").value;
        var author = window.document.querySelector("#add_book_author").value;

        if (Utils.isBlank(title) && Utils.isBlank(author)) {
            var bookId = BooksStore.length + 1;
            var historyId = NotificationsStore.length + 1;
            var newBook = new Book(bookId, title, author, Utils.bookImage);
            BooksStore.push(newBook);

            NotificationsController.addNotification("You added <b>" +
                title + "</b> by <b>" + author + "</b> to your <b>Library</b>");
            alert("Book \"" + author + " - " + title + "\" has been added!");
            Main.update();
        } else {
            alert("Blank inputs!");
        }
        return true;
    }


    return {
        star: updateRating,
        addBook: addBook,
        search: search,
        mostPopular: mostPopular
    };
} (BooksStore, Utils, NotificationsStore, Book));