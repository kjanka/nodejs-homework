/**
 *
 * Ez a MW betolti a szobakat.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes room load mw");
        return next();
    };
};