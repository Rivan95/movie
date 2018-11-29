var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data_1',
    { useNewUrlParser: true },
    function (err) {
        if (err) console.log(err);
        else console.log("connesso al db");
    });

mongoose.Promise = global.Promise;