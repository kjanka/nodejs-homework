/**
 *
 * This mw will check if a room is new or one that already exists in the database and has been modified
 * After that, it will save the room to the db
 */

var requireOption = require("../common").requireOption;
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room save mw");
        if (typeof (req.body) !== 'undefined') {
            var cleaning = req.body.cleaning;
            var cl = typeof(cleaning) !== 'undefined';

            if (typeof(res.locals.currentRoom) !== 'undefined') {

                Room.updateOne({ _id: req.params._id }, { name: req.body.name, category: req.body.category, cleaning: cl}, function(err, res) {
                });
                return res.redirect("/rooms");

            }else {
                let newRoom = new Room();
                newRoom.name = req.body.name;
                newRoom.category = req.body.category;
                newRoom.cleaning = cl;
                newRoom.save(function(err){
                    console.log("room saved");
                });

                return res.redirect("/rooms");
            }
        }
    };
};