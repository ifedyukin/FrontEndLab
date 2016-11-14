var Notification = (function (Utils) {

    "use strict;"

    function notification(id, text) {
        this.id = id;
        this.text = text;

        this.date = Utils.updateDate();
    }

    return notification;

} (Utils));