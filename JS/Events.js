var Events = (function (LibraryTools, Common, Main) {

    "use strict";
    //Обработчики событий
    document.getElementById("categoryAll").onclick = function () {
        LibraryTools.loadLibrary()
    };
    document.getElementById("categoryPopular").onclick = function () {
        LibraryTools.mostPopular()
    };
    document.getElementById("search").oninput = function () {
        LibraryTools.search()
    };
    document.getElementById("top_arrow").onclick = function () {
        Main.update()
    };
    document.getElementById("add_book_display_button").onclick = function () {
        Common.displayAddBlock()
    };
    document.getElementById("add_book").onclick = function () {
        LibraryTools.addBook()
    };
    document.getElementById("add_book_image").onchange = function () {
        Common.imageLoaded()
    };

} (LibraryTools, Common));