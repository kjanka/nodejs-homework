/**
 *
 * Ez a MW betolt egy szobat.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room load mw");
        return next();
    };
};