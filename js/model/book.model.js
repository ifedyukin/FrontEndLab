var Book = (function(){

    "use strict;"

    function Book(id, title, author, image){
        this.id = id;
        this.title = title;
        this.author = author;

        this.stars = 0;
        this.image  = image || "nocover.jpg";
    }

    return Book;

}());