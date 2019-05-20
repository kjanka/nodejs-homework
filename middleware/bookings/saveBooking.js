/**
 *
 * Ez a MW elmenti a szerkesztett foglalast.
 * Ha minden ok, tovabbkuld a foglalasok listajara.
 * Ha nem, akkor a szerkesztesnel maradunk.
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
        console.log("booking save mw");


        return redirect("/bookings");

    };
};