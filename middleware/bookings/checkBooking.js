/**
 *
 * Ez a MW megnezi, hogy a foglalas adatai megfeleloek e.

 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    };
};