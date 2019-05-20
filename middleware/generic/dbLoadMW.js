/**
 * This mw loads all 3 tables and passes them (to the template)
 * This is necessary for the booking list, as it requires rooms and guests as well
 * @type {requireOption}
 */

var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("DBLOAD");

        let p1 = Guest.find().exec('find').then(
            function (result) {
                console.log("guest db");
                res.locals.guest_array = result;

            },
            function (err) {
                res.locals.guest_array = null;
            }
        );

        let p2 = Room.find().exec('find').then(function (result) {
                console.log("room db");
                res.locals.room_array = result;

            },
            function (err) {
                res.locals.room_array = null;
            }
        );

        let p3 = Booking.find().populate('_room').populate('_guest').exec('find').then(function (result) {
                console.log("booking db");
                res.locals.booking_array = result;

            },
            function (err) {
                res.locals.booking_array = null;
            }
        );

        return Promise.all([p1, p2, p3]).then(value => {
            console.log('all');
            return next();
        });

    };
};