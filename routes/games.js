var http = require('http');
var express = require('express');
var router = express.Router();

var Game = require('../models/game_model')

pad = (n) => n < 10 ? "0" + n : n;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

/* GET home page. */
router.get('/[a-zA-Z0-9-]+\/?/', function(req, res, next) {
  

  var gamename = req.url.replace(/\//gi, "").replace(/-/gi, " ");
  Game.findOne({ nom: gamename }, (err, game) => {
    if (!err && game !== null) {
      if (game.urlKongregate !== null) {
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
        // axios.get("http://www.kongregate.com/games/indiebaie/monster-tycoon/metrics.json").then(res => {
        //   console.log("non");  
        //   console.log(res);
        //   console.log(JSON.parse(res).gameplays_count);
        //   console.log(JSON.parse(res).rating);
        //   console.log("oui");
        //   res.render('game', {game: game, nb_gameplay: res.gameplays_count, rating: res.rating});
        // }).catch(err => {
        //   res.render('game', {game: game, nb_gameplay: null, rating: null});
        // })
      }
      else res.render('game', {game: game, sortie: null, nb_gameplay: null, rating: null});
    }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;
