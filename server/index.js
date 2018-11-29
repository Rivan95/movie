const express = require('express');
const app = express()
const PORT = 3000 || process.env.port;
const path = require('path');


require('./routes/routes.js')(app,express);
require('./controller/db.js');

app.listen(PORT,  () => {
    console.log('http://localhost:' + PORT)
});


