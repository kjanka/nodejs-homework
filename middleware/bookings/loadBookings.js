/**
 *
 * This mw loads all bookings from the db and passes is on (to the template)
 */



module.exports = function(objectrepository){

    var requireOption = require("../common").requireOption;
    var Booking = require('../../models/booking');
    const mongoose = require('mongoose');
    var Schema = require('mongoose').Schema;
    mongoose.connect('mongodb://localhost/nbksp5');

    return function(req, res, next){
        console.log("booking load mw");
        Booking.find().exec(function(err, result){
            if(err){
                res.locals.booking_array = null;
            }
            console.log(err, result);
            res.locals.booking_array = result;
            return next();
        });
    };
};