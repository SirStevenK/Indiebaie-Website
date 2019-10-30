var mongoose = require('mongoose');

var Game = require('./models/game_model');
var Image = require('./models/image_model');

let newGame = new Game({ 
    nom: "Chicken Godfather",
    mainImage: "/images/ChickenGodfatherForIndiebaie.png",
    topImage: "/images/ChickenGodfatherTop.png",
    sortie: new Date('2018-06-18T18:00:00'),
    urlJeu: "/data_games/Chicken Godfather/index.html",
    urlKongregate: "https://www.kongregate.com/games/IndieBaie/chicken-godfather",
    images: ["/data_games/Chicken Godfather/screen1.png", "/data_games/Chicken Godfather/screen2.png", "/data_games/Chicken Godfather/screen3.png"]
});

newGame.save(function(err, user) {
    if (err) return res.json(err);
});

newGame = new Game({ 
    nom: "Monster Tycoon",
    mainImage: "/images/MonsterTycoonIB.png",
    topImage: "/images/MonsterTycoonTop.png",
    sortie: new Date('2018-07-30T18:00:00'),
    urlJeu: "/data_games/Monster Tycoon/index.html",
    urlKongregate: "https://www.kongregate.com/games/IndieBaie/monster-tycoon",
    images: ["/data_games/Monster Tycoon/screen1.png", "/data_games/Monster Tycoon/screen2.png", "/data_games/Monster Tycoon/screen3.png", "/data_games/Monster Tycoon/screen4.png", "/data_games/Monster Tycoon/screen5.png", "/data_games/Monster Tycoon/screen6.png", "/data_games/Monster Tycoon/screen7.png", "/data_games/Monster Tycoon/screen8.png", "/data_games/Monster Tycoon/screen9.png", "/data_games/Monster Tycoon/screen10.png"]
});

newGame.save(function(err, user) {
    if (err) return res.json(err);
});

 newGame = new Game({ 
    nom: "ESManager",
    mainImage: "/images/ESManagerForIndiebaie.png",
    topImage: "/images/ESManagerTop.png",
    sortie: null,
    urlJeu: null,
    urlKongregate: null,
    images: ["/data_games/ESManager/nsd.PNG", "/data_games/ESManager/nsm.PNG"]
});

newGame.save(function(err, user) {
    if (err) return res.json(err);
});

mongoose.connect('mongodb://localhost/indiebaie', {useNewUrlParser: true});