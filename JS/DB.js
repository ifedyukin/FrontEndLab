//Данные
var DB = (function () {

    "use strict";

    //Библиотека
    var library = [
        {
            id: 1, title: "Jewels of Nizam",
            author: "Geeta Devi", image: "JewelsOfNizam.jpg", stars: 5
        },
        {
            id: 2, title: "Cakes & Bakes",
            author: "Sanjeev Kapoor", image: "CakesAndBakes.jpg", stars: 5
        },
        {
            id: 3, title: "Jamie's Kitchen",
            author: "Jamie Oliver", image: "JamiesKitchen.jpg", stars: 4
        },
        {
            id: 4, title: "Inexpensive Family Meals",
            author: "Simon Holst", image: "InexpensiveFamilyMeals.jpg", stars: 3
        },
        {
            id: 5, title: "Paleo Slow Cooking",
            author: "Chrissy Gawer", image: "PaleoSlowCooking.jpg", stars: 4
        },
        {
            id: 6, title: "Cook Like an Italian",
            author: "Toble Puttock", image: "CookLikeAnItalian.jpg", stars: 3
        },
        {
            id: 7, title: "Suneeta Vaswani",
            author: "Geeta Devi", image: "SuneetaVaswani.jpg", stars: 5
        },
        {
            id: 8, title: "Jamie Does",
            author: "Jamie Oliver", image: "JamieDoes.jpg", stars: 3
        },
        {
            id: 9, title: "Jamie's Italy",
            author: "Jamie Oliver", image: "JamiesItaly.jpg", stars: 5
        },
        {
            id: 10, title: "Vegetables Cookbook",
            author: "Matthew Biggs", image: "VegetablesCookbook.jpg", stars: 3
        }
    ];

    //История
    var history = [
        {
            id: 1, text: "You added <b>Fight Club</b> by <b>Chuck Palahniuk</b> to your" +
            "<b>Must Read Titles</b>", date: { day: 20, month: 9, year: 2015, hour: 15, minutes: 20 }
        },
        {
            id: 2, text: "You added <b>The Trial</b> by <b>Franz Kafka</b> to your" +
            "<b>Must Read Titles</b>", date: { day: 20, month: 9, year: 2015, hour: 15, minutes: 40 }
        },
    ];


    return {
        history: history,
        library: library
    };
} ());