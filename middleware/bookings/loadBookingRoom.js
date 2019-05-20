/**
 * /**
 * This mw loads the room object of a chosen booking
 *
 * REDUNDANT
 * @type {requireOption}
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
        console.log("booking room load mw");
        var currentBooking = res.locals.currentBooking;
        var currentRoom = Room.findOne({
            "_id": currentBooking._room
        }).exec(function(err, result){
            if(err){
                res.locals.currentRoom = null;
                console.log("room not found to booking");
            }
            //console.log(err, result);
            res.locals.currentRoom = result;
            res.locals.currentBooking = currentBooking;
            return next();
        });




    };
};