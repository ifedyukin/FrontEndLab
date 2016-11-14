var NotificationView = (function (NotificationsController, NotificationsStore) {

    "use strict";

    //Загружаем историю
    function loadHistory() {
        window.document.querySelector("#history_msgs").innerHTML = "";
        for (var i = 0; i < NotificationsStore.length; i++) {
            var msg = NotificationsStore[i];
            createBlock(
                msg["id"],
                msg["text"],
                msg["date"]
            );
        }
    }

    //Создаём блока сообщения-истории
    function createBlock(id, text, date) {
        var history = window.document.querySelector("#history_msgs");

        var day = date.day;
        var month = date.month;
        var year = date.year;
        var hour = date.hour;
        var minutes = date.minutes;
        var timeHistory = NotificationsController.generateTime(day, month, year, hour, minutes);

        var headCode = "<div class=\"history_msg\" hystory_id" + id + ">" +
            "<div class=\"history_pic menu_pic\"></div>" +
            "<div class=\"history_text\">" +
            "<p>" + text + "</p><span>" + timeHistory + " ago</span></div></div>";

        history.innerHTML = headCode + history.innerHTML;
    }

    return {
        createBlock: createBlock,
        loadHistory: loadHistory
    };

} (NotificationsController, NotificationsStore));