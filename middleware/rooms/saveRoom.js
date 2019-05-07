/**
 *
 * Ez a MW elmenti a szerkesztett szobat.
 * Ha minden ok, tovabbkuld a szobak listajara.
 * Ha nem, akkor a szerkesztesnel maradunk.
 */

var requireOption = require("../common").requireOption;
var Room = require('../../models/room');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room save mw");
        return res.redirect('/rooms');
    };
};