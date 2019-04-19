/**
 *
 * Ez a MW betolti az osszes szoba adatait az adatbazisbol.
 */

var requireOption = require("../common").requireOption;
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes room load mw");
        Room.find().exec(function(err, result){
            if(err){
                res.locals.room_array = null;
            }
            console.log(err, result);
            res.locals.room_array = result;
            return next();
        });
    };
};