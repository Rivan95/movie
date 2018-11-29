module.exports = (function() {
var movie = require('./movie')
var actor = require('../actors/Actor')

    var getAll = (req,res) => {
       
        var query = movie.find({})
       if(req.query.anno){
           query.where('anno').equals(req.query.anno)
       }
        if (req.query.votomin) {
            query.where('voto').gt(req.query.votomin)
        }
         if (req.query.votomax) {
            query.where('voto').lt(req.query.votomax)
        }

       
        query

        .populate({
            path: "attori",
            match: {eta: { $gte:20}},
            select: ["nome","cognome","eta","img"],
        })




        .exec()
        .then(function (data){
           res.json(data)
        })
        .catch(function (err){
            res.json(err)
        })
    }
    var getOne = (req, res) => {
        movie.findById(req.params.id)
            .exec()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err)
            })
    }
    var votaFilm = (req, res) => {
        var filmid = req.params.id
        var voto = req.body.voto
        movie.findById(filmid)
            .exec()
            .then(function (movie) {
                nvoti += 1;
                movie.voto = (movie.voto + voto)/nvoti;
           return  movie.save();
        })
           
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err)
            })
    }
    var modificaFilm = (req, res) => {
        var film = req.body;
        var modifica = new movie(film);
        modifica.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
        res.json("ho modificato il film:" + film)
    }

    var creaFilm = (req, res) => {
        var film = req.body;
        var crea =new movie(film);
        crea.save()
           .then(data => res.json(data))
           .catch(err => res.json(err))
    }
    var eliminaFilm = (req, res) => {
        var film = req.params.id; console.log(film)
        movie.findByIdAndRemove(film)
            .exec()
            .then(function (nome) {
                res.json(nome);
            })
            .catch(function (err) {
                throw err;
            });

    }
    return {
        getAll:getAll,
        getOne:getOne,
        votaFilm:votaFilm,
        modificaFilm:modificaFilm,
        eliminaFilm:eliminaFilm,
        creaFilm:creaFilm,
 
    }
})()