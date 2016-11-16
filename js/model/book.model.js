var Book = (function(){

    "use strict;"

    function Book(id, title, author, image, stars){
        this.id = id;
        this.title = title;
        this.author = author;

        this.image  = image || "nocover.jpg";
        this.stars = stars || 0;

    }

    return Book;

}());