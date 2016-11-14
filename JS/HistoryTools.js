var HistoryTools = (function (Common, DB) {

    "use strict";

    //Генерируем строчку времени
    function generateTimeHistory(day, month, year, hour, minutes) {
        var diffYear = Common.currentDate.nowYear - year;
        var diffMonth = Common.currentDate.nowMonth - month;
        var diffDay = Common.currentDate.nowDay - day;
        var diffHour = Common.currentDate.nowHour - hour;
        var diffMinutes = Common.currentDate.nowMinutes - minutes;


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
        var history =  window.document.querySelector("#history_msgs");

        var day = date.day;
        var month = date.month;
        var year = date.year;
        var hour = date.hour;
        var minutes = date.minutes;
        var timeHistory = generateTimeHistory(day, month, year, hour, minutes);

        var headCode = "<div class=\"history_msg\" hystory_id" + id + ">" +
            "<div class=\"history_pic menu_pic\"></div>" +
            "<div class=\"history_text\">" +
            "<p>" + text + "</p><span>" + timeHistory + " ago</span></div></div>";

        history.innerHTML = headCode + history.innerHTML;
    }

    //Загружаем историю
    function loadHistory() {
         window.document.querySelector("#history_msgs").innerHTML = "";
        for (var i = 0; i < DB.history.length; i++) {
            var msg = DB.history[i];
            createHistoryBlock(
                msg["id"],
                msg["text"],
                msg["date"]
            );
        }
    }

    return {
        createHistoryBlock: createHistoryBlock,
        loadHistory: loadHistory
    };
} (Common, DB));