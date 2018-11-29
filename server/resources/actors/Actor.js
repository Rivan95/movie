var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actorSchema = new Schema({


   
    nome: { type: String, required: true },
    cognome: { type: String, required: true },
    eta: {type: Number},
    img: { type: String, default: "https://via.placeholder.com/300"}
   
});
module.exports = mongoose.model('Actor', actorSchema,'attori')