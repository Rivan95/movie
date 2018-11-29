var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filmSchema = new Schema({
    titolo: {
        type: String,
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        uppercase: false,
        trim: true,
    },
    anno: {
        type: Number,
        max: 2020,
        min: 1900,
    },
    voto: {
        type: Number,
        default: 0,
        max: 10,
        min: 0,
    },
    nvoti: {
        type: Number,
        default: 0,
    },
    genere: [{
        type: String,
        require: true,
        enum: ["animazione", "avventura","Thriller","horror","commedia","fantastico","fantascienza","azione"]


    }],
    dataCreazione: {
        type: Date
    },
    attori: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor"

    }]
});

filmSchema.pre('save', function (next) {
    this.data = Data.now()
    next()
});

module.exports= mongoose.model('movie', filmSchema)