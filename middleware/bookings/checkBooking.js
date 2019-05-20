var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("booking check mw");

        if (typeof (req.body) !== 'undefined') {
            console.log(req.body.guestSelect);
            console.log(req.body.roomSelect);

            let newGuestPromise = Guest.findOne({
                "_id": req.body.guestSelect
            }).exec("find");

            let newRoomPromise = Room.findOne({
                "_id": req.body.roomSelect
            }).exec("find");

            return Promise.all([newGuestPromise, newRoomPromise])
                .then(
                    values => {

                        let newGuest = values [0] [0];

                        let newRoom = values [1] [0];

                        console.log(newGuest);
                        console.log(newRoom);
                        let _startDate = new Date(req.body.startDate);
                        let _endDate = new Date(req.body.endDate);
                        if (typeof (res.locals.currentBooking) !== 'undefined') {
                            //console.log(res.locals.currentBooking);
                            Booking.replaceOne({_id: req.params._id}, {
                                _guest: newGuest._id,
                                _room: newRoom._id,
                                start_date: _startDate,
                                end_date: _endDate
                            }, function (err, res) {
                                //console.log(res);
                                console.log(err);
                            });

                            return res.redirect("/bookings");


                        } else {
                            let newBooking = new Booking();
                            newBooking._guest = newGuest._id;
                            newBooking._room = newRoom._id;
                            newBooking.start_date = _startDate;
                            newBooking.end_date = _endDate;

                            newBooking.save(function (err) {
                                console.log("booking saved");
                            });
                            return res.redirect("/bookings");
                        }
                    }
                );

        }
    };
};