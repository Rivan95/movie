const path = require('path');

module.exports = function (app,express) {
   
   var bodyParser = require('body-parser')
   app.use(bodyParser.json())




    // app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')))
    // app.use('/popper.js', express.static(path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')))
    app.use('/movies', require('../resources/movies/movies'));
}