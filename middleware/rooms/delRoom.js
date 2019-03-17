/**
 *
 * Ez a MW kitorol egy szobat az id alapjan.
 * Torles utan a rooms/ oldalra iranyit.
 *
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room torles mw");
        return next();
    };
};