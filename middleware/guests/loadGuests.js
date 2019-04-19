/**
 *
 * Ez a MW betolti az osszes vendeget az adatbazisbol.
 */

var requireOption = require("../common").requireOption;
var Guest = require('../../models/guest');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');


module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes guest load mw");
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