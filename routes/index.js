var express = require('express');
var router = express.Router();

var Game = require('../models/game_model')

/* GET home page. */
router.get('/', function(req, res, next) {
  Game.find((err, Games) => {
    if (!err) {
      res.render('home', {games: Games.reverse()});
    }
    else {
      return console.error(err);
    }
  });
  
  // res.render('home');
  // res.send("oui")
});

module.exports = router;
