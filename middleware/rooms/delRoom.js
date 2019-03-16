/**
 *
 * Ez a MW kitorol egy szobat.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room torles mw");
        return next();
    };
};