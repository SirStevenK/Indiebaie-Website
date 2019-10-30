var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var imageSchema = mongoose.Schema({
    nom: String,
    linkImage: String,
    jeu: ObjectId
});

module.exports = mongoose.model('images', imageSchema);
