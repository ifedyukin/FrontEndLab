var Main = (function (Item, ItemStore, ItemView, ItemController, Utils) {

    "use strict";

    var ItemStore = new ItemStore();
    var ItemController = new ItemController(ItemStore, Item);
    var Utils = new Utils();
    var ItemView = new ItemView(ItemController, Utils);

    ItemView.load();

} (Item, ItemStore, ItemView, ItemController, Utils));