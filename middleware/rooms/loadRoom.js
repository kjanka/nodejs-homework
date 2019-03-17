/**
 *
 * Ez a MW betolt egy szobat az id alapjan.
 * Ha nincs ilyen id, a rooms/ oldalra iranyit, egyebkent a rooms/mod/:id oldalra kerulunk.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room load mw");
        return next();
    };
};