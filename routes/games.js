var http = require('http');
var express = require('express');
var router = express.Router();

var Game = require('../models/game_model')

pad = (n) => n < 10 ? "0" + n : n; // format number XX

router.get('/', function(req, res, next) {
  res.redirect('/');
});

/* GET home page. */
router.get('/[a-zA-Z0-9-]+\/?/', function(req, res, next) {
  var gamename = req.url.replace(/\//gi, "").replace(/-/gi, " ");
  Game.findOne({ nom: gamename }, (err, game) => {
    if (!err && game !== null) {
      if (game.urlKongregate !== null) {
        // Obtenir api Kongregate du jeu
        http.get(game.urlKongregate.replace("https", "http") + '/metrics.json', (response) => {
          let data = '';
          response.on('data', (chunk) => {
            data += chunk;
          });
          response.on('end', () => {
            let date = game.sortie;
            let sortieString = pad(date.getDate()) + "-" + pad(date.getMonth()+1) + "-" + pad(date.getFullYear())
            res.render('game', {game: game, sortie: sortieString, nb_gameplay: JSON.parse(data).gameplays_count, rating: JSON.parse(data).rating});
          });
        }).on("error", (error) => {
          res.render('game', {game: game, sortie: null, nb_gameplay: null, rating: null});
        });
      }
      else res.render('game', {game: game, sortie: null, nb_gameplay: null, rating: null});
    }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;
