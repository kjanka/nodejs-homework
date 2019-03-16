/**
 *
 * Ez a MW betolt egy vendeget.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("guest load mw");
        return next();
    };
};