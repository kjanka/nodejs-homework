/**
 *
 * Ez a MW betolt egy foglalast a foglalas id alapjan.
 * a bookings/mod/:id oldalra iranyit
 * ha nincs ilyen id-val foglalas, akkor a bookings/ oldalra iranyit.
 */

var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking load mw");
        var currentBooking = Booking.findOne({
            "_id": req.params._id
        }).exec(function(err, result){
            if(err){
                res.locals.currentBooking = null;
            }
            //console.log(err, result);
            res.locals.currentBooking = result;
        });


        return next();

    };
};