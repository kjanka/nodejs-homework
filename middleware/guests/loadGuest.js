/**
 *
 * Ez a MW betolt egy vendeget.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    };
};