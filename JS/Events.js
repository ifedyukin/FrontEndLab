//Обработчики событий
var Events = (function (LibraryTools, Common) {

    "use strict";

     window.document.querySelector("#categoryAll").addEventListener("click", function () {
        LibraryTools.loadLibrary();
    });
     window.document.querySelector("#categoryPopular").addEventListener("click", function () {
        LibraryTools.mostPopular();
    });
     window.document.querySelector("#search").addEventListener("input", function () {
        LibraryTools.search()
    });
     window.document.querySelector("#add_book_display_button").addEventListener("click", function () {
        Common.displayAddBlock();
    });
     window.document.querySelector("#add_book").addEventListener("click", function () {
        LibraryTools.addBook();
    });
     window.document.querySelector("#add_book_image").addEventListener("change", function () {
        Common.imageLoaded();
    });
     window.document.querySelector("#top_arrow").addEventListener("click", function() {
        Main.update();
    });

} (LibraryTools, Common));