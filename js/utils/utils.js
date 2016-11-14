//Общие Функции
var Utils = (function() {

    "use strict";

    //Дата
    var nowHour;
    var nowMinutes;
    var nowDay;
    var nowMonth;
    var nowYear;

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

    //Текущая дата
    function updateDate() {
        var nowDate = new Date();
        nowHour = nowDate.getHours();
        nowMinutes = nowDate.getMinutes();
        nowDay = nowDate.getDate();
        nowMonth = nowDate.getMonth();
        nowYear = nowDate.getFullYear();
        return {
            nowDay: nowDay,
            nowMonth: nowMonth,
            nowYear: nowYear,
            nowHour: nowHour,
            nowMinutes: nowMinutes
        }
    }
    updateDate();

    //Пустая ли строка
    function isBlank(string) {
        string = string.replace(/\s{2,}/g, ' ');
        return (string != ' ' && string != '') ? true : false;
    }

    //События
    window.document.querySelector("#add_book_display_button").addEventListener("click", function() {
        displayAddBlock();
    });
    window.document.querySelector("#add_book_image").addEventListener("change", function() {
        imageLoaded();
    });

    return {
        updateDate: updateDate,
        displayAddBlock: displayAddBlock,
        categoryClick: categoryClick,
        isBlank: isBlank,
        bookImage: bookImage
    };
} ());