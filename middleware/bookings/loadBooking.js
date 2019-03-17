/**
 *
 * Ez a MW betolt egy foglalast a foglalas id alapjan.
 * a bookings/mod/:id oldalra iranyit
 * ha nincs ilyen id-val foglalas, akkor a bookings/ oldalra iranyit.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking load mw");
        return next();
    };
};