/**
 *
 * Ez a MW elmenti a szerkesztett szobat.
 * Ha minden ok, tovabbkuld a szobak listajara.
 * Ha nem, akkor a szerkesztesnel maradunk.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room save mw");
        return next();
    };
};