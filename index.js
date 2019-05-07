var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

var Guest = require('./models/guest');
var Room = require('./models/room');
var Booking = require('./models/booking');

/*var guest1 = new Guest();
guest1.name ="Ed Ward";
guest1.category = 2;


var guest2 = new Guest();
guest2.name = "Bill Gate$";
guest2.category = 5;

guest1.save(function(err){
    console.log("guest saved");
});
guest2.save(function(err){
    console.log("guest saved");
});

var room1 = new Room();
room1.cleaning = true;
room1.category = 3;

room1.save(function(err){
    console.log("room1 saved");
});

var room2 = new Room();
room2.cleaning = false;
room2.category = 2;
room2.save(function(err){
    console.log("room2 saved");
});

var booking1 = new Booking({
   start_date: "2019-11-12",
   end_date: "2019-11-14",
   _room: room1,
   _guest: guest2
});

booking1.save(function(err){
   console.log("booking1 saved");
});

var booking2 = new Booking({
    start_date: "2019-11-12",
    end_date: "2019-11-14",
    _room: room2,
    _guest: guest1
});

booking2.save(function(err){
    console.log("booking2 saved");
});*/

    app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

require('./routes/index')(app);
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