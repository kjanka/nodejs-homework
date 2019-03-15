/**
 *
 * Ez a MW megnezi, hogy a szoba adatai megfeleloek e.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    };
};