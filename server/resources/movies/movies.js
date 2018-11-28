var express = require('express');
var router = express.Router();
var controller = require('./controller')
router.get('/', controller.getAll)
router.get('/:id', controller.getAll)

module.exports = router;