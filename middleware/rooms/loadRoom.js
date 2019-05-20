/**
 *
 * This mw will load a chosen room from the db
 */

var requireOption = require("../common").requireOption;
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("room load mw");
        //console.log(req.params._id);
        var currentRoom = Room.findOne({
            "_id": req.params._id
        }).exec(function(err, result){
            if(err){
                res.locals.currentRoom = null;
            }
            //console.log(err, result);
            res.locals.currentRoom = result;
            return next();
        });

    };
};