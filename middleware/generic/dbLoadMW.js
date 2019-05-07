var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("DBLOAD");
        Guest.find().exec(function(err, result){
            if(err){
                res.locals.guest_array = null;
            }
            //console.log(err, result);
            res.locals.guest_array = result;
            //return next();
        });
        Room.find().exec(function(err, result){
            if(err){
                res.locals.guest_array = null;
            }
            //console.log(err, result);
            res.locals.room_array = result;

        });
        Booking.find().exec(function(err, result){
            if(err){
                res.locals.guest_array = null;
            }
            console.log(err, result);
            res.locals.booking_array = result;
            return next();
        });

    };
};