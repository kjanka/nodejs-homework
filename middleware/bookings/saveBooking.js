/**
 *
 * Ez a MW elmenti a szerkesztett foglalast.
 * Ha minden ok, tovabbkuld a foglalasok listajara.
 * Ha nem, akkor a szerkesztesnel maradunk.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    };
};