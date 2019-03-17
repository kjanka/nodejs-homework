/**
 *
 * Ez a MW kitorol egy vendeget.
 * Torles utan a guests/ oldalra iranyit.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("guest torles mw");

        return next();
    };
};