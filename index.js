var express = require('express');
var app = express();



app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

//require('./routes/guests')(app);
require('./routes/rooms')(app);
//require('./routes/bookings')(app);

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