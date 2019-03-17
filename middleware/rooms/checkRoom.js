/**
 *
 * Ez a MW megnezi, hogy a szoba adatai megfeleloek e az id alapjan.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room check mw");
        return next();
    };
};