var express = require('express');
var router = express.Router();
var controller = require('./controller')
router.get('/', controller.getAll)

router.get('/:id([0-9]{1,4})', controller.getOne)

router.put('/:id([0-9]{1,4})', controller.modificaFilm)

router.put('/voto/:id([0-9]{1,4})', controller.votaFilm)

router.delete('/:id([0-9]{1,4})', controller.eliminaFilm)

router.post('/', controller.creaFilm)


module.exports = router;