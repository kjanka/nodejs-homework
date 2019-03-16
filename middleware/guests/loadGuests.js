/**
 *
 * Ez a MW betolti a vendegeket.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("osszes guest load mw");
        return next();
    };
};