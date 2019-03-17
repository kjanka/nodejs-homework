/**
 *
 * Ez a MW betolti az osses foglalast az adatbazisbol.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes booking load mw");
        return next();
    };
};