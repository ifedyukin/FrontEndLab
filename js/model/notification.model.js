var Notification = (function (Utils) {

    "use strict;"

    function Notification(id, text, date) {
        this.id = id;
        this.text = text;

        this.date = date || Utils.updateDate();
    }

    return Notification;

} (Utils));