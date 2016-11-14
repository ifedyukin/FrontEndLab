//Обработчики событий
var Events = (function (LibraryTools, Common) {

    "use strict";

    document.getElementById("categoryAll").addEventListener("click", function () {
        LibraryTools.loadLibrary();
    });
    document.getElementById("categoryPopular").addEventListener("click", function () {
        LibraryTools.mostPopular();
    });
    document.getElementById("search").addEventListener("input", function () {
        LibraryTools.search()
    });
    document.getElementById("add_book_display_button").addEventListener("click", function () {
        Common.displayAddBlock();
    });
    document.getElementById("add_book").addEventListener("click", function () {
        LibraryTools.addBook();
    });
    document.getElementById("add_book_image").addEventListener("change", function () {
        Common.imageLoaded();
    });

} (LibraryTools, Common));