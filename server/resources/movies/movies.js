var express = require('express');
var router = express.Router();
var controller = require('./controller')
router.get('/', controller.getAll)

router.get('/:id([a-z0-9]{24})', controller.getOne)

router.put('/:id([a-z0-9]{24})', controller.modificaFilm)

router.put('/voto/:id([a-z0-9]{24})', controller.votaFilm)

router.delete('/:id([a-z0-9]{24})', controller.eliminaFilm)

router.post('/', controller.creaFilm)


module.exports = router;