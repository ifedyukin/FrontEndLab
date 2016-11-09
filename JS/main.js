var js = (function () {

    "use strict";

    /*################№№№№#########
      ### Глобальные переменные ###
      #############################*/

    //Библиотека
    var Library = [
        { id: 1, title: "Jewels of Nizam", author: "Geeta Devi", image: "JewelsOfNizam.jpg", stars: 5 },
        { id: 2, title: "Cakes & Bakes", author: "Sanjeev Kapoor", image: "CakesAndBakes.jpg", stars: 5 },
        { id: 3, title: "Jamie's Kitchen", author: "Jamie Oliver", image: "JamiesKitchen.jpg", stars: 4 },
        { id: 4, title: "Inexpensive Family Meals", author: "Simon Holst", image: "InexpensiveFamilyMeals.jpg", stars: 3 },
        { id: 5, title: "Paleo Slow Cooking", author: "Chrissy Gawer", image: "PaleoSlowCooking.jpg", stars: 4 },
        { id: 6, title: "Cook Like an Italian", author: "Toble Puttock", image: "CookLikeAnItalian.jpg", stars: 3 },
        { id: 7, title: "Suneeta Vaswani", author: "Geeta Devi", image: "SuneetaVaswani.jpg", stars: 5 },
        { id: 8, title: "Jamie Does", author: "Jamie Oliver", image: "JamieDoes.jpg", stars: 3 },
        { id: 9, title: "Jamie's Italy", author: "Jamie Oliver", image: "JamiesItaly.jpg", stars: 5 },
        { id: 10, title: "Vegetables Cookbook", author: "Matthew Biggs", image: "VegetablesCookbook.jpg", stars: 3 }
    ];

    //История
    var History = [
        { id: 1, text: "You added <b>Fight Club</b> by <b>Chuck Palahniuk</b> to your <b>Must Read Titles</b>", date: { day: 20, month: 9, year: 2015, hour: 15, minutes: 20 } },
        { id: 2, text: "You added <b>The Trial</b> by <b>Franz Kafka</b> to your <b>Must Read Titles</b>", date: { day: 20, month: 9, year: 2015, hour: 15, minutes: 40 } },
    ];

    //Дата
    var nowDate, nowHour, nowMinutes, nowDay, nowMonth, nowYear;

    //Отображение блока добавления
    var onAddBlock = false;

    //Загружаемая фотография
    var book_image;





    /*#######################
      ### Функции - Общие ###
      #######################*/

    //Отображение блока добавления
    function displayAddBlock() {
        if (onAddBlock) {
            document.getElementById("add_block").style = "display: none";
            onAddBlock = false;
        } else {
            window.document.getElementById("add_block").style = "display: block";
            onAddBlock = true;
        }
    }

    //Загрузка фотографии
    function image_loaded() {
        document.getElementById("add_image_label").style = "background-color: #16A3F9";
        book_image = document.getElementById("add_book_image").value;
        book_image = "books/" + book_image.substring(12);
        document.getElementById("loaded_image").style = "background-image: url(\"" + book_image + "\"); display: block;";
    }

    //Обработчики событий
    document.getElementById("categoryAll").onclick = function () { loadLibrary() };
    document.getElementById("categoryPopular").onclick = function () { mostPopular() };
    document.getElementById("search").oninput = function () { search() };
    document.getElementById("top_arrow").onclick = function () { update() };
    document.getElementById("add_book_display_button").onclick = function () { displayAddBlock() };
    document.getElementById("add_book").onclick = function () { addBook() };
    document.getElementById("add_book_image").onchange = function () { image_loaded() };    

    //Выбор категории
    function categoryClick(category) {
        document.getElementById("categoryAll").style = "";
        document.getElementById("categoryPopular").style = "";
        document.getElementById(category).style = "color: white !important;\
        background-color: #95b6d5;\
        padding: 5px;\
        padding-left: 10px;\
        padding-right: 10px;\
        border-radius: 7px;"
    }

    //Текущая дата
    function updateDate() {
        nowDate = new Date();
        nowHour = nowDate.getHours();
        nowMinutes = nowDate.getMinutes();
        nowDay = nowDate.getDate();
        nowMonth = nowDate.getMonth();
        nowYear = nowDate.getFullYear();
    }

    //Обновление информации
    function update() {
        //Обновляем дату
        updateDate();
        //Перезагружаем библиотеку и историю
        loadLibrary();
        loadHistory();
        //Очистка загруженного изображения
        book_image = "";
        document.getElementById("add_image_label").style = "";
        document.getElementById("loaded_image").style = "";
        //Перезагружаем блок добавления
        onAddBlock = true;
        displayAddBlock();
        var title = document.getElementById("add_book_title").value = "";
        var author = document.getElementById("add_book_author").value = "";
    }





    /*######################################
      ### Функции - Работа с библиотекой ###
      ######################################*/

    //Формируем код блока книги
    function createBookBlock(id, title, author, image, stars) {
        var headCode = "<div class=\"book book_id" + id + "\">\
				<div class=\"book_pic\"><img src=\"books/"+ image + "\" alt=\"cover\"></div>\
				<div class=\"book_title\">"+ title + "</div>\
				<div class=\"book_author\">"+ author + "</div>\
				<div class=\"stars\">";

        var botCode = '';
        var count = 5;
        for (var i = 0; i < (5 - stars); i++) {
            botCode += "<div onclick=\"js.star(" + count + "," + id + ")\" class=\"stars__star stars__star--zero\"></div>";
            count--;
        }
        for (var i = 0; i < stars; i++) {
            botCode += "<div onclick=\"js.star(" + count + "," + id + ")\" class=\"stars__star stars__star--full\"></div>";
            count--;
        }

        var code = headCode + botCode + "</div></div>";

        document.getElementById("books").innerHTML += code;
    }

    //Загружаем библиотеку
    function loadLibrary() {
        categoryClick("categoryAll");
        document.getElementById("books").innerHTML = "";
        for (var i = 0; i < Library.length; i++) {
            var book = Library[i];
            createBookBlock(book["id"], book["title"], book["author"], book["image"], book["stars"]);
        }
    }

    //Поиск
    function search() {
        document.getElementById("books").innerHTML = "";
        var count = 0;
        var search = document.getElementById("search").value.toLowerCase();
        for (var i = 0; i < Library.length; i++) {
            var book = Library[i];
            if ((book["title"].toLowerCase().indexOf(search) != -1) || (book["author"].toLowerCase().indexOf(search) != -1)) {
                createBookBlock(book["id"], book["title"], book["author"], book["image"], book["stars"]);
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
        if (Library[id].stars != rating) {
            Library[id].stars = rating;
            var history_id = History.length + 1;
            History.push({
                id: history_id, text: "You rate  <b>" + Library[id].title + "</b> by <b>" + Library[id].author + "</b> " + rating + " stars",
                date: { day: nowDay, month: nowMonth, year: nowYear, hour: nowHour, minutes: nowMinutes }
            });
            update();
        }
    }

    //Только популярные
    function mostPopular() {
        categoryClick("categoryPopular");
        document.getElementById("books").innerHTML = "";

        var maxStar = 1;
        for (var i = 0; i < Library.length; i++) {
            var book = Library[i];
            if (book["stars"] > maxStar) {
                maxStar = book["stars"];
            }
        }

        for (var i = 0; i < Library.length; i++) {
            var book = Library[i];
            if (book["stars"] == maxStar) {
                createBookBlock(book["id"], book["title"], book["author"], book["image"], book["stars"]);
            }
        }
    }

    //Добавление книги
    function addBook() {
        var title = document.getElementById("add_book_title").value;
        var author = document.getElementById("add_book_author").value;
        var book_id = Library.length + 1;
        var history_id = History.length + 1;
        Library.push({ id: book_id, title: title, author: author, image: book_image.substring(6), stars: 0 });
        History.push({
            id: history_id, text: "You added <b>" + title + "</b> by <b>" + author + "</b> to your <b>Library</b>",
            date: { day: nowDay, month: nowMonth, year: nowYear, hour: nowHour, minutes: nowMinutes }
        });
        displayAddBlock();
        alert("Book \"" + author + " - " + title + "\" has been added!");
        update();
    }





    /*###################################
      ### Функции - Работа с историей ###
      ###################################*/

    //Генерируем строчку времени
    function generateTimeHistory(day, month, year, hour, minutes) {
        var diffYear = nowYear - year;
        var diffMonth = nowMonth - month;
        var diffDay = nowDay - day;
        var diffHour = nowHour - hour;
        var diffMinutes = nowMinutes - minutes;

        if (diffYear > 0) {
            return diffYear + " years";
        } else if (diffMonth > 0) {
            return diffMonth + " months";
        } else if (diffDay > 0) {
            return diffDay + " days";
        } else if (diffHour > 0) {
            return diffHour + " hours";
        } else if (diffMinutes > 0) {
            return diffMinutes + " minutes";
        } else {
            return "less a minute";
        }
    }

    //Создаём блока сообщения-истории
    function createHistoryBlock(id, text, date) {
        var history = document.getElementById("history_msgs");

        var day = date.day;
        var month = date.month;
        var year = date.year;
        var hour = date.hour;
        var minutes = date.minutes;
        var timeHistory = generateTimeHistory(day, month, year, hour, minutes);

        var headCode = "<div class=\"history_msg\" hystory_id" + id + ">\
				<div class=\"history_pic menu_pic\"></div>\
				<div class=\"history_text\">\
					<p>"+ text + "</p><span>" + timeHistory + " ago</span></div></div>";

        history.innerHTML = headCode + history.innerHTML;
    }

    //Загружаем историю
    function loadHistory() {
        document.getElementById("history_msgs").innerHTML = "";
        for (var i = 0; i < History.length; i++) {
            var msg = History[i];
            createHistoryBlock(msg["id"], msg["text"], msg["date"]);
        }
    }





    /*###############################
      ### Инициализация и возврат ###
      ###############################*/

    update();

    return {
        update : update,
        star: updateRating
    }
} ());