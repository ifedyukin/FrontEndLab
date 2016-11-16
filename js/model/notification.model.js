var Notification = (function (Utils) {

    "use strict;"

    function Notification(id, text) {
        this.id = id;
        this.text = text;

        this.date = Utils.updateDate();
    }

    return Notification;

} (Utils));