var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

require('./routes/index')(app);
require('./routes/rules')(app);
require('./routes/guests')(app);
require('./routes/rooms')(app);
require('./routes/bookings')(app);

app.use(function (err, req, res, next) {
    res.status(500).send('Error!!');

    console.error(err.stack);
});



app.use('/', function(req, res, next){
    next();
});

var server = app.listen(3000, function(){
    console.log("On: 3000");
});