module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = require('../middleware/generic/auth')
var renderMW = require('../middleware/generic/render');
var checkBooking = require('../middleware/bookings/checkBooking');
var saveBooking = require('../middleware/bookings/saveBooking');
var loadBooking = require('../middleware/bookings/loadBooking');
var delBooking = require('../middleware/bookings/delBooking');
var loadBookings = require('../middleware/bookings/loadBookings');

var objrep = {};

app.get('/bookings/add', authMW(),
    renderMW(objrep, 'edit_booking'),
    checkBooking(objrep),
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
app.get('/bookings/mod/:id',
    authMW(),
    renderMW(objrep, "edit_booking"),
    loadBooking(objrep),
    checkBooking(objrep),
    saveBooking(objrep)
    );
app.post('/bookings/mod/:id',
    authMW(),
    loadBooking(objrep),
    checkBooking(objrep),
    saveBooking(objrep)
    );
app.get('/bookings',
    authMW(),
    loadBookings(objrep),
    renderMW(objrep, "bookings")
    );

};