/**
 *
 * Ez a MW betolt egy foglalast a foglalas id alapjan.
 * a bookings/mod/:id oldalra iranyit
 * ha nincs ilyen id-val foglalas, akkor a bookings/ oldalra iranyit.
 */

var requireOption = require("../common").requireOption;
var Booking = require('../../models/booking');
var Guest = require('../../models/guest');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking load mw");
        Guest.find().exec(function(err, result){
            if(err){
                res.locals.guest_array = null;
            }
            console.log(err, result);
            res.locals.guest_array = result;
            return next();
        });
    };
};