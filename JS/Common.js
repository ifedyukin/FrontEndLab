//Общие Функции
var Common = (function () {

    "use strict";

    //Дата
    var nowDate;
    var nowHour;
    var nowMinutes;
    var nowDay;
    var nowMonth;
    var nowYear;

    //Загружаемая фотография
    var bookImage;

    //Отображение блока добавления
    function displayAddBlock() {
        if (document.getElementById("add_block").style.display == "block") {
            document.getElementById("add_block").style.display = "none";
        } else {
            window.document.getElementById("add_block").style.display = "block";
        }
    }

    //Загрузка фотографии
    function imageLoaded() {
        document.getElementById("add_image_label").style = "background-color: #16A3F9";
        Common.bookImage = document.getElementById("add_book_image").value;
        Common.bookImage = Common.bookImage.substring(12);
        Common.bookImage = "books/" + Common.bookImage;
        document.getElementById("loaded_image").style = "background-image: url(\"" +
            Common.bookImage + "\"); display: block;";
    }

    //Выбор категории
    function categoryClick(category) {
        document.getElementById("categoryAll").style = "";
        document.getElementById("categoryPopular").style = "";
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
        nowDate = new Date();
        nowHour = nowDate.getHours();
        nowMinutes = nowDate.getMinutes();
        nowDay = nowDate.getDate();
        nowMonth = nowDate.getMonth();
        nowYear = nowDate.getFullYear();
    }

    //Пустая ли строка
    function isBlank(string) {
        string = string.replace(/\s{2,}/g, ' ');
        return (string != ' ' && string != '') ? true : false;
    }

    updateDate();

    return {
        categoryClick: categoryClick,
        imageLoaded: imageLoaded,
        displayAddBlock: displayAddBlock,
        isBlank: isBlank,
        currentDate: {
            nowDay: nowDay,
            nowMonth: nowMonth,
            nowYear: nowYear,
            nowHour: nowHour,
            nowMinutes: nowMinutes
        },
        updateDate: updateDate,
        bookImage: bookImage
    };
} ());