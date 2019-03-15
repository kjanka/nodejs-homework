/**
 *
 * Ez a MW betolt egy foglalast.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    };
};