/**
 *
 * Ez a MW kitorol egy foglalast a foglalas id-ja alapjan.
 * torles utan a bookings/ oldalra iranyit.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking torles mw");
        return next();
    };
};