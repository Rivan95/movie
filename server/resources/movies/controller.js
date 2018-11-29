module.exports = (function() {
var movie = require('./movie')

    var getAll = (req,res) => {
        res.json("lista tutti films")
    }
    var getOne = (req, res) => {
        var id =req.params.id;
        res.json("lista con id: " + id)
    }
    var votaFilm = (req, res) => {
        var filmid = req.params.id;
        var voto = req.body.voto;
        res.json("questo film con id: " + filmid + " " + "con voto: " + voto )
    }
    var modificaFilm = (req, res) => {
        var filmid = req.params.id;
        var film = req.body;
        res.json("ho modificato il film con id:" + filmid + " " + film)
    }

    var creaFilm = (req, res) => {
        var film = req.body;
        var crea =new movie(film);
        crea.save()
           .then(data => res.json(data))
           .catch(err => res.json(err))
    }
    var eliminaFilm = (req, res) => {
        var filmid = req.params.id;
        var elimina = req.body;
        // res.json("ho eliminato il film con id:" + filmid + " " + elimina)
        res.json(elimina)
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