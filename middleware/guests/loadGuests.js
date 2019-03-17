/**
 *
 * Ez a MW betolti az osszes vendeget az adatbazisbol.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes guest load mw");
        return next();
    };
};