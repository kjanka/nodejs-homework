/**
 *
 * Ez a MW betolt egy vendeget az id alapjan.
 * Ha nincs ilyen id, a guests/ oldalra iranyit, egyebkent a guests/mod/:id oldara kerulunk.
 */

var requireOption = require("../common").requireOption;
var Guest = require('../../models/guest');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("guest load mw");
        var currentGuest = Guest.findOne({
            "_id": req.params._id
        }).exec(function(err, result){
            if(err){
                res.locals.currentGuest = null;
            }
            res.locals.currentGuest = result;
            return next();
        });

    };
};