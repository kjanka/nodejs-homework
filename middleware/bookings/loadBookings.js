/**
 *
 * Ez a MW betolti a foglalasokat.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes booking load mw");
        return next();
    };
};