/**
 *
 * Ez a MW kitorol egy foglalast.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking torles mw");
        return next();
    };
};