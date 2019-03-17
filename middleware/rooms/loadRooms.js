/**
 *
 * Ez a MW betolti az osszes szoba adatait az adatbazisbol.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes room load mw");
        return next();
    };
};