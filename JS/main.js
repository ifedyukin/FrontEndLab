"use strict";

//Блок библиотеки
var books_block = document.getElementById("books");
//Библиотека
var Library = [
    { id: 1, title: "Jewels of Nizam", author: "Geeta Devi", image: "JewelsOfNizam.jpg", stars: 5 },
    { id: 2, title: "Cakes & Bakes", author: "Sanjeev Kapoor", image: "CakesAndBakes.jpg", stars: 5 },
    { id: 3, title: "Jamie's Kitchen", author: "Jamie Oliver", image: "JamiesKitchen.jpg", stars: 4 },
    { id: 4, title: "Inexpensive Family Meals", author: "Simon Holst", image: "InexpensiveFamilyMeals.jpg", stars: 3 },
    { id: 5, title: "Paleo Slow Cooking", author: "Chrissy Gawer", image: "PaleoSlowCooking.jpg", stars: 4 },
    { id: 6, title: "Cook Like an Italian", author: "Toble Puttock", image: "CookLikeAnItalian.jpg", stars: 3 },
    { id: 7, title: "Suneeta Vaswani", author: "Geeta Devi", image: "SuneetaVaswani.jpg", stars: 5 },
    { id: 8, title: "Jamie Does", author: "Jamie Oliver", image: "JamieDoes.jpg", stars: 3 },
    { id: 9, title: "Jamie's Italy", author: "Jamie Oliver", image: "JamiesItaly.jpg", stars: 5 },
    { id: 10, title: "Vegetables Cookbook", author: "Matthew Biggs", image: "VegetablesCookbook.jpg", stars: 3 }
];

//Отображение блока добавления
var onAddBlock = false;
//Загружаемая фотография
var book_image;

//Отображение блока добавления
function displayAddBlock() {
    if (onAddBlock) {
        document.getElementById("add_block").style = "display: none";
        onAddBlock = false;
    } else {
        document.getElementById("add_block").style = "display: block";
        onAddBlock = true;
    }
}

//Загрузка фотографии
function image_loaded() {
    document.getElementById("add_image_label").style = "background-color: #16A3F9";
    book_image = document.getElementById("add_book_image").value;
    book_image = "books/" + book_image.substring(12);
    document.getElementById("loaded_image").style = "background-image: url(\"" + book_image + "\"); display: block;";
}

//Формируем код блока книги
function createBookBlock(id, title, author, image, stars) {
    var headCode = "<div class=\"book book_id"+id+"\">\
				<div class=\"book_pic\"><img src=\"books/"+ image + "\" alt=\"cover\"></div>\
				<div class=\"book_title\">"+ title + "</div>\
				<div class=\"book_author\">"+ author + "</div>\
				<div class=\"stars\">";

    var botCode='';
    for (var i = 0; i < (5 - stars); i++) {
        botCode += "<div class=\"stars__star stars__star--zero\"></div>";
    }
    for (var i = 0; i < stars; i++) {
        botCode += "<div class=\"stars__star stars__star--full\"></div>";
    }

    var code = headCode + botCode + "</div></div>";

    books_block.innerHTML+=code;
}


//Загружаем библиотеку
function loadLibrary() {
    for (var i=0; i<Library.length; i++){
        var book = Library[i];
        createBookBlock(book["id"], book["title"], book["author"], book["image"], book["stars"]);
    }
}

//Добавление книги
function addBook(){
    var title = document.getElementById("add_book_title").value;
    var author = document.getElementById("add_book_author").value;
    var book_id = Library.length+1;
    Library.push({id:book_id,title:title,author:author,image:book_image.substring(6),stars:0});
}