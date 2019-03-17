/**
 *
 * Ez a MW megnezi, hogy a foglalas adatai megfeleloek e az adott foglalas id-ja alapjan

 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking check mw");
        return next();
    };
};