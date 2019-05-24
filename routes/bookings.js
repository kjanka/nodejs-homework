module.exports = function (app) {
    //app.use (express.static('static'));

    var authMW = require('../middleware/generic/auth')
    var renderMW = require('../middleware/generic/render');
    var loadBooking = require('../middleware/bookings/loadBooking');

    var loadBookingRoom = require('../middleware/bookings/loadBookingRoom');
    var loadBookingGuest = require('../middleware/bookings/loadBookingGuest');
    var checkBooking = require('../middleware/bookings/checkBooking');
    var delBooking = require('../middleware/bookings/delBooking');
    var loadBookings = require('../middleware/bookings/loadBookings');
    var dbLoadMW = require('../middleware/generic/dbLoadMW');
    var Booking = require('../models/booking');

    const bodyParser = require('body-parser');

    var objrep = {};

    app.get('/bookings/add', authMW(),
        dbLoadMW(),
        renderMW(objrep, 'edit_booking')
    );
    app.post('/bookings/add',
        authMW(),
        dbLoadMW(),
        bodyParser.urlencoded({extended: true}),
        checkBooking(objrep)
    );
    app.get('/bookings/del/:_id',
        authMW(),
        loadBooking(objrep),
        delBooking(objrep)
    );
    app.get('/bookings/mod/:_id',
        authMW(),
        loadBooking(objrep),
        dbLoadMW(),
        loadBookingRoom(objrep),
        loadBookingGuest(objrep),
        renderMW(objrep, "edit_booking")
    );
    app.post('/bookings/mod/:_id',
        authMW(),
        loadBooking(objrep),
        bodyParser.urlencoded({extended: true}),
        checkBooking(objrep)
    );
    app.get('/bookings',
        authMW(),
        dbLoadMW(),
        //loadBookings(objrep),
        renderMW(objrep, "bookings")
    );

};