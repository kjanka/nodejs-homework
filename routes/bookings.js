module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = require('../middleware/generic/auth')
var renderMW = require('../middleware/generic/render');
var checkBooking = require('../middleware/bookings/checkBooking');
var saveBooking = require('../middleware/bookings/saveBooking');
var loadBooking = require('../middleware/bookings/loadBooking');
var delBooking = require('../middleware/bookings/delBooking');
var loadBookings = require('../middleware/bookings/loadBookings');
var dbLoadMW = require('../middleware/generic/dbLoadMW');
var Booking = require('../models/booking');

var objrep = {};

app.get('/bookings/add', authMW(),
    checkBooking(new Booking()),
    dbLoadMW(),
    renderMW(objrep, 'edit_booking'),
    saveBooking(objrep)
);
app.post('/bookings/add',
    authMW(),
    checkBooking(objrep),
    saveBooking(objrep)
    );
app.get('/bookings/del/:id',
    authMW(),
    loadBooking(objrep),
    delBooking(objrep)
    );
app.get('/bookings/mod/:_id',
    authMW(),
    loadBooking(objrep),
    checkBooking(objrep),
    dbLoadMW(),
    renderMW(objrep, "edit_booking")
    );
app.post('/bookings/mod/:_id',
    authMW(),
    loadBooking(objrep),
    checkBooking(objrep),
    saveBooking(objrep)
    );
app.get('/bookings',
    authMW(),
    dbLoadMW(),
    loadBookings(objrep),
    renderMW(objrep, "bookings")
    );

};