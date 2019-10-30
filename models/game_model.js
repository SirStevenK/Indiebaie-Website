var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
    nom: String,
    mainImage: String,
    topImage: String,
    sortie: Date,
    urlJeu: String,
    urlKongregate: String,
    images: [String]
});

module.exports = mongoose.model('games', gameSchema);
