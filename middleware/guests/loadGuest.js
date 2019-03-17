/**
 *
 * Ez a MW betolt egy vendeget az id alapjan.
 * Ha nincs ilyen id, a guests/ oldalra iranyit, egyebkent a guests/mod/:id oldara kerulunk.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("guest load mw");
        return next();
    };
};