var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking room load mw");
        var currentBooking = res.locals.currentBooking;
        var currentGuest = Guest.findOne({
            "_id": currentBooking._guest
        }).exec(function(err, result){
            if(err){
                res.locals.currentGuest = null;
                console.log("guest not found to booking");
            }
            //console.log(err, result);
            res.locals.currentGuest = result;
            res.locals.currentBooking = currentBooking;
            return next();
        });




    };

};